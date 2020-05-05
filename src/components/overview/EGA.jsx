import { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // a quantity measured in days
  estimatedGestationalAge: PropTypes.number,
  // boolean value indicating if all the babies for a particular patient were delivered or not
  allBabiesDelivered: PropTypes.bool,
  intl: intlShape.isRequired,
};

/* The component shows the latest and computed estimated gestational age for the patient */
class EGA extends Component {
    getFormattedEGA = (estimatedGestationalAge, allBabiesDelivered, intl) => {
      let ega;
      const weeksAbbr = intl.formatMessage({ id: 'partogram-engine.WEEKS_ABBR' });
      const daysAbbr = intl.formatMessage({ id: 'partogram-engine.DAYS_ABBR' });
      if (allBabiesDelivered) {
        ega = intl.formatMessage({ id: 'partogram-engine.DELIVERED' });
      } else if (estimatedGestationalAge) {
        const egaWeeks = Math.floor(estimatedGestationalAge / 7);
        const egaDays = estimatedGestationalAge % 7;
        ega = `${egaWeeks + weeksAbbr} ${egaDays + daysAbbr}`;
      } else {
        ega = `${NO_RESULT}`;
      }
      return ega;
    }

    render() {
      const { estimatedGestationalAge, allBabiesDelivered, intl } = this.props;
      const content = this.getFormattedEGA(estimatedGestationalAge, allBabiesDelivered, intl);
      return (content);
    }
}

EGA.propTypes = propTypes;
export default injectIntl(EGA);
