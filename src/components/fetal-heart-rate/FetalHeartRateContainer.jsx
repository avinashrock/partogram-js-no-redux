import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import partogramUserContext from '../../partogramUserContext';
import partogramService from '../../service-factory';
import partogramServiceEngine from '../../service-factory-engine';
import FetalHeartRateView from './FetalHeartRateView';
import PartoPopup from '../PartoPopup';
import { fhrHoverData } from './FetalHeartRateHoverData';

const propTypes = {
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
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
  service: PropTypes.object,
};

class FetalHeartRateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedDataPoint: null,
      serviceResponse: null,
      isLoading: true,
      isFailed: false,
    };
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  componentDidMount() {
    const {
      partogramStartDate, partogramStopDate, service,
    } = this.props;
    const {
      orionRequestor,
      encounterId,
      configurationId,
      isEmbedded,
    } = this.context;
    if (service) {
      this.setState({
        serviceResponse: service.getFetalHeartRate(),
        isLoading: false,
        isFailed: false,
      });
    } else if (isEmbedded) {
      partogramServiceEngine.getFetalHeartRate(encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor).then((response) => {
        this.setState({
          serviceResponse: response,
          isLoading: false,
          isFailed: false,
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          isFailed: true,
        });
      });
    } else {
      partogramService.getFetalHeartRate(encounterId,
        partogramStartDate,
        configurationId,
        partogramStopDate,
        orionRequestor).request.then((response) => {
        this.setState({
          serviceResponse: response,
          isLoading: false,
          isFailed: false,
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          isFailed: true,
        });
      });
    }
  }

  handlePopup = (toggleSelection, key, index, config) => {
    const { selectedDataPoint } = this.state;
    if (selectedDataPoint) {
      selectedDataPoint.toggleSelection();
    } else {
      this.setState({
        selectedDataPoint: {
          key, toggleSelection, index, config,
        },
        isOpen: true,
      });
    }
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
      partogramStartDate, partogramStopDate, bedrockPreferenceResponse, ...timelineProps
    } = this.props;
    const {
      serviceResponse, isFailed, isLoading, isOpen, selectedDataPoint,
    } = this.state;
    return (
      <>
        {isOpen ? (
          <PartoPopup
            isOpen={isOpen}
            selectedDataPoint={selectedDataPoint}
            handleOnClose={this.handleOnClose}
            graphId="fhr-graph"
            dataMap={fhrHoverData}
          />
        ) : null}
        <FetalHeartRateView
          bedrockPreferenceResponse={bedrockPreferenceResponse}
          isLoading={isLoading}
          isFailed={isFailed}
          fetalAssessmentResponse={serviceResponse ? serviceResponse.data : null}
          partogramStartDate={partogramStartDate}
          partogramStopDate={partogramStopDate}
          timelineProps={timelineProps}
          errorResponse={serviceResponse ? serviceResponse.status : null}
          handlePopup={this.handlePopup}
          createGraph={(data) => Carbon.api.graph(data)}
        />
      </>
    );
  }
}

FetalHeartRateContainer.propTypes = propTypes;
FetalHeartRateContainer.contextType = partogramUserContext;
export default FetalHeartRateContainer;
