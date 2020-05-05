import React, { Component } from 'react';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import EpiduralDetailsGridView from './EpiduralDetailsGridView';

const propTypes = {
  sortedEpiduralStartDetails: PropTypes.array,
  sortedEpiduralDiscontinuedArray: PropTypes.array,
  intl: intlShape.isRequired,
};

class EpiduralPopup extends Component {
    displayEpiduralPopupDetails = (epiduralDetails, sortedEpiduralDiscontinuedArray, intl) => {
      let popupContent;
      if (epiduralDetails.length > 1 || sortedEpiduralDiscontinuedArray.length > 1) {
        popupContent = (
          <>
            <Spacer paddingTop="medium" paddingBottom="medium" paddingLeft="large" paddingRight="medium">
              <Text fontSize={12} weight={700}>
                {`"${intl.formatMessage({ id: 'partogram-engine.multiple-epidural' })}"`}
              </Text>
            </Spacer>
            <EpiduralDetailsGridView
              epiduralStartArray={epiduralDetails}
              epiduralStopArray={sortedEpiduralDiscontinuedArray}
              intl={intl}
            />
          </>
        );
      } else if (epiduralDetails.length || sortedEpiduralDiscontinuedArray.length) {
        popupContent = (
          <EpiduralDetailsGridView
            epiduralStartArray={epiduralDetails}
            epiduralStopArray={sortedEpiduralDiscontinuedArray}
            intl={intl}
          />
        );
      }
      return popupContent;
    }

    render() {
      const {
        sortedEpiduralStartDetails, sortedEpiduralDiscontinuedArray, intl,
      } = this.props;
      const content = this.displayEpiduralPopupDetails(sortedEpiduralStartDetails, sortedEpiduralDiscontinuedArray, intl);
      return (content);
    }
}

EpiduralPopup.propTypes = propTypes;
export default injectIntl(EpiduralPopup);
