import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import partogramService from '../../service-factory';
import partogramServiceEngine from '../../service-factory-engine';
import LaborCurveView from './LaborCurveView';
import PartoPopup from '../PartoPopup';
import { laborCurveHoverData } from './LaborCurveHoverData';
import partogramUserContext from '../../partogramUserContext';


const propTypes = {
  // Flag indicates whether it's waiting for Labor Curve service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether Labor Curve service call has failed.
  isFailed: PropTypes.bool,
  // Contains all the labor curve details
  laborCurveResponse: PropTypes.shape({
    laborAssessment: PropTypes.arrayOf(),
  }),
  //  Start value from when the partogram is configured
  partogramStartDate: PropTypes.string,
  // Stop value when the partogram is stopped
  partogramStopDate: PropTypes.string,
  // Contains all the properties required to render the timeline View.
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
  errorResponse: PropTypes.string,
  pregnancyDescriptor: PropTypes.object,
  service: PropTypes.object,
  createGraph: PropTypes.func,
  createGanttGraph: PropTypes.func,
};
// LaborCurveContainer is connected to the redux store , after receiving the mandatory props , it passes it to the LaborCurveView component.
class LaborCurveContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePopup = this.handlePopup.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.state = {
      isOpen: false,
      selectedDataPoint: null,
      laborCurveResponse: null,
      pregnancyDescriptor: null,
      isLoading: true,
      isFailed: false,
    };
  }

  componentDidMount = () => {
    const {
      service, partogramStartDate, partogramStopDate, pregnancyDescriptor,
    } = this.props;
    const {
      orionRequestor,
      encounterId,
      configurationId,
      isEmbedded,
    } = this.context;
    if (service) {
      const laborCurveResponse = service.getLaborAssessments();
      this.setState({
        isLoading: false,
        isFailed: false,
        laborCurveResponse,
        pregnancyDescriptor,
      });
    } else if (isEmbedded) {
      partogramServiceEngine.getLaborAssessments(
        encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor,
      ).then((response) => {
        this.setState({
          laborCurveResponse: response,
          pregnancyDescriptor,
          isLoading: false,
          isFailed: false,
        }).catch((error) => {
          this.setState({
            isLoading: false,
            isFailed: true,
          });
        });
      });
    } else {
      partogramService.getLaborAssessments(
        encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor,
      ).request.then((response) => {
        this.setState({
          laborCurveResponse: response,
          pregnancyDescriptor,
          isLoading: false,
          isFailed: false,
        }).catch((error) => {
          this.setState({
            isLoading: false,
            isFailed: true,
          });
        });
      });
    }
  };

  handlePopup(toggleSelection, key, index, config) {
    const { selectedDataPoint } = this.state;
    if (selectedDataPoint) {
      selectedDataPoint.toggleSelection();
    }
    this.setState({
      selectedDataPoint: {
        key, toggleSelection, index, config,
      },
      isOpen: true,
    });
  }


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
      partogramStartDate,
      partogramStopDate,
      errorResponse,
      ...timelineProps
    } = this.props;
    const {
      isLoading,
      isFailed,
      laborCurveResponse,
      pregnancyDescriptor,
      isOpen,
      selectedDataPoint,
    } = this.state;

    const { preferenceResponse, timezone } = this.context;
    return (
      <>
        {isOpen ? (
          <PartoPopup
            isOpen
            selectedDataPoint={selectedDataPoint}
            handleOnClose={this.handleOnClose}
            graphId="labor-curve-graph"
            dataMap={laborCurveHoverData}
            timezone={timezone}
          />
        ) : null}
        <LaborCurveView
          isLoading={isLoading}
          isFailed={isFailed}
          laborCurveResponse={
            laborCurveResponse ? (laborCurveResponse.data.error_code ? null : laborCurveResponse.data) : null
          }
          pregnancyDescriptor={pregnancyDescriptor}
          preferenceResponse={preferenceResponse}
          partogramStartDate={partogramStartDate}
          partogramStopDate={partogramStopDate}
          timelineProps={timelineProps}
          errorResponse={
            laborCurveResponse ? (laborCurveResponse.data.error_code ? laborCurveResponse.data.error_code : null) : null
          }
          handlePopup={this.handlePopup}
          createGraph={(data) => Carbon.api.graph(data)} // Function to abstract the graph instance
          createGanttGraph={(data) => Carbon.api.gantt(data)} // Function to abstract the gantt graph instance.
        />
      </>
    );
  }
}

LaborCurveContainer.contextType = partogramUserContext;
LaborCurveContainer.propTypes = propTypes;
export default LaborCurveContainer;
