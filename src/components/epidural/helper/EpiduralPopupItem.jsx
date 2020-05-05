import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import moment from 'moment-timezone';

const propTypes = {
  isOpen: PropTypes.bool,
  selectedDataPoint: PropTypes.object,
  dataMap: PropTypes.object,
};


class EpiduralPopupItem extends Component {
  convertDateFormat = (d) => moment.tz(d, moment.tz.guess()).local().format('MMM DD, YYYY HH:mm:ss');

  render() {
    const { isOpen, selectedDataPoint, dataMap } = this.props;
    const selectedDate = isOpen ? new Date(selectedDataPoint.config.x) : null;

    return (
      <Spacer paddingLeft="small">
        <Text weight={700} style={{ paddingTop: '4px', paddingRight: '10px' }}>{isOpen ? this.convertDateFormat(selectedDate.toISOString()) : '--' }</Text>
        {isOpen ? dataMap[selectedDate.toISOString()].map((val) => (
          <span key={`${val.value}+${val.event}`} style={{ display: 'flex' }}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="1em" width="1em" style={{ paddingTop: '3px' }}>
              <g fill={val.color}>
                <path d={val.shape} />
              </g>
            </svg>
            <Text style={{
              color: 'grey', paddingTop: '0px', paddingLeft: '2px', paddingRight: '12px',
            }}
            >
              {val.event}
            </Text>
          </span>
        )) : <></>}

      </Spacer>
    );
  }
}
EpiduralPopupItem.propTypes = propTypes;
export default EpiduralPopupItem;
