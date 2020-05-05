/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames/bind';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import Spacer from 'terra-spacer';
import ItemView from 'terra-clinical-item-view';
import IconSquareSymbol from 'terra-icon/lib/icon/IconSquareSymbol';
import { getTicks } from '../timelineHelpers';
import {
  getLaborCurveGraphDataFetal,
  getLaborFetalData,
  getLaborFetalLegend,
} from '../carbonHelpers';
import LaborCurveStyle from './LaborCurveStyle.scss';
import { FETAL_POSITION_LEGEND_SHAPE } from '../../constants';


const cx = classNames.bind(LaborCurveStyle);

const propTypes = {
  timelineProps: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    tickValues: PropTypes.shape({
      upperBar: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
      lowerBar: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
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
  createGanttGraph: PropTypes.func,
};

class LaborCurveFetalPositionGraph extends Component {
  constructor(props) {
    super(props);
    this.graphInstance = null;
    this.state = { pregnancyDescriptorColor: {}, pregnancyDescriptorLabel: '' };
  }

  componentDidMount() {
    this.generateLabels();
    this.laborData = getLaborFetalData(this.props.laborCurveResponse, this.props.handlePopup, this.props.preferenceResponse);
    this.renderGraph(true);
  }

  componentDidUpdate(prevProps) {
    const { timelineProps } = this.props;
    if (prevProps.timelineProps.startDate !== timelineProps.startDate || prevProps.timelineProps.endDate !== timelineProps.endDate || prevProps.timelineProps.tickValues !== timelineProps.tickValues) {
      this.destroy();
      this.renderGraph();
    }
  }

  componentWillUnmount() {
    this.destroy();
  }


  generateLabels = () => {
    const { intl } = this.props;
    const pregnancyDescriptor = {
      isNulliPara: true,
    };
    if (pregnancyDescriptor.isNulliPara) {
      this.setState({
        pregnancyDescriptorLabel: intl.formatMessage({ id: 'partogram-engine.nullipara' }),
        pregnancyDescriptorColor: { color: Carbon.helpers.COLORS.LIGHT_YELLOW },
      });
    } else if (pregnancyDescriptor.isMultiPara) {
      this.setState({
        pregnancyDescriptorLabel: intl.formatMessage({ id: 'partogram-engine.multipara' }),
        pregnancyDescriptorColor: { color: Carbon.helpers.COLORS.LIGHT_BLUE },
      });
    } else if (pregnancyDescriptor.hadPreviousCSection) {
      this.setState({
        pregnancyDescriptorLabel: intl.formatMessage({ id: 'partogram-engine.prev_C_Section' }),
        pregnancyDescriptorColor: { color: Carbon.helpers.COLORS.LIGHT_PURPLE },
      });
    }
  }

  destroy() {
    if (this.graphInstance) {
      this.graphInstance.destroy();
      this.graphInstance = null;
    }
  }

  renderGraph() {
    const {
      timelineProps, createGanttGraph, preferenceResponse, intl,
    } = this.props;
    const pregnancyDescriptor = {
      isNulliPara: true,
    };
    const axisData = getLaborCurveGraphDataFetal(
      'labor-curve-fetal-graph',
      'parto-labor-curve-fetal-legend',
      getTicks(timelineProps),
      timelineProps.startDate.toISOString(),
      timelineProps.endDate.toISOString(),
      timelineProps.initialLoadDate,
    );
    this.graphInstance = createGanttGraph(axisData);
    const fetalPositionData = getLaborFetalLegend(pregnancyDescriptor, this.laborData, timelineProps.startDate.toISOString(), timelineProps.endDate.toISOString(), intl);
    this.graphInstance.loadContent(fetalPositionData);
  }

  render() {
    const {
      timelineProps,
      pregnancyDescriptor,
      intl,
    } = this.props;
    const {
      pregnancyDescriptorColor,
      pregnancyDescriptorLabel,
    } = this.state;
    const graphWidth = timelineProps.getTimebarWidth(timelineProps.width);
    const fetalPostionLabel = (
      <ItemView.Display
        icon={(
          <svg viewBox="0 0 20% 100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="2.1em" width="2.3em">
            <path d={FETAL_POSITION_LEGEND_SHAPE} />
          </svg>
)}
        iconAlignment="inline"
        text="Fetal Position"
      />
    );
    const pregnancyDescriptors = <ItemView.Display icon={<IconSquareSymbol style={pregnancyDescriptorColor} />} iconAlignment="inline" text={pregnancyDescriptorLabel} />;
    return (
      <div className={cx('parto-labor-curve-fetal-graph')}>
        <div className={cx('parto-labor-curve-fetal-legend')}>
          <Spacer paddingTop="small-1" paddingLeft="large+2"><ItemView displays={[fetalPostionLabel, pregnancyDescriptors]} layout="twoColumns" /></Spacer>
        </div>
        <div className="fetal-graph-container" style={{ width: graphWidth }}>
          <div id="labor-curve-fetal-graph" className={cx('labor-curve-fetal-graph-style')} />
        </div>
      </div>
    );
  }
}

LaborCurveFetalPositionGraph.propTypes = propTypes;
export default LaborCurveFetalPositionGraph;
