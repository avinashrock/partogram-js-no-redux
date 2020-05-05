import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import moment from 'moment-timezone';
import classNames from 'classnames/bind';
import partogramUserContext from '../../partogramUserContext';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';
import { NO_RESULT } from '../../constants';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // It consists of date, time of birth for each baby.
  dobData: PropTypes.array,
};

/*
This component displays the Date and time of birth for each baby with corresponding
baby label and its corresponding date time of birth value.
*/

class DateTimeOfBirth extends React.Component {
  renderDobData = (dobData) => {
    const content = dobData.map((data, index) => {
      let label;
      if (data.dobLabel) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.dobLabel}</div>;
      } else if (data.value === NO_RESULT) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.label}</div>;
      } else {
        label = <div className={bindStyleToClassName('parto-text-align-right')} style={{ fontStyle: 'italic', fontSize: '13px' }}>{data.dynamicBabyLabel}</div>;
      }
      let displayDOBValue;
      if (data.deliveryDateTime && moment(data.deliveryDateTime, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
        displayDOBValue = getFormattedDateTime(data.deliveryDateTime, this.context.timezone, 'lll');
      } else if (data.deliveryDateTime) {
        displayDOBValue = data.deliveryDateTime;
      } else {
        displayDOBValue = data.value ? NO_RESULT : <div />;
      }
      return (
        <>
          <Grid.Column tiny={6} small={6} medium={6} large={6} className={bindStyleToClassName('parto-column-divider')}>
            <Spacer marginRight="medium" paddingBottom={dobData.length - 1 === index ? 'large' : ''}>
              <div className={bindStyleToClassName('parto-text-align-right')}>{label}</div>
            </Spacer>
          </Grid.Column>
          <Grid.Column tiny={6} small={6} medium={6} large={6}>
            {displayDOBValue}
          </Grid.Column>
        </>
      );
    });
    return content;
  }

  render() {
    const { dobData } = this.props;
    const content = this.renderDobData(dobData);
    return content;
  }
}

DateTimeOfBirth.contextType = partogramUserContext;
DateTimeOfBirth.propTypes = propTypes;
export default injectIntl(DateTimeOfBirth);
