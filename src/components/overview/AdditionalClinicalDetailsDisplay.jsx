import React from 'react';
import Spacer from 'terra-spacer';
import PropTypes from 'prop-types';
import Grid from 'terra-grid';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import { returnClassColor } from './overviewHelper';
import Normalcy from './Normalcy';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // dynamic baby label
  clinicalDetailsDynamiclabel: PropTypes.string,
  // value corresponding to the dynamic key/label
  clinicalDetailsDynamicValue: PropTypes.string,
  // clinical detail label
  clinicalDetailslabel: PropTypes.string,
  // clinical details charted value
  clinicalDetailsValue: PropTypes.string,
  // criticality value which decides the text color and the indicator to be shown.
  criticality: PropTypes.string,
  dynamicLabelObject: PropTypes.object,
};

/*
Displays all the additional clincical events , which are client configurable
 */

const AdditionalClinicalDetailsDisplay = (props) => {
  const {
    clinicalDetailsDynamiclabel, clinicalDetailsDynamicValue,
    clinicalDetailslabel, clinicalDetailsValue, dynamicLabelObject, criticality,
  } = props;
  let criticalityIconElement = '';
  let colorClass;
  if (criticality) {
    colorClass = returnClassColor(criticality);
    criticalityIconElement = (<Normalcy normalcy={criticality} />);
  }
  let label;
  let value;
  let paddingBottomValue = '';
  if (dynamicLabelObject && !dynamicLabelObject.dynamiclabel) {
    paddingBottomValue = 'large';
  }
  if (clinicalDetailsDynamiclabel) {
    label = <Spacer marginRight="medium" paddingBottom={paddingBottomValue}><div className={bindStyleToClassName('parto-text-align-right')} style={{ fontStyle: 'italic', fontSize: '13px' }}>{clinicalDetailsDynamiclabel}</div></Spacer>;
  } else {
    label = (
      <Spacer marginRight="medium" paddingBottom={paddingBottomValue}>
        <div className={bindStyleToClassName('parto-text-align-right')}>{clinicalDetailslabel}</div>
      </Spacer>
    );
  }
  if (clinicalDetailsDynamicValue) {
    value = clinicalDetailsDynamicValue;
  } else {
    value = clinicalDetailsValue;
  }
  return (
    <>
      <Grid.Column tiny={6} small={6} medium={6} large={6} className={bindStyleToClassName('parto-column-divider')}>
        {label}
      </Grid.Column>
      <Grid.Column tiny={6} small={6} medium={6} large={6}>
        {criticalityIconElement}
        <Text colorClass={bindStyleToClassName(colorClass)}>{value}</Text>
      </Grid.Column>
    </>
  );
};

AdditionalClinicalDetailsDisplay.propTypes = propTypes;
export default AdditionalClinicalDetailsDisplay;
