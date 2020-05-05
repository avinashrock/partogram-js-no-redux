import React from 'react';
import PropTypes from 'prop-types';
import IconLow from 'terra-icon/lib/icon/IconLow';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import Spacer from 'terra-spacer';

const propTypes = {
  normalcy: PropTypes.string,
};

// The component returns the criticality indicator icon based on the normalcy value.
class Normalcy extends React.Component {
  returnNormalcyIcon = (normalcy) => {
    switch (normalcy.toUpperCase()) {
      case 'HIGH': return <IconHigh />;
      case 'HIGH_CRITICAL': return <IconCritical />;
      case 'LOW': return <IconLow />;
      case 'LOW_CRITICAL': return <IconCritical />;
      case 'NORMAL': return '';
      default:
        return '';
    }
  }

  render() {
    const {
      normalcy,
    } = this.props;
    return (
      <Spacer isInlineBlock paddingRight="small">
        {this.returnNormalcyIcon(normalcy)}
      </Spacer>
    );
  }
}

Normalcy.propTypes = propTypes;
export default Normalcy;
