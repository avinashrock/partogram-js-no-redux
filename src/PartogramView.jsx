import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import PartoStatusView, { SUPPORTED_STATUS_VIEWS } from './notification/StatusView';
import PartoErrorView, { SUPPORTED_ERROR_VIEWS } from './notification/ErrorView';
import PartogramNotStartedView from './notification/PartogramNotStartedView';
import TimelineView from './application/TimelineView';
import Overview from './components/overview/Overview';
import PartoOverlay from './application/PartoOverlay';

const propTypes = {
  // Flag indicates whether it's waiting for partogram details service response.
  isLoading: PropTypes.bool,
  // Flag indicates whether partogram details service call has failed.
  isFailed: PropTypes.bool,
  // EncounterId of patient
  encounterId: PropTypes.number,
  // user configured view builder id in the bedrock
  configurationId: PropTypes.string,
  // This would be needed for translations to load as expected with in the component
  intl: intlShape.isRequired,
  // Contains all the laborDetails of a specific patient
  partogramBaseResponse: PropTypes.shape({
    laborDetails: PropTypes.shape({
      additionalClinicalDetails: PropTypes.array,
      isFemalePatient: PropTypes.bool,
      partogramStartDisplay: PropTypes.string,
      partogramStartDateTime: PropTypes.string,
      partogramStopDisplay: PropTypes.string,
      partogramStopDateTime: PropTypes.string,
      pregnancyDetails: PropTypes.shape({
        isActivePregnancy: PropTypes.bool,
        history: PropTypes.shape({
          hadPreviousCSection: PropTypes.bool,
          hadAllCSection: PropTypes.bool,
          isMultiPara: PropTypes.bool,
          isNulliPara: PropTypes.bool,
        }),
      }),
      maternalDetails: PropTypes.shape({
        groupBStrepStatus: PropTypes.string,
        bloodType: PropTypes.string,
      }),
      // medicationDetails for a specific encounterId
      medicationDetails: PropTypes.shape({
        epiduralDetails: PropTypes.arrayOf(
          PropTypes.shape({
            display: PropTypes.string,
            type: PropTypes.string,
            value: PropTypes.string,
            dateTime: PropTypes.string,
          }),
        ),
      }),
      // fetalDetails for a specific encounterId
      fetalDetails: PropTypes.arrayOf(PropTypes.shape({
        deliveryDateTime: PropTypes.string,
        ruptureOfMembraneDateTime: PropTypes.string,
        additionalFetalInformation: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number,
            unit: PropTypes.string,
            documentedDateTime: PropTypes.string,
            documentedBy: PropTypes.string,
          }),
        ),
      })),
    }),
  }),
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
  service: PropTypes.object,
  // Service response or the error code required to show respective error screen
  errorResponse: PropTypes.number,
};

const PartogramView = (props) => {
  const {
    isLoading,
    isFailed,
    partogramBaseResponse,
    bedrockPreferenceResponse,
    errorResponse,
    service,
  } = props;
  let errorContent;
  let overviewContent;
  let timelineContent;
  let loadingOverlay;
  if (isLoading) {
    loadingOverlay = (
      <PartoOverlay />
    );
  } else if (isFailed) {
    switch (errorResponse) {
      case 500: errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.INTERNAL_SERVER_ERROR} />;
        break;
      case 404: errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_RESULT_FOUND} />;
        break;
      case 401: errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.UNAUTHORIZED} />;
        break;
      case 400: errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.BAD_REQUEST} />;
        break;
      default: errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_PARTOGRAM} />;
    }
  } else if (!partogramBaseResponse || !partogramBaseResponse.laborDetails) {
    errorContent = <PartoErrorView alertVariant={SUPPORTED_ERROR_VIEWS.NO_PARTOGRAM} />;
  } else {
    const partogramReply = partogramBaseResponse.laborDetails;
    // Show a message if the patient is not female.
    if (!partogramReply.isFemalePatient) {
      errorContent = <PartoStatusView alertVariant={SUPPORTED_STATUS_VIEWS.PATIENT_NOT_FEMALE} />;
    // Show a message if not able to get pregnancy details.
    } else if (!partogramReply.pregnancyDetails) {
      errorContent = <PartoStatusView alertVariant={SUPPORTED_STATUS_VIEWS.PREG_DATA_ERROR} />;
    // Show a message if patient doesn't have active pregnancy.
    } else if (!partogramReply.pregnancyDetails.isActivePregnancy) {
      errorContent = <PartoStatusView alertVariant={SUPPORTED_STATUS_VIEWS.NO_ACTIVE_PREGNANCY} />;
    // Show a message if Partogram Start event is not configured.
    } else if (!partogramReply.partogramStartDisplay) {
      errorContent = <PartoStatusView alertVariant={SUPPORTED_STATUS_VIEWS.INCORRECT_CONFIGURATION} />;
    // Show a message if Partogram Start is not documented.
    } else if (!partogramReply.partogramStartDateTime) {
      errorContent = <PartogramNotStartedView />;
    // Starts loading the components if Partogram starts
    } else {
      overviewContent = (
        <Overview
          bedrockPreferenceResponse={bedrockPreferenceResponse}
          additionalClinicalDetails={partogramReply.additionalClinicalDetails}
          laborDetails={partogramBaseResponse.laborDetails}
          pregnancyDetails={partogramReply.pregnancyDetails}
          maternalDetails={partogramReply.maternalDetails}
          medicationDetails={partogramReply.medicationDetails}
          fetalDetails={partogramReply.fetalDetails}
        />
      );
      timelineContent = (
        <TimelineView
          bedrockPreferenceResponse={bedrockPreferenceResponse}
          partogramStartDateTime={partogramReply.partogramStartDateTime}
          partogramStopDateTime={partogramReply.partogramStopDateTime}
          medicationDetails={partogramReply.medicationDetails}
          pregnancyDescriptor={partogramReply.pregnancyDetails.history}
          service={service}
        />
      );
    }
  }
  return (
    <>
      <div id="partogramContent">
        <OverlayContainer>
          {loadingOverlay}
          {overviewContent}
        </OverlayContainer>
      </div>
      {errorContent || timelineContent}
    </>
  );
};

PartogramView.propTypes = propTypes;
export default injectIntl(PartogramView);
