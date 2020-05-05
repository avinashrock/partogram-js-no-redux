import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import partogramUserContext from '../../../partogramUserContext';
import { getFormattedDateTime } from '../../../application/helpers/FormatDateTimeValue';

const propTypes = {
  isOpen: PropTypes.bool,
  selectedDataPoint: PropTypes.object,
  dataMap: PropTypes.object,
};

// eslint-disable-next-line react/prefer-stateless-function
class EpiduralPopupItem extends Component {
  render() {
    const { isOpen, selectedDataPoint, dataMap } = this.props;
    const selectedDate = isOpen ? new Date(selectedDataPoint.config.x) : null;
    const contextValue = this.context;
    return (
      <Spacer paddingLeft="small">
        <Text weight={700} style={{ paddingTop: '4px', paddingRight: '10px' }}>
          {isOpen ? getFormattedDateTime(selectedDate.toISOString(), contextValue.timezone, 'LLL') : '--' }
        </Text>
        {isOpen ? dataMap[selectedDate.toISOString()].map((objectValue) => (
          <span key={`${objectValue.value}+${objectValue.event}`} style={{ display: 'flex' }}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="1em" width="1em" style={{ paddingTop: '3px' }}>
              <g fill={objectValue.color}>
                <path d={objectValue.shape} />
              </g>
            </svg>
            <Text style={{
              color: 'grey', paddingTop: '0px', paddingLeft: '2px', paddingRight: '12px',
            }}
            >
              {objectValue.event}
            </Text>
          </span>
        )) : <></>}
      </Spacer>
    );
  }
}
EpiduralPopupItem.propTypes = propTypes;
EpiduralPopupItem.contextType = partogramUserContext;
export default EpiduralPopupItem;
