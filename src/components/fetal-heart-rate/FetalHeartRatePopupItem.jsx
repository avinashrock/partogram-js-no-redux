import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import IconModified from 'terra-icon/lib/icon/IconModified';
import partogramUserContext from '../../partogramUserContext';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';

const propTypes = {
  isOpen: PropTypes.bool,
  selectedDataPoint: PropTypes.object,
  dataMap: PropTypes.object,
};

// eslint-disable-next-line react/prefer-stateless-function
class FetalHeartRatePopupItem extends Component {
  render() {
    const { isOpen, selectedDataPoint, dataMap } = this.props;
    let selectedDate = null;
    const contextValue = this.context;
    if (isOpen) {
      selectedDate = selectedDataPoint.key.includes('baseline') ? new Date(selectedDataPoint.config.x) : new Date(selectedDataPoint.config.mid.x);
    }
    const popupDataArray = (
      isOpen ? dataMap[selectedDate.toISOString()].map((objectValue) => (
        <span key={`${objectValue.value}+${objectValue.event}`} style={{ display: 'flex' }}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="2em" width="1em">
            <g fill={objectValue.color}>
              <path d={objectValue.shape} />
            </g>
          </svg>
          <Text
            style={{ color: 'grey', paddingTop: '5px', paddingLeft: '2px' }}
          >
            {objectValue.event}
          </Text>
          <Text
            style={{ paddingTop: '5px', paddingLeft: '2px', paddingRight: '12px' }}
          >
            <span>
              {':'}
              {objectValue.value}
              {' '}
              {objectValue.resultUnit}
              {' '}
              {objectValue.isResultModified && <IconModified ariaLabel="Modified Icon" height="1em" width="1em" />}
            </span>
          </Text>
        </span>
      )) : null
    );

    return (
      <Spacer paddingLeft="small">
        <Text weight={700} style={{ paddingTop: '6px', paddingRight: '10px' }}>
          {isOpen ? getFormattedDateTime(selectedDate.toISOString(), contextValue.timezone, 'LLL') : '--'}
        </Text>
        {popupDataArray}
      </Spacer>
    );
  }
}
FetalHeartRatePopupItem.propTypes = propTypes;
FetalHeartRatePopupItem.contextType = partogramUserContext;
export default FetalHeartRatePopupItem;
