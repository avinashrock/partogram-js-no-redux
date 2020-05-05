import React from 'react';
import PropTypes from 'prop-types';
import Spacer from 'terra-spacer';
import classNames from 'classnames/bind';
import Text from 'terra-text';
import { NO_RESULT } from '../../constants';
import Normalcy from './Normalcy';
import styles from '../../application/PartoStyle.scss';
import { returnClassColor } from './overviewHelper';

const bindStyleToClassName = classNames.bind(styles);
const propTypes = {
  // maternal details containing the meow attributes, which are client configurable.
  maternalDetails: PropTypes.shape({
    meowsAttributes: PropTypes.array,
  }),
};

class MeowsPopup extends React.Component {
  getMeowAttributes = (maternalDetails) => {
    let popupData;
    if (maternalDetails && maternalDetails.meowsAttributes.length) {
      popupData = maternalDetails.meowsAttributes.map(
        (result) => {
          let criticalityIconElement = '';
          let colorClass = '';
          if (result.criticality) {
            colorClass = returnClassColor(result.criticality);
            criticalityIconElement = (<Normalcy normalcy={result.criticality} />);
          }
          let displayValue;
          if (result.value && result.unit) {
            displayValue = `${result.value} ${result.unit}`;
          } else if (result.value) {
            displayValue = result.value;
          } else {
            displayValue = NO_RESULT;
          }
          return (
            <>
              <Spacer paddingLeft="large+3" paddingRight="large+3" paddingTop="medium">
                <Text fontSize={14} weight={400} colorClass={bindStyleToClassName(['info'])}>
                  {result.name}
                </Text>
              </Spacer>
              <Spacer paddingLeft="large+3" paddingRight="large+3" paddingBottom="small-2">
                <Text fontSize={12} colorClass={bindStyleToClassName(colorClass)}>
                  {criticalityIconElement}
                  {displayValue}
                </Text>
              </Spacer>
            </>
          );
        },
      );
    }
    return popupData;
  }

  render() {
    const {
      maternalDetails,
    } = this.props;
    const popupContent = this.getMeowAttributes(maternalDetails);
    return (popupContent);
  }
}

MeowsPopup.propTypes = propTypes;
export default MeowsPopup;
