import React from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import { getFormattedDateTime } from '../../../application/helpers/FormatDateTimeValue';

const propTypes = {
  isOpen: PropTypes.bool,
  selectedDataPoint: PropTypes.object,
  dataMap: PropTypes.object,
  timezone: PropTypes.string,
};

const ContractionPopupItem = (props) => {
  const {
    isOpen, selectedDataPoint, dataMap, timezone,
  } = props;
  const selectedDate = isOpen ? new Date(selectedDataPoint.config.x) : null;
  const key = selectedDate.toISOString().split('.')[0].concat('Z');
  return (
    <Spacer paddingLeft="small">
      {isOpen ? dataMap[key].map((val, index) => (
        <React.Fragment key={selectedDataPoint.config.label.display}>
          <p style={{ margin: '.2em 0em', color: 'grey' }}>
            {selectedDataPoint.config.label.contractionFrequencyDisplay}
          </p>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {val.contractionFrequency}
          </p>
          <p style={{ paddingRight: '.8em', margin: '.2em 0em', color: 'grey' }}>
            {selectedDataPoint.config.label.contractionIntensityDisplay}
          </p>
          <p style={{ margin: '.2em 0em', fontWeight: 'bold' }}>{val.intensityDisplay}</p>
          {' '}
        </React.Fragment>
      )) : null}
      {isOpen ? <Text style={{ paddingTop: '.3em', color: 'grey' }}>{isOpen ? getFormattedDateTime(selectedDate.toISOString(), timezone, 'MMM DD, YYYY HH:mm:ss') : '--' }</Text> : null}
    </Spacer>
  );
};
ContractionPopupItem.propTypes = propTypes;
export default ContractionPopupItem;
