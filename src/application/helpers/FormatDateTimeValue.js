import moment from 'moment-timezone';

/**
 * A helper function to check if a particular date-time value is dst value or is charted in an ambiguous timeframe .
 * @param  {String} dateTime - It is the date and time value
 * @param {String} timezone - It is the current timezone
 * @return {boolean} - It is the deciding factor to check whether the date and time value was charted in an ambigous timeframe.
 */

export function inAmbiguousTime(dateTime, timezone) {
  if (!dateTime || !dateTime.isValid()) {
    return false;
  }

  const localizedDateTime = moment.tz(dateTime.format(), timezone);
  const beforeDaylightSaving = localizedDateTime.clone();
  const afterDaylightSaving = localizedDateTime.clone();

  // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
  // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
  beforeDaylightSaving.add(1, 'hour');
  afterDaylightSaving.subtract(1, 'hour');

  const isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
  const isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();

  return isAmbiguousBeforeChange || isAmbiguousAfterChange;
}

/**
 * A helper function to convert the date time format of type yyyy-mm-ddt00:00:00Z to appropriate format based on the timezone
  and specified format.
 * @param  {String} dateTimeValue - It is the date and time value
 * @param {String} timezone - It is the current timezone
 * @param {String} dateTimeFormat - It is the format that is either ll or lll supported by moment
 * @return {String} - returns the formatted date and time value.
 */
export function getFormattedDateTime(dateTimeValue, timezone, dateTimeFormat) {
  let formattedDateTimeValue;
  if (inAmbiguousTime(moment(dateTimeValue), timezone)) {
    formattedDateTimeValue = moment.tz(dateTimeValue, timezone).format(`${dateTimeFormat} z`);
  } else {
    formattedDateTimeValue = moment.tz(dateTimeValue, timezone).format(dateTimeFormat);
  }
  return formattedDateTimeValue;
}
