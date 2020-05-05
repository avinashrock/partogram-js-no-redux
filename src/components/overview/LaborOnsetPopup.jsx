import React from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import { intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import partogramUserContext from '../../partogramUserContext';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // labor details containing the labor start date and time for a particular patient.
  laborDetails: PropTypes.shape({
    laborStartDateTime: PropTypes.string,
  }),
  intl: intlShape.isRequired,
};
class LaborOnsetPopup extends React.Component {
  render() {
    const {
      laborDetails, intl,
    } = this.props;
    let popupContent;
    if (laborDetails.laborStartDateTime) {
      // value format is Jan 4, 2020 12:23 AM
      const laborStartDateTime = getFormattedDateTime(laborDetails.laborStartDateTime, this.context.timezone, 'lll');
      popupContent = (
        <>
          <Spacer paddingLeft="medium" paddingTop="medium">
            <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
              {intl.formatMessage({ id: 'partogram-engine.StartDateTime' })}
            </Text>
          </Spacer>
          <Spacer paddingLeft="medium" paddingRight="medium" paddingBottom="medium">
            <Text fontSize={14} weight={400}>
              {laborStartDateTime}
            </Text>
          </Spacer>
        </>
      );
    }
    return (popupContent);
  }
}

LaborOnsetPopup.contextType = partogramUserContext;
LaborOnsetPopup.propTypes = propTypes;
export default injectIntl(LaborOnsetPopup);
