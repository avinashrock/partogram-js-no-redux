import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { getTicks } from '../timelineHelpers';
import {
  getEpiduralGraphData, getEpiduralData,
} from '../carbonHelpers';
import styles from './EpiduralGraph.scss';
import '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // partogram Start date
  partogramStartDate: PropTypes.string,
  // partogram stop date
  partogramStopDate: PropTypes.string,
  // timeline props sent from timeline
  timelineProps: PropTypes.shape({
    width: PropTypes.number,
    initialLoadDate: PropTypes.instanceOf(Date),
    getTimebarWidth: PropTypes.func,
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
  // medicationDetails having epidural details
  medicationDetails: PropTypes.object,
  // function to handlePopup onClick
  handlePopup: PropTypes.func,
  // function to create a graph
  createGraph: PropTypes.func,
};

class EpiduralGraph extends Component {
  constructor(props) {
    super(props);
    this.graphInstance = null;
    this.refernce = React.createRef();
  }

  componentDidMount() {
    this.renderGraph(true);
  }

  componentDidUpdate(prevProps) {
    // If there any differences in start and end date of timeline,

    const { timelineProps } = this.props;
    if (prevProps.timelineProps.startDate !== timelineProps.startDate || prevProps.timelineProps.endDate !== timelineProps.endDate || prevProps.timelineProps.tickValues !== timelineProps.tickValues) {
      this.destroy();
      this.refernce.current.innerHTML = '';
      this.renderGraph();
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  destroy() {
    if (this.graphInstance) {
      this.graphInstance.destroy();
      this.graphInstance = null;
    }
  }

  renderGraph(isInitialLoad = false) {
    const {
      timelineProps, medicationDetails, handlePopup, createGraph,
    } = this.props;

    const legendId = this.refernce.current.id;
    const axisData = getEpiduralGraphData('#epidural-graph', getTicks(timelineProps), legendId, timelineProps.startDate.toISOString(),
      timelineProps.endDate.toISOString(), medicationDetails, timelineProps.initialLoadDate);
    const epiduralAnesthesiaData = getEpiduralData(medicationDetails, isInitialLoad, handlePopup);
    this.graphInstance = createGraph(axisData);
    if (epiduralAnesthesiaData) {
      this.graphInstance.loadContent(epiduralAnesthesiaData);
    }
  }

  render() {
    const {
      timelineProps,
    } = this.props;
    const graphWidth = timelineProps.getTimebarWidth(timelineProps.width);
    return (
      <div className={bindStyleToClassName('parto-epidural-graph')}>
        <div className={bindStyleToClassName('parto-epidural-legend')}>
          <div ref={this.refernce} id="epiduralLegend" className="parto-epidural-legend" />
        </div>
        <div className="graph-container" style={{ width: graphWidth }}>
          <div id="epidural-graph" className="parto-epidural-graph" />
        </div>
      </div>
    );
  }
}

EpiduralGraph.propTypes = propTypes;
export default EpiduralGraph;
