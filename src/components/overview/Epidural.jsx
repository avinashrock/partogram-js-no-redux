import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Button from 'terra-button';
import moment from 'moment-timezone';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import partogramUserContext from '../../partogramUserContext';
import OverviewPopup from './OverviewPopup';
import { calculateDuration, calculateDurationInDays } from './overviewHelper';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // medicationDetails for a specific encounterId with epidural start and discontinued details
  medicationDetails: PropTypes.shape({
    epiduralDetails: PropTypes.arrayOf(
      PropTypes.shape({
        // Epidural display name
        display: PropTypes.string,
        // Epidural type configured in bedrock
        type: PropTypes.string,
        // Epidural value corresponding to the event configured in the bedrock
        value: PropTypes.string,
        // Documented date time.
        dateTime: PropTypes.string,
      }),
    ),
  }),
  intl: intlShape.isRequired,
};

/* The Component displays the counter value since the epidural was first administered or discontinued status
along with the documented date and time based on the service reponse received */
class Epidural extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.discontinuedStatus = false;
  }

  setButtonNode = (node) => {
    this.parentNode = node;
  }

  getButtonNode = () => this.parentNode

  /**
 * A helper function to get all the sorted epidural statrt values in the ascending order.
 * @param  {Object} epiduralArray - contains all the unsorted epidural start values.
 * @return {Array} - Array of data with all the sorted epidural start values.
 */
  sortEpiduralStartDetails = (epiduralArray) => epiduralArray.sort((a, b) => {
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);
    return dateA - dateB;
  })

  /**
 * A helper function to get all the sorted epidural statrt values in the ascending order.
 * @param  {Object} discontinuedArray - contains all the unsorted discontinued values
 * @return {Array} - Array of data with all the sorted epidural start values.
 */
  sortEpiduralStopDetails = (discontinuedArray) => discontinuedArray.sort((a, b) => {
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);
    return dateB - dateA;
  })

  /**
 * A helper function to get all the sorted epidural statrt values based on the value type EPIDURAL_START
 * @param  {Object} medicationDetails - contains all the medication details. Refer propTypes for the structure.
 * @return {Array} - Array of data with all the epidural start values.
 */
  getAllSortedEpiduralStartDetails = (medicationDetails) => {
    const epiduralArray = [];
    if (medicationDetails && medicationDetails.epiduralDetails.length) {
      medicationDetails.epiduralDetails.forEach(
        (value) => {
          // Storing all the epidural start values into the start array.
          if (value.type === 'EPIDURAL_START') {
            epiduralArray.push({
              type: value.type,
              display: value.display,
              value: value.value,
              dateTime: value.dateTime,
            });
          }
        },
      );
    }
    return this.sortEpiduralStartDetails(epiduralArray);
  }

  /**
 * A helper function to get all the sorted epidural discontinued values based on the value type EPIDURAL_DISCONTINUED
 * @param  {Object} medicationDetails - contains all the medication details. Refer propTypes for the structure.
 * @return {Array} - Array of data with all the epidural stop/discontinued values.
 */
  getAllSortedEpiduralStopDetails = (medicationDetails) => {
    const epiduralArray = [];
    if (medicationDetails && medicationDetails.epiduralDetails.length) {
      medicationDetails.epiduralDetails.forEach(
        (value) => {
          // Storing all the epidural stop values into the discontinued array.
          if (value.type === 'EPIDURAL_DISCONTINUED') {
            epiduralArray.push({
              type: value.type,
              display: value.display,
              value: value.value,
              dateTime: value.dateTime,
            });
          }
        },
      );
    }
    return this.sortEpiduralStopDetails(epiduralArray);
  }

  /**
 * A helper function to which returns the react element based on the current status of the epidural which either
   shows the counter or discontinued message.
 * @param  {Object} medicationDetails - contains all the medication details. Refer propTypes for the structure.
 * @param {String} timezone - current timezone.
 * @param {Object} intl - used to format the message based on the current locale.
 * @return {Element} - Consisting of a counter value or the discontinued status.
 */
    getEpiduralInfo = (medicationDetails, intl) => {
      const startArray = this.getAllSortedEpiduralStartDetails(medicationDetails);
      const discontinuedArray = this.getAllSortedEpiduralStopDetails(medicationDetails);
      let timeToBeDisplayed;
      let epiduralStartTime;
      let dateDiff;
      let epiduralLastStartTime;
      let latestDiscontinuedTime;
      let discontinuedDateTime;
      let duration;
      const currentDateTime = moment(`${new Date().toISOString().split('.')[0]}Z`);
      if (startArray.length && startArray[0].value) {
        epiduralStartTime = moment(startArray[0].value);
        // considering the last or latest documented epidural start value.
        epiduralLastStartTime = new Date(startArray[startArray.length - 1].value);
        /*
        Considering the current date time for the counter to be displayed since the epidural was first administered
        when the epidural discontinued is null or not charted.
        */
        if (discontinuedArray.length && discontinuedArray[0].value === null) {
          dateDiff = currentDateTime.diff(epiduralStartTime);
          duration = moment.duration(dateDiff);
          timeToBeDisplayed = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
          return timeToBeDisplayed;
        }
        latestDiscontinuedTime = discontinuedArray.length ? new Date(discontinuedArray[0].value).getTime() : null;
        if (epiduralLastStartTime.getTime() > latestDiscontinuedTime) {
          dateDiff = currentDateTime.diff(epiduralStartTime);
          duration = moment.duration(dateDiff);
          timeToBeDisplayed = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
          return timeToBeDisplayed;
        }
        /*
        Keep the counter face up all the time
        */
        if (epiduralLastStartTime.getTime() < latestDiscontinuedTime) {
          discontinuedDateTime = moment(discontinuedArray[0].value);
          dateDiff = discontinuedDateTime.diff(epiduralStartTime);
          duration = moment.duration(dateDiff);
          timeToBeDisplayed = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
          return timeToBeDisplayed;
        }
      }
      return NO_RESULT;
    }

    handleButtonClick() {
      this.setState({ isPopupOpen: true });
    }

    handleRequestClose() {
      this.setState({ isPopupOpen: false });
    }

    render() {
      const {
        medicationDetails, intl,
      } = this.props;
      const { isPopupOpen } = this.state;
      const content = this.getEpiduralInfo(medicationDetails, intl);
      if (content === NO_RESULT) {
        return content;
      }
      return (
        <>
          { content }
          <Button
            text="none"
            icon={<IconInformation />}
            isIconOnly
            isCompact
            variant="utility"
            onClick={this.handleButtonClick}
            refCallback={this.setButtonNode}
          />
          <OverviewPopup
            contentWidth="320"
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            isPopupOpen={isPopupOpen}
            type="epidural"
            sortedEpiduralArray={this.getAllSortedEpiduralStartDetails(medicationDetails)}
            sortedEpiduralDiscontinuedArray={this.getAllSortedEpiduralStopDetails(medicationDetails)}
            intl={intl}
          />
        </>
      );
    }
}

Epidural.contextType = partogramUserContext;
Epidural.propTypes = propTypes;
export default injectIntl(Epidural);
