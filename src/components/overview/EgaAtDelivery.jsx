import React from 'react';
import Spacer from 'terra-spacer';
import PropTypes from 'prop-types';
import Grid from 'terra-grid';
import classNames from 'classnames/bind';
import { NO_RESULT } from '../../constants';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // It consists of ega at delivery for each baby.
  egaData: PropTypes.array,
};

/*
This component displays the Ega at Delivery for each baby with corresponding
baby label and its corresponding value.
 */

class EgaAtDelivery extends React.Component {
  renderEgaData = (egaData) => {
    const content = egaData.map((data, index) => {
      let label;
      if (data.egaLabel) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.egaLabel}</div>;
      } else if (data.value === NO_RESULT) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.label}</div>;
      } else {
        label = <div className={bindStyleToClassName('parto-text-align-right')} style={{ fontStyle: 'italic', fontSize: '13px' }}>{data.deliveryLabel}</div>;
      }
      let displayEgaValue;
      if (data.deliveryValue) {
        displayEgaValue = data.deliveryValue;
      } else {
        displayEgaValue = data.value ? NO_RESULT : <div />;
      }
      return (
        <>
          <Grid.Column tiny={6} small={6} medium={6} large={6} className={bindStyleToClassName('parto-column-divider')}>
            <Spacer marginRight="medium" paddingBottom={egaData.length - 1 === index ? 'large' : ''}>
              <div className={bindStyleToClassName('parto-text-align-right')}>{label}</div>
            </Spacer>
          </Grid.Column>
          <Grid.Column tiny={6} small={6} medium={6} large={6}>
            {displayEgaValue}
          </Grid.Column>
        </>
      );
    });
    return content;
  }

  render() {
    const { egaData } = this.props;
    const content = this.renderEgaData(egaData);
    return content;
  }
}

EgaAtDelivery.propTypes = propTypes;
export default EgaAtDelivery;
