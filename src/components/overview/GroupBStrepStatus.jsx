import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // GBS status for a specific encounterId
  maternalDetails: PropTypes.shape({
    groupBStrepStatus: PropTypes.string,
  }),
  intl: intlShape.isRequired,
};

/* The component displays the group B strep status for a particular patient
along with a warning indicator on if the status is Positive */
const GroupBStrepStatus = (props) => {
  const {
    maternalDetails, intl,
  } = props;
  let gbsStatus;
  let content;
  if (maternalDetails !== null) {
    if ('groupBStrepStatus' in maternalDetails) {
      gbsStatus = maternalDetails.groupBStrepStatus;
    }
  }
  if (gbsStatus) {
    // if the gbsStatus value matches any positive string then it shows the warning indicator.
    if (gbsStatus.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.P' }))
      || gbsStatus.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.POSITIVE' }))
      || gbsStatus.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.POS' }))
      || gbsStatus.match(/\+/)) {
      content = (
        <>
          <Spacer paddingRight="small" isInlineBlock>
            <IconWarning />
          </Spacer>
          {gbsStatus}
        </>
      );
    } else {
      content = gbsStatus;
    }
  } else {
    content = NO_RESULT;
  }
  return (
    content
  );
};

GroupBStrepStatus.propTypes = propTypes;
export default injectIntl(GroupBStrepStatus);
