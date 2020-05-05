import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import styles from './ContractionGraph.scss';
import {
  CONTRACTION_GRAPH_LOWER_LIMIT,
  CONTRACTION_GRAPH_UPPER_LIMIT,
} from '../../constants';
import { getTicks } from '../timelineHelpers';
import { getGraphCanvasJSON, createBubbleData } from './helpers/creationHelper';

const styleClasses = classNames.bind(styles);

const propTypes = {
  // Response for contraction
  contractionData: PropTypes.shape({
    contractionFrequencyDisplay: PropTypes.string,
    contractionIntensityDisplay: PropTypes.string,
    contractionDetails: PropTypes.array,
  }),
  // Start value from when the partogam is configured
  partogramStartDate: PropTypes.string,
  // Stop value when the partogram is stopped
  partogramStopDate: PropTypes.string,
  // Contains all the properties requireed to render the timeline view
  timelineProps: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    tickValues: PropTypes.shape({
      upperBar: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
      lowerBar: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
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
    initialLoadDate: PropTypes.string,
    getTimebarWidth: PropTypes.func,
    width: PropTypes.number,
  }),
  // This would be needed for translations to load as expected with in the component
  // intl: intlShape.isRequired,
  // Service response or the error code required to show respective error screen
  errorResponse: PropTypes.number,
  handlePopup: PropTypes.func,
  // function to create a graph
  createGraph: PropTypes.func,
  yAxisLabel: PropTypes.string,
  noIntensity: PropTypes.string,
  isOpen: PropTypes.bool,
  preferenceResponse: PropTypes.object,
};

class ContractionGraph extends Component {
  constructor(props) {
    super(props);
    this.graphInstance = null;
    this.legendRefernce = React.createRef();
    this.bubbleData = null;
  }

  componentDidMount() {
    const {
      contractionData, handlePopup, noIntensity, preferenceResponse,
    } = this.props;
    this.bubbleData = createBubbleData(
      contractionData,
      handlePopup,
      noIntensity,
      preferenceResponse,
    );
    this.setGraphInstance();
    this.renderGraph();
  }

  componentDidUpdate(prevProps, prevState) {
    const { timelineProps, isOpen } = this.props;
    // Re-render the graph if there is any differences in start and end date of timeline,
    if (
      prevProps.timelineProps.startDate !== timelineProps.startDate
      || prevProps.timelineProps.endDate !== timelineProps.endDate
    ) {
      // Clean out existing instance before the component re-renders.
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

  componentWillUnmount() {
    this.destroy();
  }

 setGraphInstance = () => {
   const { yAxisLabel, timelineProps, createGraph } = this.props;
   const legendId = this.legendRefernce.current.id;
   this.legendRefernce.current.innerHTML = '';
   this.graphInstance = createGraph(getGraphCanvasJSON(
     '#parto-contraction-graph',
     timelineProps.startDate.toISOString(),
     timelineProps.endDate.toISOString(),
     legendId,
     getTicks(timelineProps),
     CONTRACTION_GRAPH_UPPER_LIMIT,
     CONTRACTION_GRAPH_LOWER_LIMIT,
     yAxisLabel,
     timelineProps.initialLoadDate.toISOString(),
   ));
 }

 destroy() {
   if (this.graphInstance) {
     this.graphInstance.destroy();
     this.graphInstance = null;
   }
 }

  renderGraph = () => {
    this.bubbleData.forEach((bubble) => {
      this.graphInstance.loadContent(Carbon.api.bubble(bubble));
    });
  };

  render() {
    const { timelineProps } = this.props;
    const graphWidth = timelineProps.getTimebarWidth(timelineProps.width) + 120; // Graph y-axis width
    return (
      <div className={styleClasses('graph-display')}>
        <div className={styleClasses('inline-legend')}>
          <div
            ref={this.legendRefernce}
            id="parto-contraction-legend"
            className="parto-contraction-legend"
          />
        </div>
        <div className="graph-container" style={{ width: graphWidth }}>
          <div
            id="parto-contraction-graph"
            className="parto-contraction-graph"
          />
        </div>
      </div>
    );
  }
}

ContractionGraph.propTypes = propTypes;
export default ContractionGraph;
