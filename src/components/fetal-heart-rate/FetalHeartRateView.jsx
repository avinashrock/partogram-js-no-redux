import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import { injectIntl, intlShape } from 'react-intl';
import ToggleSectionHeader from 'terra-toggle-section-header';
import PartoOverlay from '../../application/PartoOverlay';
import FetalHeartErrorView, { SUPPORTED_ERROR_VIEWS } from '../../notification/ErrorView';
import FetalHeartRateGraph from './FetalHeartRateGraph';
import { getComponentHeader } from '../../application/helpers/BedrockPreference';
import { FHR_COMPONENT_ID } from '../../constants';

const propTypes = {
  // Flag indicates whether it's waiting for fetalHeartRate details service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether pregnancy details service call has failed.
  isFailed: PropTypes.bool,
  // Response for fetalHeartRateDetails
  fetalAssessmentResponse: PropTypes.shape({
    fetalHeartRateDetails: PropTypes.array,
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
  }),
  // This would be needed for translations to load as expected with in the component
  intl: intlShape.isRequired,
  // Service response or the error code required to show respective error screen
  errorResponse: PropTypes.number,
  handlePopup: PropTypes.func,
  // function to create a graph
  createGraph: PropTypes.func,
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
};

/*
FetalHeartRateView is responsible for rendering FetalHeartRateLegend and FetalHeartRateGraph components based on the fetalHeartRateDetails response
*/

class FetalHeartRateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  toggleHeader = () => (this.setState((prevState) => ({ isOpen: !prevState.isOpen })));

  render() {
    const {
      isLoading,
      isFailed,
      fetalAssessmentResponse,
      partogramStartDate,
      partogramStopDate,
      intl,
      timelineProps,
      errorResponse,
      handlePopup,
      createGraph,
    } = this.props;
    let content;
    let loadingOverlay;
    const defaultPropsToggleHeader = {
      isAnimated: true,
    };
    const componentHeader = getComponentHeader(this.props.bedrockPreferenceResponse, FHR_COMPONENT_ID)
    || intl.formatMessage({ id: 'partogram-engine.parto-fhr-header' });
    if (isLoading) {
      loadingOverlay = (
        <PartoOverlay />
      );
    } else if (isFailed) {
      switch (errorResponse) {
        case 500: content = (
          <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.INTERNAL_SERVER_ERROR} />
        );
          break;
        case 404: content = (
          <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />
        );
          break;
        case 401: content = (
          <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.UNAUTHORIZED} />
        );
          break;
        case 400: content = (
          <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.BAD_REQUEST} />
        );
          break;
        default: content = (
          <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.FHR_FAILED_VIEW} />
        );
      }
    } else if (fetalAssessmentResponse && fetalAssessmentResponse.fetalHeartRateDetails) {
      content = (
        <FetalHeartRateGraph
          startDate={partogramStartDate}
          isOpen={this.state.isOpen}
          endDate={partogramStopDate}
          fetalHeartRateDetails={fetalAssessmentResponse.fetalHeartRateDetails}
          timelineProps={timelineProps}
          handlePopup={handlePopup}
          createGraph={createGraph}
          fetalHeartRateLabel={intl.formatMessage({ id: 'partogram-engine.heart-rate' })}
        />
      );
    } else {
      content = (
        <FetalHeartErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />
      );
    }
    return (
      <ToggleSectionHeader
        title={componentHeader}
        isAnimated={defaultPropsToggleHeader.isAnimated}
        onOpen={this.toggleHeader}
        onClose={this.toggleHeader}
        isInitiallyOpen={this.state.isOpen}
      >
        <OverlayContainer>
          {loadingOverlay}
          {content}
        </OverlayContainer>
      </ToggleSectionHeader>
    );
  }
}

FetalHeartRateView.propTypes = propTypes;
export default injectIntl(FetalHeartRateView);
