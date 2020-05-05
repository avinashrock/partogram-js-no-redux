import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

/*
* The different views are fetched from the terra package.
*/
export const SUPPORTED_ERROR_VIEWS = {
  INTERNAL_SERVER_ERROR: 'internal-server-error',
  NO_RESULT_FOUND: 'no-results-found',
  UNAUTHORIZED: 'unauthorized',
  BAD_REQUEST: 'bad-request',
  NO_PARTOGRAM: 'no-partogram',
  LABOR_FAILED_VIEW: 'labor-curve-failed-to-load',
  FHR_FAILED_VIEW: 'fhr-failed-to-load',
};
const propTypes = {
  intl: intlShape.isRequired,
  alertVariant: PropTypes.oneOf(Object.values(SUPPORTED_ERROR_VIEWS)),
};

/*
* ErrorView component renders according to the message received as prop.
*/
const ErrorView = (props) => {
  const { intl, alertVariant } = props;
  return (
    <StatusView
      title={intl.formatMessage({ id: `partogram-engine.${alertVariant}` })}
      variant="error"
      isGlyphHidden={false}
    />
  );
};

ErrorView.propTypes = propTypes;
export default injectIntl(ErrorView);
