import React from 'react';
import PropTypes from 'prop-types';
import LabelValueView from 'terra-clinical-label-value-view';
import DetailView from 'terra-clinical-detail-view';
import Spacer from 'terra-spacer';
import { injectIntl, intlShape } from 'react-intl';
import { ColumnDataObject } from './initialization-components/ColumnDataObject';

const propTypes = {
  // pregnancyDetails for a specific encounterId with the history information.
  pregnancyDetails: PropTypes.shape({
    history: PropTypes.shape({
      // Gravida count describes the total number of confirmed pregnancies that a woman has had, regardless of the outcome
      gravidaCount: PropTypes.number,
      /* total number of pregnancies that a woman has carried past 20 weeks of pregnancy.
      This number includes both live births and pregnancy losses after 20 weeks */
      paraFullTermCount: PropTypes.number,
      // Premature count, especially those born very early.
      paraPrematureCount: PropTypes.number,
      // Total number of abortions.
      abortionsCount: PropTypes.number,
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

class GravidaParityPopup extends React.Component {
  handlePopupDetails= (gravidaDesc, gravidaValues) => {
    const popupContent = [];
    const totalPopupDetailsCount = 9;
    for (let index = 0; index < totalPopupDetailsCount; index += 1) {
      popupContent.push(ColumnDataObject(gravidaDesc[index], gravidaValues[index]));
    }
    return popupContent;
  }

  // Displays all the historical information within the popup in a clinical fashion.
  getPopupContent = (pregnancyDetails, intl) => {
    let gravidaValues;
    let popupData;
    // stores all the internationalized strings for all the respective labels.
    const gravidaDesc = [intl.formatMessage({ id: 'partogram-engine.gravida' }),
      intl.formatMessage({ id: 'partogram-engine.para-full-term' }),
      intl.formatMessage({ id: 'partogram-engine.para-pre-term' }),
      intl.formatMessage({ id: 'partogram-engine.abortions' }),
      intl.formatMessage({ id: 'partogram-engine.living' }),
      intl.formatMessage({ id: 'partogram-engine.ectopic' }),
      intl.formatMessage({ id: 'partogram-engine.spontaneous-abortion' }),
      intl.formatMessage({ id: 'partogram-engine.induced-abortion' }),
      intl.formatMessage({ id: 'partogram-engine.multiple-birth-preg' })];
    if (pregnancyDetails && pregnancyDetails.history) {
      const { gravidaCount } = pregnancyDetails.history;
      const { paraFullTermCount } = pregnancyDetails.history;
      const { paraPrematureCount } = pregnancyDetails.history;
      const { abortionsCount } = pregnancyDetails.history;
      const { livingCount } = pregnancyDetails.history;
      const { ectopicCount } = pregnancyDetails.history;
      const { multipleBirth } = pregnancyDetails.history;
      const { inducedAbortionCount } = pregnancyDetails.history;
      const { spontaneousAbortionCount } = pregnancyDetails.history;
      gravidaValues = [gravidaCount, paraFullTermCount, paraPrematureCount, abortionsCount, livingCount,
        ectopicCount, spontaneousAbortionCount, inducedAbortionCount, multipleBirth];
    }
    if (gravidaValues) {
      const details = this.handlePopupDetails(gravidaDesc, gravidaValues);
      const maxWidth = details.length > 1 ? '50%' : '100%';
      popupData = (
        <DetailView.DetailList>
          { this.handlePopupDetails(gravidaDesc, gravidaValues).map((result, index) => (
            <DetailView.DetailListItem
              key={gravidaDesc[index]}
              item={(
                <Spacer paddingLeft="medium">
                  <LabelValueView
                    label={result.label}
                    textValue={result.value.toString()}
                  />
                </Spacer>
              )}
              style={{
                maxWidth, minWidth: '50%',
              }}
            />

          ))}
        </DetailView.DetailList>
      );
    }
    return popupData;
  }

  render() {
    const {
      pregnancyDetails, intl,
    } = this.props;
    const popupContent = this.getPopupContent(pregnancyDetails, intl);
    return (popupContent);
  }
}

GravidaParityPopup.propTypes = propTypes;
export default injectIntl(GravidaParityPopup);
