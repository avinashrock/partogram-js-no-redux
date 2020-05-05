import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import StatusView from 'terra-status-view';
import { injectIntl, intlShape } from 'react-intl';
import Header from 'terra-action-header';
import ToggleSectionHeader from 'terra-toggle-section-header';
import PartoOverlay from '../../application/PartoOverlay';
import LaborCurveGraph from './LaborCurveGraph';
import LaborCurveFetalPositionGraph from './LaborCurveFetalPositionGraph';
import LaborCurveErrorView, { SUPPORTED_ERROR_VIEWS } from '../../notification/ErrorView';
import { getComponentHeader } from '../../application/helpers/BedrockPreference';
import { FETAL_POSITION_PREF_CONFIG } from '../../constants';


const propTypes = {
  // Flag indicates whether it's waiting for laborCurve service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether the service call has failed or not≥
  isFailed: PropTypes.bool,
  // Response for LaborCurve details.
  laborCurveResponse: PropTypes.shape({
    fetalPositionDetails: PropTypes.array,
  }),
  // Start value from when the partogam is configured
  partogramStartDate: PropTypes.string,
  // Stop value when the partogram is stopped
  partogramStopDate: PropTypes.string,
  // Contains all the properties required to render the timeline view
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
  createGanttGraph: PropTypes.func,
  pregnancyDescriptor: PropTypes.object,
  preferenceResponse: PropTypes.array,
};

const LaborCurveView = (props) => {
  const {
    isLoading,
    isFailed,
    laborCurveResponse,
    partogramStartDate,
    partogramStopDate,
    intl,
    timelineProps,
    errorResponse,
    handlePopup,
    createGraph,
    createGanttGraph,
    pregnancyDescriptor,
    preferenceResponse,
  } = props;
  let content;
  let loadingOverlay;
  const componentHeader = getComponentHeader(preferenceResponse, FETAL_POSITION_PREF_CONFIG);
  if (isLoading) {
    loadingOverlay = (
      <>
        <PartoOverlay />
        <StatusView
          title={intl.formatMessage({ id: 'partogram-engine.no-data' })}
          message={intl.formatMessage({ id: 'partogram-engine.loading-status-message' })}
          isGlyphHidden
        />
      </>
    );
  } else if (isFailed) {
    switch (errorResponse) {
      case 500: content = (
        <LaborCurveErrorView alertVariant={SUPPORTED_ERROR_VIEWS.INTERNAL_SERVER_ERROR} />
      );
        break;
      case 404: content = (
        <LaborCurveErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />
      );
        break;
      case 401: content = (
        <LaborCurveErrorView alertVariant={SUPPORTED_ERROR_VIEWS.UNAUTHORIZED} />
      );
        break;
      case 400: content = (
        <LaborCurveErrorView alertVariant={SUPPORTED_ERROR_VIEWS.BAD_REQUEST} />
      );
        break;
      default: content = (
        <LaborCurveErrorView alertVariant={SUPPORTED_ERROR_VIEWS.LABOR_FAILED_VIEW} />
      );
    }
  } else if (laborCurveResponse) {
    content = (
      <ToggleSectionHeader
        title={componentHeader}
        isInitiallyOpen
        isAnimated
      >
        { laborCurveResponse.fetalPositionDetails ? (
          <LaborCurveFetalPositionGraph
            timelineProps={timelineProps}
            laborCurveResponse={laborCurveResponse}
            createGanttGraph={createGanttGraph}
            pregnancyDescriptor={pregnancyDescriptor}
            preferenceResponse={preferenceResponse}
            handlePopup={handlePopup}
            intl={intl}
          />
        ) : null}
        <LaborCurveGraph
          startDate={partogramStartDate}
          endDate={partogramStopDate}
          laborCurveResponse={laborCurveResponse}
          preferenceResponse={preferenceResponse}
          timelineProps={timelineProps}
          handlePopup={handlePopup}
          createGraph={createGraph}
          intl={intl}
        />
      </ToggleSectionHeader>
    );
  } else {
    content = (
      <>
        <Header title={componentHeader} />
        <StatusView
          title={intl.formatMessage({ id: 'partogram-engine.no-results-found' })}
          isGlyphHidden
        />
      </>
    );
  }
  return (
    <ContentContainer>
      {loadingOverlay}
      {content}
    </ContentContainer>
  );
};

LaborCurveView.propTypes = propTypes;
export default injectIntl(LaborCurveView);
