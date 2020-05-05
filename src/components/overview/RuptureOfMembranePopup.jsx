import React from 'react';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import Grid from 'terra-grid';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import moment from 'moment-timezone';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import PropTypes from 'prop-types';
import Normalcy from './Normalcy';
import {
  NO_RESULT, OVERVIEW_COMPONENT_ID, ROM_WARNING, ROM_RANGE,
} from '../../constants';
import partogramUserContext from '../../partogramUserContext';
import { returnClassColor } from './overviewHelper';
import { getFormattedDateTime } from '../../application/helpers/FormatDateTimeValue';
import { validateBedrockDetails } from '../../application/helpers/BedrockPreference';
import styles from '../../application/PartoStyle.scss';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  // rupture of membarane
  rom: PropTypes.string,
  // additional details , client configurable
  additionalFetalInformation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      unit: PropTypes.string,
      documentedDateTime: PropTypes.string,
    }),
  ),
  durationLimitExceeded: PropTypes.bool,
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
  intl: intlShape.isRequired,
};

class RuptureOfMembranePopup extends React.Component {
getAdditionalFetalInformation = (additionalFetalInformation, intl) => {
  let additionalContent;
  if (additionalFetalInformation && additionalFetalInformation.length) {
    let additionalBabyInfoHeaderSection;
    additionalContent = additionalFetalInformation.map(
      (result, index) => {
        let criticalityIconElement = null;
        additionalBabyInfoHeaderSection = index === 0 ? (
          <div style={{ backgroundColor: '#d3d3d3', align: 'center' }}>
            <Spacer paddingTop="medium" paddingBottom="medium" paddingLeft="large" paddingRight="medium">
              <Text fontSize={14} weight={700}>
                {intl.formatMessage({ id: 'partogram-engine.additonalBabyInfo' })}
              </Text>
            </Spacer>
          </div>
        ) : null;
        let colorClass;
        if (result.criticality) {
          colorClass = returnClassColor(result.criticality);
          criticalityIconElement = (<Normalcy normalcy={result.criticality} />);
        }
        let popupDispalyValue;
        if (result.value && result.unit) {
          popupDispalyValue = `${result.value} ${result.unit}`;
        } else if (result.value) {
          popupDispalyValue = result.value;
        } else {
          popupDispalyValue = NO_RESULT;
        }
        if (popupDispalyValue !== NO_RESULT) {
          return (
            <>
              {additionalBabyInfoHeaderSection}
              <div key={index.toString()}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Spacer paddingTop="medium" paddingLeft="large">
                        <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
                          {result.name}
                        </Text>
                      </Spacer>
                      <Spacer paddingLeft="large">
                        <Text fontSize={14} weight={400} colorClass={bindStyleToClassName(colorClass)}>
                          {criticalityIconElement}
                          {popupDispalyValue}
                        </Text>
                      </Spacer>
                      <Spacer paddingLeft="large" paddingBottom="medium" paddingRight="medium">
                        <Text fontSize={14} weight={400} colorClass={bindStyleToClassName(['info'])}>
                          {getFormattedDateTime(result.documentedDateTime, this.context.timezone, 'lll')}
                        </Text>
                      </Spacer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </>
          );
        }
        return '';
      },
    );
  }
  return additionalContent;
}

render() {
  const {
    additionalFetalInformation, rom, durationLimitExceeded, bedrockPreferenceResponse, intl,
  } = this.props;
  let popupContent;
  let additionalContent = '';
  const warningMessage = intl.formatMessage({ id: 'partogram-engine.duration-exceeded' });
  const warningDuration = parseInt(validateBedrockDetails(bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, ROM_RANGE).display, 10);
  const durationLimit = durationLimitExceeded
  > warningDuration;
  const warningIconElement = durationLimit && parseInt(validateBedrockDetails(bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, ROM_WARNING).display, 10) ? (
    <Spacer paddingTop="medium" paddingLeft="large" paddingRight="large">
      <Text fontSize={12} weight={400}>
        <span style={{ paddingRight: '3px' }}><IconWarning /></span>
        {warningMessage.replace('12', warningDuration)}
      </Text>
    </Spacer>
  ) : '';
  if (rom && rom === NO_RESULT) {
    if (additionalFetalInformation && additionalFetalInformation.length) {
      additionalContent = this.getAdditionalFetalInformation(additionalFetalInformation, intl);
      popupContent = (
        <>
          <div>
            <Spacer paddingTop="medium" paddingBottom="medium" paddingLeft="large" paddingRight="large">
              <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
                {`${intl.formatMessage({ id: 'partogram-engine.romStart' })} ${rom}`}
              </Text>
            </Spacer>
          </div>
          <div>
            {additionalContent}
          </div>
        </>
      );
    } else {
      popupContent = (
        <div>
          <Spacer paddingTop="medium" paddingBottom="medium" paddingLeft="large" paddingRight="large">
            <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
              {`${intl.formatMessage({ id: 'partogram-engine.romStart' })} ${rom}`}
            </Text>
          </Spacer>
        </div>
      );
    }
  } else if (rom && moment(rom, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid()) {
    if (additionalFetalInformation && additionalFetalInformation.length) {
      additionalContent = this.getAdditionalFetalInformation(additionalFetalInformation, intl);
      popupContent = (
        <>
          {warningIconElement}
          <div>
            <Spacer paddingTop="medium" paddingLeft="large">
              <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
                {intl.formatMessage({ id: 'partogram-engine.romStart' })}
              </Text>
            </Spacer>
            <Spacer paddingLeft="large" paddingRight="large" paddingBottom="medium">
              <Text fontSize={14} weight={400}>
                {getFormattedDateTime(rom, this.context.timezone, 'lll')}
              </Text>
            </Spacer>
          </div>
          <div>
            {additionalContent}
          </div>
        </>
      );
    } else {
      popupContent = (
        <>
          {warningIconElement}
          <div>
            <Spacer paddingTop="medium" paddingLeft="large">
              <Text fontSize={12} weight={400} colorClass={bindStyleToClassName(['info'])}>
                {intl.formatMessage({ id: 'partogram-engine.romStart' })}
              </Text>
            </Spacer>
            <Spacer paddingLeft="large" paddingBottom="medium" paddingRight="large">
              <Text fontSize={14} weight={400}>
                {getFormattedDateTime(rom, this.context.timezone, 'lll')}
              </Text>
            </Spacer>
          </div>
        </>
      );
    }
  }
  return (<div>{popupContent}</div>);
}
}

RuptureOfMembranePopup.contextType = partogramUserContext;
RuptureOfMembranePopup.propTypes = propTypes;
export default injectIntl(RuptureOfMembranePopup);
