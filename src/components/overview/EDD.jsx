import { Component } from 'react';
import PropTypes from 'prop-types';
import { NO_RESULT } from '../../constants';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';

const propTypes = {
  /*
  Sample string format: "2019-11-22T06:00:00Z"
  */
  estimatedDeliveryDate: PropTypes.string,
  // current timezone received from the engine.
  timezone: PropTypes.string,
};

/* The component displays the estimated delivery date and time of birth for a particular patient */
class EDD extends Component {
    getEDD = (estimatedDeliveryDate, timezone) => {
      let edd;
      if (estimatedDeliveryDate) {
        edd = getFormattedDateTime(estimatedDeliveryDate, timezone, 'll');
      } else {
        edd = NO_RESULT;
      }
      /*
      return format:  Jan 3, 2020
      */
      return edd;
    }

    render() {
      const {
        estimatedDeliveryDate,
        timezone,
      } = this.props;
      const content = this.getEDD(estimatedDeliveryDate, timezone);
      return (
        content
      );
    }
}


EDD.propTypes = propTypes;
export default EDD;
