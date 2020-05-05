import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Button from 'terra-button';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import OverviewPopup from './OverviewPopup';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // pregnancyDetails for a specific encounterId with the history information.
  pregnancyDetails: PropTypes.shape({
    history: PropTypes.shape({
      // Gravida count describes the total number of confirmed pregnancies that a woman has had, regardless of the outcome
      gravidaCount: PropTypes.number,
      paraCount: PropTypes.number,
      /* total number of pregnancies that a woman has carried past 20 weeks of pregnancy.
      This number includes both live births and pregnancy losses after 20 weeks */
      paraFullTermCount: PropTypes.number,
      // Premature count, especially those born very early.
      paraPrematureCount: PropTypes.number,
      // Total number of abortions.
      abortionsCount: PropTypes.number,
      livingCount: PropTypes.number,
      ectopicCount: PropTypes.number,
      // pregnancy that ends spontaneously before 20 weeks of gestation
      spontaneousAbortionCount: PropTypes.number,
      // abortion performed by the pregnant woman herself
      inducedAbortionCount: PropTypes.number,
      // A multiple birth is the culmination of one multiple pregnancy, wherein the mother delivers two or more offspring
      multipleBirth: PropTypes.number,
    }),
  }),
  intl: intlShape.isRequired,
};

/* The component displays the gravida and parity information along with the information icon ,
upon clicking on it , that shows all the historical pregnancy information of a particular patient
*/
class GravidaParityInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  // sets the target refernce for the button element.
  setButtonNode = (node) => {
    this.parentNode = node;
  }

  // fetches the refernce for the button element.
  getButtonNode = () => this.parentNode;

  // displays the gravida and parity information for the patient , which is historical pregnancy data.
  getGravidaParaInfo = (pregnancyDetails, intl) => {
    let content;
    if (pregnancyDetails.history !== null) {
      const { gravidaCount } = pregnancyDetails.history;
      const { paraCount } = pregnancyDetails.history;
      const { paraFullTermCount } = pregnancyDetails.history;
      const { paraPrematureCount } = pregnancyDetails.history;
      const { abortionsCount } = pregnancyDetails.history;
      const { livingCount } = pregnancyDetails.history;
      const gravidaDisplay = `${intl.formatMessage({ id: 'partogram-engine.G' }) + gravidaCount}, ${
        intl.formatMessage({ id: 'partogram-engine.parity-abbr' })
      }${paraCount} (${paraFullTermCount}, ${paraPrematureCount}, ${abortionsCount}, ${livingCount})`;
      content = gravidaDisplay;
    } else {
      content = NO_RESULT;
    }
    return content;
  }

  // updtates the state when the button is clicked
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
    const content = this.getGravidaParaInfo(pregnancyDetails, intl);
    if (content === NO_RESULT) {
      return (
        content
      );
    }
    return (
      <>
        <div>
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
            contentWidth="320"
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            isPopupOpen={this.state.isPopupOpen}
            pregnancyDetails={pregnancyDetails}
            type="gravida-para"
            intl={intl}
          />
        </div>
      </>
    );
  }
}

GravidaParityInformation.propTypes = propTypes;
export default injectIntl(GravidaParityInformation);
