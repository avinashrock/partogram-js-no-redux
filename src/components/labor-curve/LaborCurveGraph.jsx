import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs';
import classNames from 'classnames/bind';
import { intlShape } from 'react-intl';
import '../../application/PartogramStyles.css';
import {
  LABOR_CURVE_LOWER_BOUND_Y1_AXIS,
  LABOR_CURVE_UPPER_BOUND_Y1_AXIS,
  LABOR_CURVE_LOWER_BOUND_Y2_AXIS,
  LABOR_CURVE_UPPER_BOUND_Y2_AXIS,
  LABOR_CURVE_UPPER_BOUND_FIFTH_PALABLE_Y2_AXIS,
  LABOR_CURVE_LOWER_BOUND_FIFTH_PALABLE_Y2_AXIS,
  LABOR_CURVE_GRAPH_WIDTH_OFFSET,
  FETAL_POSITION_PREF_CONFIG,
  LABOR_CURVE_IS_FIFTH_PALPABLE,
} from '../../constants';
import {
  getLaborCurveGraphData,
  getLaborData,
} from '../carbonHelpers';
import styles from './LaborCurveGraph.scss';
import { getTicks } from '../timelineHelpers';


const bindStylesToLaborCurve = classNames.bind(styles);

const propTypes = {
  // Labor Curve Details that are to be plotted.
  laborCurveResponse: PropTypes.array,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  // Contains all the properties required to render the timeline View.
  timelineProps: PropTypes.shape({
    getTimebarWidth: PropTypes.func,
    width: PropTypes.number,
    initialLoadDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    tickValues: PropTypes.shape({
      upperBar: PropTypes.array,
      lowerBar: PropTypes.array,
      DST: PropTypes.instanceOf(Date),
    }),
    interval: PropTypes.shape({
      timeFrame: PropTypes.shape({
        name: PropTypes.string,
        scale: PropTypes.func,
        snap: PropTypes.func,
        unit: PropTypes.number,
      }),
      lower: PropTypes.shape({
        name: PropTypes.string,
        scale: PropTypes.func,
        snap: PropTypes.func,
        unit: PropTypes.number,
      }),
      upper: PropTypes.shape({
        name: PropTypes.string,
        scale: PropTypes.func,
        snap: PropTypes.func,
        unit: PropTypes.number,
      }),
    }),
  }),
  handlePopup: PropTypes.func,
  // function to create a graph
  createGraph: PropTypes.func,
  intl: intlShape.isRequired,
  isOpen: PropTypes.bool,
  preferenceResponse: PropTypes.object,
};

// The component is responsible for rendering the Labor Curve graph by passing the necessary props to Carbon graph.
class LaborCurveGraph extends React.Component {
  constructor(props) {
    super(props);
    this.graphInstance = null;
    this.laborData = null;
    this.refernce = React.createRef();
    this.isFifthPalpable = null;
  }

  componentDidMount = () => {
    const {
      laborCurveResponse, handlePopup, preferenceResponse,
    } = this.props;
    const laborCurveSettings = preferenceResponse.componentsConfigurations.filter(
      (data) => data.id === FETAL_POSITION_PREF_CONFIG,
    );
    const laborCurveFilters = laborCurveSettings[0].filterDetails.filter((data) => data.id.includes(LABOR_CURVE_IS_FIFTH_PALPABLE));
    if (laborCurveFilters.length) {
      const isFifthPalpableValue = laborCurveFilters[0].display;
      if (isFifthPalpableValue === '1') {
        this.isFifthPalpable = true;
      } else {
        this.isFifthPalpable = false;
      }
    } else this.isFifthPalpable = null;
    this.laborData = getLaborData(
      laborCurveResponse,
      handlePopup,
      this.isFifthPalpable,
    );
    this.renderGraph(true);
  }


  // Re-render the graph once the component update.
  componentDidUpdate(prevProps) {
    const { timelineProps } = this.props;
    // Re-render the graph if there is any differences in start and end date of timeline,
    if (prevProps.timelineProps.startDate !== timelineProps.startDate || prevProps.timelineProps.endDate !== timelineProps.endDate || prevProps.timelineProps.tickValues !== timelineProps.tickValues) {
      this.destroy();
      // Clean out existing instance before the component re-renders.
      this.refernce.current.innerHTML = '';
      this.renderGraph();
    }
  }

  /**
   * Destroys the graph instance
   */
  componentWillUnmount() {
    this.destroy();
  }

  destroy() {
    if (this.graphInstance) {
      this.graphInstance.destroy();
      this.graphInstance = null;
    }
  }


  renderGraph() {
    const {
      timelineProps, laborCurveResponse, handlePopup, createGraph, intl,
    } = this.props;

    const { isFifthPalpable } = this;
    let Y1_LABEL = ' ';
    const legendId = this.refernce.current.id;
    if (laborCurveResponse.dilationDetails) {
      Y1_LABEL = intl.formatMessage({ id: 'partogram-engine.cervix-dilation' });
    }
    let Y2_LABEL = ' ';
    let Y2_UPPER_BOUND_AXIS;
    let Y2_LOWER_BOUND_AXIS;
    if (isFifthPalpable && laborCurveResponse.fifthPalpableDetails) {
      Y2_LABEL = intl.formatMessage({ id: 'partogram-engine.fifth-palpables' });
      Y2_UPPER_BOUND_AXIS = LABOR_CURVE_UPPER_BOUND_FIFTH_PALABLE_Y2_AXIS;
      Y2_LOWER_BOUND_AXIS = LABOR_CURVE_LOWER_BOUND_FIFTH_PALABLE_Y2_AXIS;
    } else if (isFifthPalpable !== null && laborCurveResponse.fetalStationDetails) {
      Y2_LABEL = intl.formatMessage({ id: 'partogram-engine.fetal-station' });
      Y2_UPPER_BOUND_AXIS = LABOR_CURVE_UPPER_BOUND_Y2_AXIS;
      Y2_LOWER_BOUND_AXIS = LABOR_CURVE_LOWER_BOUND_Y2_AXIS;
    } else {
      Y2_LABEL = ' ';
      Y2_UPPER_BOUND_AXIS = LABOR_CURVE_UPPER_BOUND_Y2_AXIS;
      Y2_LOWER_BOUND_AXIS = LABOR_CURVE_LOWER_BOUND_Y2_AXIS;
    }
    /** To enable the graph to be rendered into square boxes
     * The width of the timeline is taken and is divided by the number of tick values (i.e in standard size 6) which is multiplied by 2
     * to indicate the number of boxes (i.e 12 in standard).
     * Then the divided value is multiplied into 10 i.e the number of elements in the y-axis(y-axis values).
     */

    const lowerTicks = timelineProps.tickValues.lowerBar.length;
    let graphHeight = null;
    if (lowerTicks !== null || lowerTicks > 2 || lowerTicks !== undefined) {
      graphHeight = (timelineProps.getTimebarWidth(timelineProps.width) / (lowerTicks * 2)) * 10;
    }
    const axisData = getLaborCurveGraphData('#labor-graph', getTicks(timelineProps), legendId, timelineProps.startDate.toISOString(),
      timelineProps.endDate.toISOString(), LABOR_CURVE_UPPER_BOUND_Y1_AXIS, LABOR_CURVE_LOWER_BOUND_Y1_AXIS, Y2_UPPER_BOUND_AXIS, Y2_LOWER_BOUND_AXIS, timelineProps.initialLoadDate.toISOString(), Y1_LABEL, Y2_LABEL, graphHeight, isFifthPalpable);
    this.graphInstance = createGraph(axisData);
    this.laborData.forEach((laborCurveElements) => {
      if (laborCurveElements.values) {
        this.graphInstance.loadContent(Carbon.api.line(laborCurveElements));
      }
    });
  }

  render() {
    const {
      timelineProps,
    } = this.props;
    const graphWidth = timelineProps.getTimebarWidth(timelineProps.width) + LABOR_CURVE_GRAPH_WIDTH_OFFSET;
    return (
      <div className={bindStylesToLaborCurve('parto-labor-curve-graph')}>
        <div className={bindStylesToLaborCurve('parto-labor-curve-legend')}>
          <div ref={this.refernce} id="laborlegend" className="labor-curve-legend" />
        </div>
        <div className="labor-graph-container" style={{ width: graphWidth }}>
          <div id="labor-graph" className="labor-curve-graph" />
        </div>
      </div>
    );
  }
}

LaborCurveGraph.propTypes = propTypes;
export default LaborCurveGraph;
