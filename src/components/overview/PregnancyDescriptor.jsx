import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Button from 'terra-button';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import Spacer from 'terra-spacer';
import OverviewPopup from './OverviewPopup';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // pregnancyDetails for a specific encounterId with historical information.
  pregnancyDetails: PropTypes.shape({
    history: PropTypes.shape({
      hadPreviousCSection: PropTypes.boolean,
      isMultiPara: PropTypes.boolean,
      isNulliPara: PropTypes.boolean,
      isPreviuosPregnancyUnknown: PropTypes.boolean,
    }),
  }),
  intl: intlShape.isRequired,
};

/* The component displays the Pregnancy Descriptor status as multipara , nullipara or
Previous-C Section along with an info icon only if there is an unknown pregnancy outcome */
class PregnancyDescriptor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  setButtonNode = (node) => {
    this.parentNode = node;
  }

  getButtonNode = () => this.parentNode;

  // returns the pregnancy descriptor of the patient as multipara, nulipara or previousCSection based on whichever is true.
  getPregDescritorDetails = (pregnancyDetails, intl) => {
    let paraInfoText;
    let content;
    if (pregnancyDetails.history !== null) {
      if (pregnancyDetails.history.isMultiPara) {
        paraInfoText = `${intl.formatMessage({ id: 'partogram-engine.multipara' })}`;
        // if the patient has a previous unknown pregnancy.
        if (pregnancyDetails.history.isPreviuosPregnancyUnknown) {
          content = (
            <>
              <Spacer paddingRight="small-1" isInlineBlock><IconWarning /></Spacer>
              {paraInfoText}
            </>
          );
        } else {
          content = paraInfoText;
        }
      } else if (pregnancyDetails.history.isNullipara) {
        paraInfoText = `${intl.formatMessage({ id: 'partogram-engine.nullipara' })}`;
        // if the patient has a previous unknown pregnancy.
        if (pregnancyDetails.history.isPreviuosPregnancyUnknown) {
          content = (
            <>
              <Spacer paddingRight="small-1" isInlineBlock><IconWarning /></Spacer>
              {paraInfoText}
            </>
          );
        } else {
          content = paraInfoText;
        }
      } else if (pregnancyDetails.history.hadPreviousCSection) {
        paraInfoText = `${intl.formatMessage({ id: 'partogram-engine.prev_C_Section' })}`;
        // if the patient has a previous unknown pregnancy.
        if (pregnancyDetails.history.isPreviuosPregnancyUnknown) {
          content = (
            <>
              <Spacer paddingRight="small-1" isInlineBlock><IconWarning /></Spacer>
              {paraInfoText}
            </>
          );
        } else {
          content = paraInfoText;
        }
      }
    } else {
      content = NO_RESULT;
    }
    return content;
  }

  handleButtonClick() {
    this.setState({ isPopupOpen: true });
  }

  handleRequestClose() {
    this.setState({ isPopupOpen: false });
  }

  render() {
    const {
      pregnancyDetails, intl,
    } = this.props;
    const content = this.getPregDescritorDetails(pregnancyDetails, intl);
    if (content === NO_RESULT) {
      return (content);
    } if (pregnancyDetails.history.isPreviuosPregnancyUnknown) {
      return (
        <>
          { content }
          <Button
            text="none"
            icon={<IconInformation />}
            isIconOnly
            isCompact
            variant="utility"
            onClick={this.handleButtonClick}
            refCallback={this.setButtonNode}
          />
          <OverviewPopup
            contentWidth="240"
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            isPopupOpen={this.state.isPopupOpen}
            pregnancyDetails={pregnancyDetails}
            type="preg-descriptor"
            intl={intl}
          />
        </>
      );
    }
    return (
      content
    );
  }
}

PregnancyDescriptor.propTypes = propTypes;
export default injectIntl(PregnancyDescriptor);
