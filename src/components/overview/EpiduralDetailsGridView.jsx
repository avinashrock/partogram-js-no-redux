import React, { Component } from 'react';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import { NO_RESULT } from '../../constants';
import partogramUserContext from '../../partogramUserContext';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propsTypes = {
  epiduralStartArray: PropTypes.array,
  epiduralStopArray: PropTypes.array,
  intl: intlShape.isRequired,
};

class EpiduralDetaillsGridView extends Component {
    sortEpiduralDetails = (epiduralArray) => epiduralArray.sort((a, b) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);
      return dateA - dateB;
    })

    render() {
      const {
        epiduralStartArray, epiduralStopArray, intl,
      } = this.props;
      return (
        <Grid>
          <Grid.Row>
            <Grid.Column enormous={6} medium={6} small={12} tiny={12} huge={6} large={6}>
              <Spacer
                paddingTop="small"
                paddingLeft="large"
                paddingRight="medium"
              >
                <div className={bindStyleToClassName('parto-epidural-start-stop-display')}>{intl.formatMessage({ id: 'partogram-engine.StartDateTime' })}</div>
              </Spacer>
              {epiduralStartArray.map((result, index) => (
                <React.Fragment key={`${index.toString()}popup`}>
                  <Spacer
                    paddingLeft="large"
                    paddingRight="medium"
                    paddingBottom={index === epiduralStartArray.length - 1 ? 'large' : ''}
                  >
                    <Text fontSize={12} weight={400}>
                      {getFormattedDateTime(result.value, this.context.timezone, 'lll')}
                    </Text>
                  </Spacer>
                </React.Fragment>
              ))}
            </Grid.Column>
            <Grid.Column enormous={6} medium={6} small={12} tiny={12} huge={6} large={6}>
              <Spacer
                paddingTop="small"
                paddingLeft="large"
                paddingRight="medium"
              >
                <div className={bindStyleToClassName('parto-epidural-start-stop-display')}>{intl.formatMessage({ id: 'partogram-engine.StopDateTime' })}</div>
              </Spacer>
              {epiduralStopArray.length ? this.sortEpiduralDetails(epiduralStopArray).map((result, index) => (
                <React.Fragment key={`${index.toString()}popup`}>
                  <Spacer
                    paddingLeft="large"
                    paddingRight="medium"
                    paddingBottom={index === epiduralStopArray.length - 1 ? 'large' : ''}
                  >
                    <Text fontSize={12} weight={400}>
                      {getFormattedDateTime(result.value, this.context.timezone, 'lll')}
                    </Text>
                  </Spacer>
                </React.Fragment>
              )) : (
                <Spacer
                  paddingLeft="large"
                  paddingRight="medium"
                >
                  {NO_RESULT}
                </Spacer>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
}

EpiduralDetaillsGridView.propTypes = propsTypes;
EpiduralDetaillsGridView.contextType = partogramUserContext;
export default injectIntl(EpiduralDetaillsGridView);
