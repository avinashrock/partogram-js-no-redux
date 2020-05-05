import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

/*
* The status messages are written for propType checks.
*/
export const SUPPORTED_STATUS_VIEWS = {
  INCORRECT_CONFIGURATION: 'incorrect-config-message',
  NO_ACTIVE_PREGNANCY: 'no-preg-message',
  PATIENT_NOT_FEMALE: 'patient-not-female',
  PREG_DATA_ERROR: 'preg-data-error',
};
const propTypes = {
  intl: intlShape.isRequired,
  alertVariant: PropTypes.oneOf(Object.values(SUPPORTED_STATUS_VIEWS)),
};

/*
* Component renders the status of the application according to the message received as prop.
*/
const PartogramStatusView = (props) => {
  const { intl, alertVariant } = props;
  return (

    <StatusView
      title={intl.formatMessage({ id: `partogram-engine.${alertVariant}` })}
      variant="no-data"
      isAlignedTop={false}
      isGlyphHidden={false}
    />


  );
};

PartogramStatusView.propTypes = propTypes;
export default injectIntl(PartogramStatusView);
