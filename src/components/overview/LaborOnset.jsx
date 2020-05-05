import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import Button from 'terra-button';
import moment from 'moment';
import { NO_RESULT } from '../../constants';
import { calculateDuration, calculateDurationInDays } from './overviewHelper';
import OverviewPopup from './OverviewPopup';

const propTypes = {
  // laborDetails for a specific encounterId
  laborDetails: PropTypes.shape({
    laborStartDateTime: PropTypes.string,
    laborStopDateTime: PropTypes.string,
    partogramStopDateTime: PropTypes.string,
  }),
  // fetalDetails for a specific encounterId for with laborStop for dynamic babies.
  fetalDetails: PropTypes.arrayOf(
    PropTypes.shape({
      laborStopDateTime: PropTypes.string,
    }),
  ),
  intl: intlShape.isRequired,
};

/* The component displays the counter since the labor started and an info icon,
upon clicking on it , that displays the labor start date and time */
class LaborOnset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  setButtonNode = (node) => {
    this.parentNode = node;
  }

  getButtonNode = () => this.parentNode;

  /**
 * A helper function to which returns the duration in hours and minutes
 * @param  {Object} laborDetails - contains the necessary properties. Refer to the prop types for structure.
 * @param {Array} fetalDetails - contains the necessary properties. Refer to the prop types for structure.
 * @param {Object} intl - used to format the message based on the current locale.
 * @return {String} - Consisting of a counter value in hours and minutes .
 */

  getLaborOnset= (laborDetails, fetalDetails, intl) => {
    let displayTime;
    let dateDiff;
    let laborStartDate;
    let laborStopDate;
    const laborStopArray = [];
    let content;
    let duration;
    // IF the laborStartDateTime is null or if it is charted in a future timeframe then it shall display '--'
    if (laborDetails.laborStartDateTime === null
       || new Date(laborDetails.laborStartDateTime).getTime() > new Date().getTime()) {
      content = NO_RESULT;
      return content;
    }
    // non-dynamic event
    if (laborDetails.laborStopDateTime === null) {
      // Check if the fetalDetails has the laborStop configured for each dynamic baby.
      if (fetalDetails !== null && fetalDetails.length) {
        fetalDetails.forEach(
          (value) => {
            if (value.laborStopDateTime !== undefined && value.laborStopDateTime !== null) {
              laborStopArray.push({
                laborStopDateTime: value.laborStopDateTime,
              });
            }
          },
        );
        if (laborStopArray.length) {
          laborStopArray.sort((a, b) => {
            const dateA = new Date(a.laborStopDateTime);
            const dateB = new Date(b.laborStopDateTime);
            return dateB - dateA;
          });
          laborStopDate = new Date(laborStopArray[0].laborStopDateTime);
        } else {
          laborStopDate = new Date();
        }
      } else {
        laborStopDate = new Date();
      }
      /*
      Consider the partogram Stop as the labor Stop value if it is charted even before the actual labor stop value is charted.
      */
      if (laborStopDate.getTime() <= new Date().getTime() && laborDetails.partogramStopDateTime !== null) {
        const partogramStopDate = laborDetails.partogramStopDateTime;
        laborStopDate = new Date(partogramStopDate).getTime() < laborStopDate.getTime() ? new Date(partogramStopDate) : laborStopDate;
      }
      laborStartDate = new Date(laborDetails.laborStartDateTime);
      dateDiff = moment(`${laborStopDate.toISOString().split('.')[0]}Z`).diff(moment(`${laborStartDate.toISOString().split('.')[0]}Z`));
      duration = moment.duration(dateDiff);
      displayTime = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
      content = (
        displayTime
      );
      return content;
    }
    laborStartDate = new Date(laborDetails.laborStartDateTime);
    // non-dynamic labor stop
    laborStopDate = new Date(laborDetails.laborStopDateTime);
    dateDiff = moment(`${laborStopDate.toISOString().split('.')[0]}Z`).diff(moment(`${laborStartDate.toISOString().split('.')[0]}Z`));
    duration = moment.duration(dateDiff);
    displayTime = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
    content = (
      displayTime
    );
    return content;
  }

  handleButtonClick() {
    this.setState({ isPopupOpen: true });
  }

  handleRequestClose() {
    this.setState({ isPopupOpen: false });
  }

  render() {
    const {
      laborDetails, fetalDetails, intl,
    } = this.props;
    const content = this.getLaborOnset(laborDetails, fetalDetails, intl);
    if (content === NO_RESULT) {
      return (
        content
      );
    }
    return (
      <>
        {content}
        <Button
          icon={<IconInformation />}
          isIconOnly
          isCompact
          variant="utility"
          onClick={this.handleButtonClick}
          refCallback={this.setButtonNode}
        />
        <OverviewPopup
          contentWidth="auto"
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isPopupOpen={this.state.isPopupOpen}
          type="labor-onset"
          laborDetails={laborDetails}
          intl={intl}
        />
      </>
    );
  }
}

LaborOnset.propTypes = propTypes;
export default injectIntl(LaborOnset);
