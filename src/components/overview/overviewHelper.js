
import moment from 'moment-timezone';
import { NO_RESULT, HRS_IN_DAY, MINS_IN_HOUR } from '../../constants';
import { ColumnDataObject } from './initialization-components/ColumnDataObject';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';

export function calculateDuration(dateDiff, intl) {
  const duration = moment.duration(dateDiff);
  const totalHours = Math.trunc(duration.asHours());
  const remainingMinutes = Math.trunc(duration.asMinutes() % 60);
  // Total counter value to be displayed in terms of hours and minutes.
  const timeToBeDisplayed = `${totalHours}${intl.formatMessage({ id: 'partogram-engine.hours' })} ${remainingMinutes}${intl.formatMessage({ id: 'partogram-engine.minutes' })}`;
  return timeToBeDisplayed;
}

export function calculateDurationInDays(dateDiff, intl) {
  const duration = moment.duration(dateDiff);
  const days = Math.trunc(duration.asDays());
  let hours = Math.trunc(duration.asHours());
  hours -= days * HRS_IN_DAY; // Calculate remaining hoursin the duration
  let minutes = Math.trunc(duration.asMinutes());
  minutes -= (days * HRS_IN_DAY * MINS_IN_HOUR + hours * MINS_IN_HOUR); // Calculate remaining minutes in the duration.
  // Total counter value to be displayed in terms of days, hours and minutes.
  const timeToBeDisplayed = `${days}${intl.formatMessage({ id: 'partogram-engine.DAYS_ABBR' })}
  ${hours}${intl.formatMessage({ id: 'partogram-engine.hours' })}
  ${minutes}${intl.formatMessage({ id: 'partogram-engine.minutes' })}`;
  return timeToBeDisplayed;
}

/*
This function populates the array with and additionalFetalInformation. rom date and time for each baby.
*/

export function populateROMData(fetalDetails, intl) {
  const ruptureOfMebraneData = [];
  const currentDateTime = moment(`${new Date().toISOString().split('.')[0]}Z`);
  if (fetalDetails.length) {
    ruptureOfMebraneData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.babyInformation' }), undefined, 'romLabel'),
    );
    fetalDetails.slice(0, 3).forEach((element) => {
      let dateDiff;
      let counterToBeDisplayed;
      let duration;
      if (element.dynamicLabel) {
        if (element.ruptureOfMembraneDateTime) {
          dateDiff = element.deliveryDateTime
            ? moment(element.deliveryDateTime).diff(moment(element.ruptureOfMembraneDateTime))
            : currentDateTime.diff(moment(element.ruptureOfMembraneDateTime));
          duration = moment.duration(dateDiff);
          counterToBeDisplayed = (duration.asHours() > 0 && duration.asHours() < 24) ? calculateDuration(dateDiff, intl) : calculateDurationInDays(dateDiff, intl);
          ruptureOfMebraneData.push({
            babyLabel: element.dynamicLabel,
            babyValue: counterToBeDisplayed,
            duration: duration.asHours(),
            ruptureOfMembraneDateTime: element.ruptureOfMembraneDateTime,
            additionalFetalInformation: element.additionalFetalInformation,
          });
        } else {
          ruptureOfMebraneData.push({
            babyLabel: element.dynamicLabel,
            babyValue: NO_RESULT,
            ruptureOfMembraneDateTime: NO_RESULT,
            additionalFetalInformation: element.additionalFetalInformation,
          });
        }
      }
    });
  } else {
    ruptureOfMebraneData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.babyInformation' }), NO_RESULT),
    );
  }
  return ruptureOfMebraneData;
}

/*
This function populates the array with ega at delivery for each baby.
*/

export function populateEGAData(fetalDetails, intl) {
  const egaData = [];
  if (fetalDetails.length) {
    egaData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.estimatedGestationalAge' }), undefined, 'egaLabel'),
    );
    fetalDetails.slice(0, 3).forEach((element) => {
      if (element.dynamicLabel) {
        let egaValue = NO_RESULT;
        if (element.egaAtDelivery) {
          const egaWeeks = Math.floor(element.egaAtDelivery / 7);
          const egaDays = element.egaAtDelivery % 7;
          egaValue = `${egaWeeks + intl.formatMessage({ id: 'partogram-engine.WEEKS_ABBR' })} ${egaDays + intl.formatMessage({ id: 'partogram-engine.DAYS_ABBR' })}`;
        }
        egaData.push(
          ColumnDataObject(element.dynamicLabel, egaValue, 'deliveryLabel', 'deliveryValue'),
        );
      }
    });
  } else {
    egaData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.estimatedGestationalAge' }), NO_RESULT),
    );
  }
  return egaData;
}

/*
This function returns the class property which gets assigned based on the criticality value.
*/
export function returnClassColor(criticality) {
  switch (criticality.toUpperCase()) {
    case 'HIGH': return 'high';
    case 'HIGH_CRITICAL': return 'high-critical';
    case 'LOW': return 'low';
    case 'LOW_CRITICAL': return 'low-critical';
    case 'NORMAL': return '';
    default:
      return '';
  }
}

/*
This function populates the array with date and time of birth for each baby.
*/

export function populateDOBData(fetalDetails, intl) {
  const dobData = [];
  if (fetalDetails.length) {
    dobData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.DOB' }), undefined, 'dobLabel'),
    );
    fetalDetails.slice(0, 3).forEach(
      (element) => {
        if (element.dynamicLabel && element.deliveryDateTime) {
          dobData.push({
            dynamicBabyLabel: element.dynamicLabel,
            deliveryDateTime: element.deliveryDateTime,
          });
        }
        if (element.dynamicLabel && element.deliveryDateTime === null) {
          dobData.push({
            dynamicBabyLabel: element.dynamicLabel,
            deliveryDateTime: NO_RESULT,
          });
        }
      },
    );
  } else {
    dobData.push(
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.DOB' }), NO_RESULT),
    );
  }
  return dobData;
}

/*
    Functions prepares the thirdColumn and forurthColumn data for the overview component
    to be able to consume it and thus render the data.
*/

export function displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone) {
  if (Object.keys(thirdColumnData).length === 2) {
    if (additionalClinicalDetails && additionalClinicalDetails.length) {
      additionalClinicalDetails.slice(0, 2).forEach((dynamic) => {
        let babyCount = 0;
        dynamic.eventAttributes.forEach((elements) => {
          let eventValue = {};
          let dateTimeValue;
          // If the element has a dynamic label , maximum iterations allowed is three times
          if (elements.dynamicLabel && babyCount < 3) {
            babyCount += 1;
            const { name } = elements;
            if (babyCount === 1) {
              thirdColumnData.push({
                clinicalDetailslabel: name,
                value: null,
              });
            }
            // if the value is of the format 'YYYY-MM-DDTHH:mm:ssZ' then format it to appropriate date time format.
            if (moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
              dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: dateTimeValue,
                criticality: elements.criticality,
              };
            } else if (elements.value) {
              eventValue = elements.unit ? {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: `${elements.value} ${elements.unit}`,
                criticality: elements.criticality,
              } : {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: elements.value,
                criticality: elements.criticality,
              };
            } else {
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: NO_RESULT,
              };
            }
          } else if (!elements.dynamicLabel && moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
            dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: dateTimeValue,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel && elements.value) {
            eventValue = elements.unit ? {
              clinicalDetailslabel: elements.name,
              value: `${elements.value} ${elements.unit}`,
              criticality: elements.criticality,
            } : {
              clinicalDetailslabel: elements.name,
              value: elements.value,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel) {
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: NO_RESULT,
            };
          }
          // checking if the eventvalue object has some length before pushing the data into it.
          if (Object.keys(eventValue).length !== 0) {
            thirdColumnData.push(eventValue);
          }
        });
      });
      additionalClinicalDetails.slice(2, 4).forEach((dynamic) => {
        let babyCount = 0;
        dynamic.eventAttributes.forEach((elements) => {
          let eventValue = {};
          let dateTimeValue;
          // If the element has a dynamic label , maximum iterations allowed is three times
          if (elements.dynamicLabel && babyCount < 3) {
            babyCount += 1;
            const { name } = elements;
            if (babyCount === 1) {
              fourthColumnData.push({
                clinicalDetailslabel: name,
                value: null,
              });
            }
            // if the value is of the format 'YYYY-MM-DDTHH:mm:ssZ' then format it to appropriate date time format.
            if (moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
              dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: dateTimeValue,
                criticality: elements.criticality,
              };
            } else if (elements.value) {
              eventValue = elements.unit ? {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: `${elements.value} ${elements.unit}`,
                criticality: elements.criticality,
              } : {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: elements.value,
                criticality: elements.criticality,
              };
            } else {
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: NO_RESULT,
              };
            }
          } else if (!elements.dynamicLabel && moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
            dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: dateTimeValue,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel && elements.value) {
            eventValue = elements.unit ? {
              clinicalDetailslabel: elements.name,
              value: `${elements.value} ${elements.unit}`,
              criticality: elements.criticality,
            } : {
              clinicalDetailslabel: elements.name,
              value: elements.value,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel) {
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: NO_RESULT,
            };
          }
          // checking if the eventvalue object has some length before pushing the data into it.
          if (Object.keys(eventValue).length !== 0) {
            fourthColumnData.push(eventValue);
          }
        });
      });
    }
  } else if (Object.keys(thirdColumnData).length === 3) {
    if (additionalClinicalDetails && additionalClinicalDetails.length) {
      additionalClinicalDetails.slice(0, 1).forEach((dynamic) => {
        let babyCount = 0;
        dynamic.eventAttributes.forEach((elements) => {
          let eventValue = {};
          let dateTimeValue;
          // If the element has a dynamic label , maximum iterations allowed is three times
          if (elements.dynamicLabel && babyCount < 3) {
            babyCount += 1;
            const { name } = elements;
            if (babyCount === 1) {
              fourthColumnData.push({
                clinicalDetailslabel: name,
                value: null,
              });
            }
            // if the value is of the format 'YYYY-MM-DDTHH:mm:ssZ' then format it to appropriate date time format.
            if (moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
              dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: dateTimeValue,
                criticality: elements.criticality,
              };
            } else if (elements.value) {
              eventValue = elements.unit ? {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: `${elements.value} ${elements.unit}`,
                criticality: elements.criticality,
              } : {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: elements.value,
                criticality: elements.criticality,
              };
            } else {
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: NO_RESULT,
              };
            }
          } else if (!elements.dynamicLabel && moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
            dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: dateTimeValue,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel && elements.value) {
            eventValue = elements.unit ? {
              clinicalDetailslabel: elements.name,
              value: `${elements.value} ${elements.unit}`,
              criticality: elements.criticality,
            } : {
              clinicalDetailslabel: elements.name,
              value: elements.value,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel) {
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: NO_RESULT,
            };
          }
          // checking if the eventvalue object has some length before pushing the data into it.
          if (Object.keys(eventValue).length !== 0) {
            thirdColumnData.push(eventValue);
          }
        });
      });
      additionalClinicalDetails.slice(1, 4).forEach((dynamic) => {
        let babyCount = 0;
        dynamic.eventAttributes.forEach((elements) => {
          let eventValue = {};
          let dateTimeValue;
          // If the element has a dynamic label , maximum iterations allowed is three times
          if (elements.dynamicLabel && babyCount < 3) {
            babyCount += 1;
            const { name } = elements;
            if (babyCount === 1) {
              fourthColumnData.push({
                clinicalDetailslabel: name,
                value: null,
              });
            }
            // if the value is of the format 'YYYY-MM-DDTHH:mm:ssZ' then format it to appropriate date time format.
            if (moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
              dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: dateTimeValue,
                criticality: elements.criticality,
              };
            } else if (elements.value) {
              eventValue = elements.unit ? {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: `${elements.value} ${elements.unit}`,
                criticality: elements.criticality,
              } : {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: elements.value,
                criticality: elements.criticality,
              };
            } else {
              eventValue = {
                dynamiclabel: elements.dynamicLabel,
                dynamicValue: NO_RESULT,
              };
            }
          } else if (!elements.dynamicLabel && moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
            dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: dateTimeValue,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel && elements.value) {
            eventValue = elements.unit ? {
              clinicalDetailslabel: elements.name,
              value: `${elements.value} ${elements.unit}`,
              criticality: elements.criticality,
            } : {
              clinicalDetailslabel: elements.name,
              value: elements.value,
              criticality: elements.criticality,
            };
          } else if (!elements.dynamicLabel) {
            eventValue = {
              clinicalDetailslabel: elements.name,
              value: NO_RESULT,
            };
          }
          // checking if the eventvalue object has some length before pushing the data into it.
          if (Object.keys(eventValue).length !== 0) {
            fourthColumnData.push(eventValue);
          }
        });
      });
    }
  } else if (additionalClinicalDetails && additionalClinicalDetails.length) {
    additionalClinicalDetails.slice(0, 4).forEach((dynamic) => {
      let babyCount = 0;
      dynamic.eventAttributes.forEach((elements) => {
        let eventValue = {};
        let dateTimeValue;
        // If the element has a dynamic label , maximum iterations allowed is three times
        if (elements.dynamicLabel && babyCount < 3) {
          babyCount += 1;
          const { name } = elements;
          if (babyCount === 1) {
            fourthColumnData.push({
              clinicalDetailslabel: name,
              value: null,
            });
          }
          // if the value is of the format 'YYYY-MM-DDTHH:mm:ssZ' then format it to appropriate date time format.
          if (moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
            dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
            eventValue = {
              dynamiclabel: elements.dynamicLabel,
              dynamicValue: dateTimeValue,
              criticality: elements.criticality,
            };
          } else if (elements.value) {
            eventValue = elements.unit ? {
              dynamiclabel: elements.dynamicLabel,
              dynamicValue: `${elements.value} ${elements.unit}`,
              criticality: elements.criticality,
            } : {
              dynamiclabel: elements.dynamicLabel,
              dynamicValue: elements.value,
              criticality: elements.criticality,
            };
          } else {
            eventValue = {
              dynamiclabel: elements.dynamicLabel,
              dynamicValue: NO_RESULT,
            };
          }
        } else if (!elements.dynamicLabel && moment(elements.value, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
          dateTimeValue = getFormattedDateTime(elements.value, timezone, 'll');
          eventValue = {
            clinicalDetailslabel: elements.name,
            value: dateTimeValue,
            criticality: elements.criticality,
          };
        } else if (!elements.dynamicLabel && elements.value) {
          eventValue = elements.unit ? {
            clinicalDetailslabel: elements.name,
            value: `${elements.value} ${elements.unit}`,
            criticality: elements.criticality,
          } : {
            clinicalDetailslabel: elements.name,
            value: elements.value,
            criticality: elements.criticality,
          };
        } else if (!elements.dynamicLabel) {
          eventValue = {
            clinicalDetailslabel: elements.name,
            value: NO_RESULT,
          };
        }
        // checking if the eventvalue object has some length before pushing the data into it.
        if (Object.keys(eventValue).length !== 0) {
          fourthColumnData.push(eventValue);
        }
      });
    });
  }
}
