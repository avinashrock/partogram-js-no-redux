import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import partogramService from '../../service-factory';
import partogramServiceEngine from '../../service-factory-engine';
import ContractionView from './ContractionView';
import PartoPopup from '../PartoPopup';
import { contractionHoverData } from './helpers/helper';
import partogramUserContext from '../../partogramUserContext';

const propTypes = {
  // Flag indicates whether it's waiting for fetalAssessment details service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether fetalAssessment details service call has failed.
  isFailed: PropTypes.bool,
  // Contains all the fetalHeartRate details
  contractionResponse: PropTypes.shape({
    contractionDetails: PropTypes.array,
  }),
  // Action which is dispatched for the fetalAssessment
  loadContraction: PropTypes.func,
  //  Start value from when the partogam is configured
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
  service: PropTypes.object,
};
// ContractionContainer is connected to the redux store , after receiving the mandatory props , it passes it to the FetalHeartRateView component.
class ContractionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePopup = this.handlePopup.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.state = {
      isOpen: false,
      selectedDataPoint: null,
      contractionResponse: null,
      isLoading: true,
      isFailed: false,
    };
  }

  componentDidMount = () => {
    const { service, partogramStartDate, partogramStopDate } = this.props;
    const {
      orionRequestor,
      encounterId,
      configurationId,
      isEmbedded,
    } = this.context;

    if (service) {
      const contractionResponse = service.getUtrineAssessments();
      this.setState({
        isLoading: false,
        isFailed: false,
        contractionResponse,
      });
    } else if (isEmbedded) {
      partogramServiceEngine.getUtrineAssessments(
        encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor,
      ).then((response) => {
        this.setState({
          contractionResponse: response,
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
      partogramService.getUtrineAssessments(
        encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor,
      ).request.then((response) => {
        this.setState({
          contractionResponse: response,
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

  handlePopup = (toggleSelection, key, index, config) => {
    const { selectedDataPoint } = this.state;
    if (selectedDataPoint) {
      selectedDataPoint.toggleSelection();
    }
    this.setState({
      selectedDataPoint: {
        key,
        toggleSelection,
        index,
        config,
      },
      isOpen: true,
    });
  };

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
      ...timelineProps
    } = this.props;
    const {
      isLoading,
      isFailed,
      contractionResponse,
      isOpen,
      selectedDataPoint,
    } = this.state;

    const { preferenceResponse, timezone } = this.context;
    return (
      <>
        <PartoPopup
          isOpen={isOpen}
          selectedDataPoint={selectedDataPoint}
          handleOnClose={this.handleOnClose}
          graphId="parto-contraction-graph"
          dataMap={contractionHoverData}
          timezone={timezone}
        />
        <ContractionView
          isLoading={isLoading}
          isFailed={isFailed}
          contractionResponse={
            contractionResponse ? (contractionResponse.data.error_code ? null : contractionResponse.data) : null
          }
          partogramStartDate={partogramStartDate}
          partogramStopDate={partogramStopDate}
          timelineProps={timelineProps}
          errorResponse={
            contractionResponse ? (contractionResponse.data.error_code ? contractionResponse.data.error_code : null) : null
          }
          handlePopup={this.handlePopup}
          createGraph={(data) => Carbon.api.graph(data)} // Function to abstract the graph instance
          preferenceResponse={preferenceResponse}
        />
      </>
    );
  }
}
ContractionContainer.contextType = partogramUserContext;
ContractionContainer.propTypes = propTypes;
export default ContractionContainer;
