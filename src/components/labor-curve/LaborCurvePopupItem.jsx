import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import moment from 'moment-timezone';
import IconModified from 'terra-icon/lib/icon/IconModified';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';
import partogramUserContext from '../../partogramUserContext';

const propTypes = {
  isOpen: PropTypes.bool,
  selectedDataPoint: PropTypes.object,
  dataMap: PropTypes.object,
};

// eslint-disable-next-line react/prefer-stateless-function
class LaborCurvePopupItem extends Component {
  render() {
    const { isOpen, selectedDataPoint, dataMap } = this.props;
    const selectedDate = isOpen ? new Date(selectedDataPoint.config.x) : null;
    const contextValue = this.context;
    const popupDataArray = (
      isOpen ? dataMap[selectedDate.toISOString()].map((objectValue) => (
        <span key={`${objectValue.value}+${objectValue.event}`} style={{ display: 'flex' }}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="2.3em" width="1em">
            <g fill={objectValue.color}>
              <path d={objectValue.shape.path.d} />
            </g>
          </svg>
          <Text
            style={{ color: 'grey', paddingTop: '5px', paddingLeft: '2px' }}
          >
            {objectValue.event}
            <Spacer paddingLeft="small">
              <Text
                style={{ color: 'grey', paddingTop: '5px', paddingRight: '5px' }}
              >
                {objectValue.value}
                {objectValue.resultUnit}
                {objectValue.isResultModified && <IconModified ariaLabel="Modified Icon" height="1em" width="1em" />}
              </Text>
            </Spacer>
          </Text>
        </span>
      )) : null
    );

    return (
      <Spacer paddingLeft="small">
        {popupDataArray}
        <Text weight={700} style={{ paddingTop: '6px', paddingRight: '10px', color: 'grey' }}>{isOpen ? getFormattedDateTime(selectedDate.toISOString(), contextValue.timezone, 'LLL') : '--'}</Text>
      </Spacer>
    );
  }
}
LaborCurvePopupItem.propTypes = propTypes;
LaborCurvePopupItem.contextType = partogramUserContext;
export default LaborCurvePopupItem;
