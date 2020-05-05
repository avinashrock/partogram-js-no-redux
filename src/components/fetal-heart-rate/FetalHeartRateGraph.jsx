/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs';
import classNames from 'classnames/bind';
import '../../application/PartoStyle.scss';
import {
  FHR_REGION_START, FHR_REGION_END, FHR_GRAPH_LOWER_LIMIT_ACTUAL, FHR_GRAPH_UPPER_LIMIT_ACTUAL,
} from '../../constants';
import {
  getGraphCanvasJSON,
  getDataSet,
} from '../carbonHelpers';
import styles from './FetalHeartRateGraph.scss';
import { getTicks } from '../timelineHelpers';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // FHR details which are to be plotted on the canvas
  fetalHeartRateDetails: PropTypes.arrayOf(
    PropTypes.shape({
      dynamicLabel: PropTypes.string,
      fhrBaselineDetails: PropTypes.array,
    }),
  ),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  // Contains all the properties required to render the timeline View.
  timelineProps: PropTypes.shape({
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
  fetalHeartRateLabel: PropTypes.string,
};
// The component is responsible for rendering the fetal heart rate graph by passing the necessary props to Carbon graph.
class FetalHeartRateGraph extends React.Component {
  constructor(props) {
    super(props);
    this.graphInstance = null;
    this.baselineDataSet = null;
    this.intermittentDataSet = null;
    this.refernce = React.createRef();
  }

  // Add the graph once the component completed render.
  componentDidMount = () => {
    this.baselineDataSet = getDataSet(
      this.props.fetalHeartRateDetails,
      FHR_REGION_START,
      FHR_REGION_END,
      true,
      this.props.handlePopup,
    );
    this.intermittentDataSet = getDataSet(
      this.props.fetalHeartRateDetails,
      FHR_REGION_START,
      FHR_REGION_END,
      false,
      this.props.handlePopup,
    );
    const unsortedBaselineValuesArray = this.populateBaselineDataSet(this.baselineDataSet, this.intermittentDataSet);
    this.sortValuesOfBaselineDataSet(unsortedBaselineValuesArray);
    this.setGraphInstance();
    this.renderGraph();
  }

  // Re-render the graph once the component update.
  componentDidUpdate(prevProps) {
    const { timelineProps, isOpen } = this.props;
    // Re-render the graph if there is any differences in start and end date of timeline,
    if (prevProps.timelineProps.startDate !== timelineProps.startDate || prevProps.timelineProps.endDate !== timelineProps.endDate) {
      this.destroy();
      if (isOpen) {
        this.setGraphInstance();
        this.renderGraph();
      }
    }
    if (prevProps.isOpen !== isOpen) {
      setTimeout(() => {
        this.destroy();
        this.setGraphInstance();
        this.renderGraph();
      }, 0);
    }
  }

  /**
   * Destroys the graph instance
   */
  componentWillUnmount() {
    this.destroy();
  }

  /*
  The function sorts all the populated baseline data set based on the date time value.
  */
 sortValuesOfBaselineDataSet = (data) => {
   for (let index = 0; index < data.length; index += 1) {
     data[index].values.sort((a, b) => {
       const dateA = new Date(a.x);
       const dateB = new Date(b.x);
       return dateA - dateB;
     });
   }
 }

  /*
  This function populates the baseline data set with additional value object inserted into the existing values array
  of baseline data set which has the x value as the date time coordinate of intermittent value
  which comes in between two baseline date time values and y value is null
  */
  populateBaselineDataSet = (baselineDataSet, intermittentDataSet) => {
    let intermittentDateTimeValue;
    let baslineDateTimeValue;
    let nextBaselineDateTimeValue;
    const baselinePairGroup = [];
    let baselinePairData = [];
    baselineDataSet.forEach((data) => {
      for (let index = 0; index < data.values.length - 1; index += 1) {
        const pairArr = [data.values[index].x, data.values[index + 1].x];
        baselinePairData.push(pairArr);
      }
      baselinePairGroup.push({ pair: baselinePairData });
      baselinePairData = [];
    });
    for (let intermittentIndex = 0; intermittentIndex < intermittentDataSet.length; intermittentIndex += 1) {
      for (let valueIndex = 0; valueIndex < intermittentDataSet[intermittentIndex].values.length; valueIndex += 1) {
        intermittentDateTimeValue = new Date(intermittentDataSet[intermittentIndex].values[valueIndex].mid.x).getTime();
        const dateTimePair = baselinePairGroup[intermittentIndex].pair;
        for (let index = 0; index < dateTimePair.length; index += 1) {
          baslineDateTimeValue = new Date(dateTimePair[index][0]).getTime();
          nextBaselineDateTimeValue = new Date(dateTimePair[index][1]).getTime();
          if (intermittentDateTimeValue > baslineDateTimeValue && intermittentDateTimeValue < nextBaselineDateTimeValue) {
            baselineDataSet[intermittentIndex].values.push({ x: intermittentDataSet[intermittentIndex].values[valueIndex].mid.x, y: null });
          }
        }
      }
    }
    return baselineDataSet;
  };

  setGraphInstance = () => {
    const {
      timelineProps, createGraph, fetalHeartRateLabel,
    } = this.props;
    // Create canvas JSON for baseline and intermittent data.
    const legendId = this.refernce.current.id;
    this.refernce.current.innerHTML = '';
    const canvasJSON = getGraphCanvasJSON('#fhrGraph',
      timelineProps.startDate.toISOString(),
      timelineProps.endDate.toISOString(),
      legendId,
      getTicks(timelineProps),
      FHR_GRAPH_UPPER_LIMIT_ACTUAL,
      FHR_GRAPH_LOWER_LIMIT_ACTUAL,
      fetalHeartRateLabel,
      timelineProps.initialLoadDate.toISOString());
    // Create graph canvas using Carbon
    this.graphInstance = createGraph(canvasJSON);
  }

  /**
   * Destroys the graph instance
   */
  destroy() {
    if (this.graphInstance) {
      this.graphInstance.destroy();
      this.graphInstance = null;
    }
  }


  renderGraph = () => {
    const { fetalHeartRateDetails } = this.props;
    // Plot baseline and Intermittent details of each baby
    for (let babyIndex = 0; babyIndex < fetalHeartRateDetails.length; babyIndex += 1) {
      // Load  details if baby has intermittent value documented within start and end date.
      if (babyIndex < this.intermittentDataSet.length && this.intermittentDataSet[babyIndex].values !== null) {
        this.graphInstance.loadContent(Carbon.api.pairedResult(this.intermittentDataSet[babyIndex]));
      }
      // Load  details if baby has baseline value documented within start and end date.
      if (babyIndex < this.baselineDataSet.length && this.baselineDataSet[babyIndex].values !== null) {
        this.graphInstance.loadContent(Carbon.api.line(this.baselineDataSet[babyIndex]));
      }
    }
  };

  /**
   * A helper function to create canvas and render grpah for baseline and intermittent heart rates.
   */
  render() {
    const { timelineProps } = this.props;
    const graphWidth = timelineProps.getTimebarWidth(timelineProps.width) + 120; // Graph y-axis width
    return (
      <div className={bindStyleToClassName('graph-display')}>
        <div className={bindStyleToClassName('inline-legend')}>
          <div ref={this.refernce} id="fhrLegend" className="fhr-legend" />
        </div>
        <div className="graph-container" style={{ width: graphWidth }}>
          <div id="fhrGraph" className="fhr-graph" />
        </div>
      </div>
    );
  }
}

FetalHeartRateGraph.propTypes = propTypes;
export default FetalHeartRateGraph;
