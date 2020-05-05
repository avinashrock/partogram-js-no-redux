import React, { Component } from 'react';
import ContentContainer from 'terra-content-container';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import PartoPopup from '../PartoPopup';
import EpiduralGraph from './EpiduralGraph';
import { epiduralHoverData } from './helpers/helper';

const propTypes = {
  partogramStartDate: PropTypes.string,
  partogramStopDate: PropTypes.string,
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
  medicationDetails: PropTypes.object,
};

class EpiduralContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePopup = this.handlePopup.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.state = {
      isOpen: false,
      selectedDataPoint: null,
    };
  }

  /*
  * To handle the popup onClick of the data points of graph.
  */
  handlePopup = (toggleSelection, key, index, config) => {
    const { selectedDataPoint } = this.state;
    if (selectedDataPoint && selectedDataPoint.toggleSelection) {
      selectedDataPoint.toggleSelection();
    }
    this.setState({
      selectedDataPoint: {
        key, toggleSelection, index, config,
      },
      isOpen: true,
    });
  }

  /*
  * To handle the closer of popup on toggle.
  */
  handleOnClose() {
    const { selectedDataPoint } = this.state;
    this.setState({
      isOpen: false,
    });
    if (selectedDataPoint) {
      selectedDataPoint.toggleSelection();
      this.setState({
        selectedDataPoint: null,
      });
    }
  }

  render() {
    const {
      partogramStartDate, medicationDetails, partogramStopDate, ...timelineProps
    } = this.props;
    const { isOpen, selectedDataPoint } = this.state;
    const content = (
      <ContentContainer>
        {isOpen ? (
          <PartoPopup
            isOpen={isOpen}
            selectedDataPoint={selectedDataPoint}
            handleOnClose={this.handleOnClose}
            graphId="epidural-graph"
            dataMap={epiduralHoverData}
          />
        ) : null}
        <EpiduralGraph
          partogramStartDate={partogramStartDate}
          partogramStopDate={partogramStopDate}
          timelineProps={timelineProps}
          medicationDetails={medicationDetails}
          createGraph={(data) => Carbon.api.gantt(data)} // Function to abstract the graph instance
          handlePopup={this.handlePopup}
        />
      </ContentContainer>
    );

    return (
      medicationDetails.epiduralDetails && medicationDetails.epiduralDetails.length > 0 ? content : null
    );
  }
}

EpiduralContainer.propTypes = propTypes;
export default EpiduralContainer;
