import React from 'react';
import Spacer from 'terra-spacer';
import PropTypes from 'prop-types';
import Text from 'terra-text';
import Grid from 'terra-grid';
import classNames from 'classnames/bind';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isPaddingRequired: PropTypes.bool,
};

const OverviewComponentItemView = (props) => {
  const {
    label, value, isPaddingRequired,
  } = props;
  return (
    <>
      <Grid.Column tiny={6} small={6} medium={6} large={6} huge={6} className={bindStyleToClassName('parto-column-divider')}>
        <Spacer marginRight="medium" paddingBottom={isPaddingRequired ? '' : 'large'}>
          <div className={bindStyleToClassName('parto-text-align-right')}>{label}</div>
        </Spacer>
      </Grid.Column>
      <Grid.Column tiny={6} small={6} medium={6} large={6} huge={6}>
        <div>
          <Text style={{ align: 'left' }} weight={400} fontSize={14}>{value}</Text>
        </div>
      </Grid.Column>
    </>
  );
};
OverviewComponentItemView.propTypes = propTypes;
export default OverviewComponentItemView;
