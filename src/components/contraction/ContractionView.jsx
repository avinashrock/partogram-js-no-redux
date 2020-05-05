import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import { injectIntl, intlShape } from 'react-intl';
import ToggleSectionHeader from 'terra-toggle-section-header';
import ContractionErrorView, { SUPPORTED_ERROR_VIEWS } from '../../notification/ErrorView';
import ContractionGraph from './ContractionGraph';
import { getComponentHeader } from '../../application/helpers/BedrockPreference';
import { CONTRACTION_COMPONENT_ID } from '../../constants';
import PartoOverlay from '../../application/PartoOverlay';

const propTypes = {
  // Flag indicates whether it's waiting for fetalHeartRate details service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether pregnancy details service call has failed.
  isFailed: PropTypes.bool,
  // Response for fetalHeartRateDetails
  contractionResponse: PropTypes.shape({
    contractionDetails: PropTypes.array,
    uterineAssessment: PropTypes.object,
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
  preferenceResponse: PropTypes.object,
};

/*
ContractionView is responsible for rendering FetalHeartRateLegend and FetalHeartRateGraph components based on the fetalHeartRateDetails response
*/

class ContractionView extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  toggleHeader = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }));

  render() {
    const {
      isLoading,
      isFailed,
      contractionResponse,
      partogramStartDate,
      partogramStopDate,
      intl,
      timelineProps,
      errorResponse,
      handlePopup,
      createGraph,
      preferenceResponse,
    } = this.props;

    const defaultPropsToggleHeader = {
      isAnimated: true,
    };

    let content;
    let loadingOverlay;
    const componentHeader = getComponentHeader(this.props.preferenceResponse, CONTRACTION_COMPONENT_ID)
    || intl.formatMessage({ id: 'partogram-engine.parto-contractions-header' });
    if (isLoading) {
      loadingOverlay = <PartoOverlay />;
    } else if (errorResponse === 500) {
      content = <ContractionErrorView alertVariant={SUPPORTED_ERROR_VIEWS.INTERNAL_SERVER_ERROR} />;
    } else if (errorResponse === 404) {
      content = <ContractionErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />;
    } else if (errorResponse === 401) {
      content = <ContractionErrorView alertVariant={SUPPORTED_ERROR_VIEWS.UNAUTHORIZED} />;
    } else if (errorResponse === 400) {
      content = <ContractionErrorView alertVariant={SUPPORTED_ERROR_VIEWS.BAD_REQUEST} />;
    } else if (contractionResponse) {
      content = (
        <ContractionGraph
          startDate={partogramStartDate}
          endDate={partogramStopDate}
          contractionData={contractionResponse.uterineAssessment}
          timelineProps={timelineProps}
          handlePopup={handlePopup}
          createGraph={createGraph}
          isOpen={this.state.isOpen}
          yAxisLabel={intl.formatMessage({ id: 'partogram-engine.parto-contraction-label' })}
          noIntensity={intl.formatMessage({ id: 'partogram-engine.parto-contraction-no-intensity' })}
          preferenceResponse={preferenceResponse}
        />
      );
    } else {
      content = (<ContractionErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />);
    }
    return (
      <>
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
      </>
    );
  }
}

ContractionView.propTypes = propTypes;
export default injectIntl(ContractionView);
