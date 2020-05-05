import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Button from 'terra-button';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import OverviewPopup from './OverviewPopup';
import { NO_RESULT } from '../../constants';

const propTypes = {
  // maternalDetails for a specific encounterId specifying the meow details.
  maternalDetails: PropTypes.shape({
    meowsScore: PropTypes.number,
    meowsAttributes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
        unit: PropTypes.string,
      }),
    ),
  }),
};

class Meows extends React.Component {
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

/**
 * A helper function to which returns the meows score.
 * @param  {Object} maternalDetails - contains the necessary properties. Refer to the prop types for structure.
 * @return {String}
 */

getMeows = (maternalDetails) => {
  let meowScore;
  if (maternalDetails !== null && maternalDetails.meowsScore !== null) {
    meowScore = maternalDetails.meowsScore;
    return meowScore;
  }
  meowScore = NO_RESULT;
  return meowScore;
}

handleButtonClick() {
  this.setState({ isPopupOpen: true });
}

handleRequestClose() {
  this.setState({ isPopupOpen: false });
}

render() {
  const {
    maternalDetails,
  } = this.props;
  const content = this.getMeows(maternalDetails);
  if (maternalDetails && maternalDetails.meowsAttributes.length) {
    return (
      <>
        <OverviewPopup
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isPopupOpen={this.state.isPopupOpen}
          maternalDetails={maternalDetails}
          type="meows"
        />
        <div>
          {content}
          <Button
            text="none"
            icon={<IconInformation />}
            isIconOnly
            isCompact
            variant="utility"
            onClick={this.handleButtonClick}
            refCallback={this.setButtonNode}
          />
        </div>
      </>
    );
  }
  return (
    content
  );
}
}

Meows.propTypes = propTypes;
export default injectIntl(Meows);
