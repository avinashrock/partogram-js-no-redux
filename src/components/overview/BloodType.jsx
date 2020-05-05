import React from 'react';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import { injectIntl, intlShape } from 'react-intl';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // blood type of a specific patient or encounterId.
  maternalDetails: PropTypes.shape({
    bloodType: PropTypes.string,
  }),
  intl: intlShape.isRequired,
};

/* The Component displays the blood type of a particular patient */
const BloodType = (props) => {
  const {
    maternalDetails, intl,
  } = props;
  let bloodType;
  let content;
  if (maternalDetails !== null) {
    if ('bloodType' in maternalDetails) {
      // eslint-disable-next-line prefer-destructuring
      bloodType = maternalDetails.bloodType;
    }
  }
  if (bloodType) {
    // if the bloodType value matches any negative value then shows the warning indicator.
    if (bloodType.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.N' }))
      || bloodType.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.NEGATIVE' }))
      || bloodType.toUpperCase().match(intl.formatMessage({ id: 'partogram-engine.NEG' }))
      || bloodType.match('-')) {
      content = (
        <>
          <Spacer paddingRight="small" isInlineBlock>
            <IconWarning />
          </Spacer>
          {bloodType}
        </>
      );
    } else {
      content = bloodType;
    }
  } else {
    content = NO_RESULT;
  }
  return (content);
};

BloodType.propTypes = propTypes;
export default injectIntl(BloodType);
