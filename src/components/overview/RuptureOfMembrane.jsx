import React from 'react';
import Spacer from 'terra-spacer';
import PropTypes from 'prop-types';
import Text from 'terra-text';
import Grid from 'terra-grid';
import classNames from 'classnames/bind';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import Button from 'terra-button';
import { injectIntl, intlShape } from 'react-intl';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import OverviewPopup from './OverviewPopup';
import {
  NO_RESULT, ROM_RANGE, ROM_WARNING, OVERVIEW_COMPONENT_ID,
} from '../../constants';
import styles from '../../application/PartoStyle.scss';
import { validateBedrockDetails } from '../../application/helpers/BedrockPreference';

const bindStyleToClassName = classNames.bind(styles);

const propTypes = {
  intl: intlShape.isRequired,
  // The array consists of rupture of membrane information for each baby.
  romData: PropTypes.array,
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
};
/* The component displays the counter value since the rupture happens  and an info icon which shows the
rom date and time and Additional Fetal Information for each baby delivered */
class RuptureOfMembrane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: [],
    };
    this.parentNode = [];
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

   setButtonNode = (node, index) => {
     this.parentNode[index] = node;
   }

  getButtonNode = (index) => this.parentNode[index]

  handleRequestClose = (event, index) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const popupCloseArray = this.state.isPopupOpen;
    popupCloseArray[index] = false;
    this.setState({ isPopupOpen: popupCloseArray });
  }

  handleButtonClick(event, index) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const popupOpenArray = this.state.isPopupOpen;
    popupOpenArray[index] = true;
    this.setState({ isPopupOpen: popupOpenArray });
  }

  renderRomData = (romData, bedrockPreferenceResponse, intl) => {
    const content = romData.map((data, index) => {
      let label;
      let displayRomValue;
      let warningIconElement;
      const durationLimitExceeded = data.duration
      > parseInt(validateBedrockDetails(bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, ROM_RANGE).display, 10);
      if (data.romLabel) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.romLabel}</div>;
      } else if (data.value === NO_RESULT) {
        label = <div className={bindStyleToClassName('parto-text-align-right')}>{data.label}</div>;
      } else {
        warningIconElement = durationLimitExceeded
         && parseInt(validateBedrockDetails(bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, ROM_WARNING).display, 10)
          ? <Spacer paddingRight="small" isInlineBlock><IconWarning /></Spacer> : '';
        label = <div className={bindStyleToClassName('parto-text-align-right')} style={{ fontStyle: 'italic', fontSize: '13px' }}>{data.babyLabel}</div>;
      }
      if (data.babyValue) {
        displayRomValue = (
          <div>
            <Text style={{ align: 'left' }} weight={400} fontSize={14}>
              {warningIconElement}
              {data.babyValue}
            </Text>
            <Button
              text="none"
              icon={<IconInformation />}
              isIconOnly
              isCompact
              variant="utility"
              onClick={(event) => this.handleButtonClick(event, index)}
              refCallback={(event) => this.setButtonNode(event, index)}
            />
            <OverviewPopup
              targetRef={(event) => this.getButtonNode(index, event)}
              onRequestClose={(event) => this.handleRequestClose(event, index)}
              isPopupOpen={this.state.isPopupOpen[index]}
              type="rom"
              additionalFetalInformation={data.additionalFetalInformation}
              bedrockPreferenceResponse={bedrockPreferenceResponse}
              rom={data.ruptureOfMembraneDateTime}
              durationLimitExceeded={data.duration}
              intl={intl}
            />
          </div>
        );
      } else {
        displayRomValue = data.value ? NO_RESULT : <div />;
      }
      return (
        <>
          <Grid.Column tiny={6} small={6} medium={6} large={6} className={bindStyleToClassName('parto-column-divider')}>
            <Spacer marginRight="medium" paddingBottom={romData.length - 1 === index ? 'large' : ''}>
              <div className={bindStyleToClassName('parto-text-align-right')}>{label}</div>
            </Spacer>
          </Grid.Column>
          <Grid.Column tiny={6} small={6} medium={6} large={6}>
            {displayRomValue}
          </Grid.Column>
        </>
      );
    });
    return content;
  }

  render() {
    const {
      intl, romData, bedrockPreferenceResponse,
    } = this.props;
    const content = this.renderRomData(romData, bedrockPreferenceResponse, intl);
    return content;
  }
}

RuptureOfMembrane.propTypes = propTypes;
export default injectIntl(RuptureOfMembrane);
