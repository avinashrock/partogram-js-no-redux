import React, { Component } from 'react';
import Popup from 'terra-popup';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import RuptureOfMembranePopup from './RuptureOfMembranePopup';
import PregnancyDescriptorPopup from './PregnancyDescriptorPopup';
import LaborOnsetPopup from './LaborOnsetPopup';
import MeowsPopup from './MeowsPopup';
import GravidaParityPopup from './GravidaParityPopup';
import EpiduralPopup from './EpiduralPopup';

const propTypes = {
  // popup attachment behaviour
  attachmentBehavior: PropTypes.string,
  // popup attachment position
  contentAttachment: PropTypes.string,
  // popup's content width
  contentWidth: PropTypes.string,
  // boolean specifying if the arrow will be displayed when the popup opens up.
  isArrowDisplayed: PropTypes.bool,
  // type indicates which component exactly needs to render popup
  type: PropTypes.string,
  // boolean specifying if the popup is open or closed.
  isPopupOpen: PropTypes.bool,
  // rupture of membrane information for a particular patient.
  rom: PropTypes.string,
  // additional fetal details, which are client configurable.
  additionalFetalInformation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      unit: PropTypes.string,
      documentedDateTime: PropTypes.string,
    }),
  ),
  // pregnancy details containing all the historical pregnancy information of a patient.
  pregnancyDetails: PropTypes.shape({
    history: PropTypes.shape({
      history: PropTypes.shape({
        gravidaCount: PropTypes.number,
        paraCount: PropTypes.number,
        paraFullTermCount: PropTypes.number,
        paraPrematureCount: PropTypes.number,
        abortionsCount: PropTypes.number,
        livingCount: PropTypes.number,
        ectopicCount: PropTypes.number,
        spontaneousAbortionCount: PropTypes.number,
        inducedAbortionCount: PropTypes.number,
        multipleBirth: PropTypes.number,
        isPreviuosPregnancyUnknown: PropTypes.bool,
      }),
    }),
  }),
  // labor details containing the labor start date and time for a particular patient.
  laborDetails: PropTypes.shape({
    laborStartDateTime: PropTypes.string,
  }),
  // maternal details containing the meow attributes, which are client configurable.
  maternalDetails: PropTypes.shape({
    meowsAttributes: PropTypes.array,
  }),
  // target button element's instance when it is clicked.
  targetRef: PropTypes.func,
  onRequestClose: PropTypes.func,
  durationLimitExceeded: PropTypes.bool,
  sortedEpiduralDiscontinuedArray: PropTypes.array,
  sortedEpiduralArray: PropTypes.array,
  intl: intlShape.isRequired,
};

const defaultProps = {
  attachmentBehavior: 'auto',
  contentAttachment: 'middle left',
  isArrowDisplayed: true,
};

class OverviewPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.popupContent = null;
  }

  componentDidMount() {
    this.popupContent = this.getPopupData(this.props.type, this.props.additionalFetalInformation,
      this.props.rom, this.props.durationLimitExceeded,
      this.props.intl, this.props.pregnancyDetails,
      this.props.laborDetails, this.props.maternalDetails,
      this.props.sortedEpiduralArray, this.props.sortedEpiduralDiscontinuedArray);
  }

  /**
 * A helper function to which returns the duration in hours and minutes
 * @param  {String} type - It is a string values which defines which popup content needs to be rendered.
 * @param {Array} additionalFetalInformation - contains the necessary properties. Refer to the prop types for structure.
 * @param {String} rom - It is either no result or a counter value.
 * @param {boolean} durationLimitExceeded - It is the value which is the deciding factor to show the warning icon or not.
 * @param {Object} intl - used to format the message based on the current locale.
 * @param {Object} pregnancyDetails - Contains all the history details , refer prop types for the structure.
 * @param {Object} laborDetails - Contains the labor start date and time.
 * @param {Object} maternalDetails - contains the necessary properties. Refer to the prop types for structure.
 * @param {Array} sortedEpiduralArray - Contains all the sorted epidural start values.
 * @param {Array} sortedEpiduralDiscontinuedArray - Contains all the sorted epidurall discontinued values.
 * @return {Component} - A React component which receives all the props renders the popup content.
 */
  getPopupData = (type, additionalFetalInformation, rom,
    durationLimitExceeded, intl, pregnancyDetails,
    laborDetails, maternalDetails, sortedEpiduralArray, sortedEpiduralDiscontinuedArray) => {
    let popupContent;
    if (type === 'rom') {
      popupContent = (
        <RuptureOfMembranePopup
          additionalFetalInformation={additionalFetalInformation}
          rom={rom}
          durationLimitExceeded={durationLimitExceeded}
          intl={intl}
        />
      );
    } else if (type === 'gravida-para') {
      popupContent = <GravidaParityPopup pregnancyDetails={pregnancyDetails} intl={intl} />;
    } else if (type === 'preg-descriptor') {
      popupContent = <PregnancyDescriptorPopup pregnancyDetails={pregnancyDetails} intl={intl} />;
    } else if (type === 'labor-onset') {
      popupContent = <LaborOnsetPopup laborDetails={laborDetails} intl={intl} />;
    } else if (type === 'meows') {
      popupContent = <MeowsPopup maternalDetails={maternalDetails} />;
    } else if (type === 'epidural') {
      popupContent = (
        <EpiduralPopup
          sortedEpiduralStartDetails={sortedEpiduralArray}
          sortedEpiduralDiscontinuedArray={sortedEpiduralDiscontinuedArray}
          intl={intl}
        />
      );
    }
    return popupContent;
  }

  render() {
    const {
      attachmentBehavior, contentAttachment, isArrowDisplayed,
      isPopupOpen, targetRef, onRequestClose, contentWidth,
    } = this.props;
    return (
      <Popup
        attachmentBehavior={attachmentBehavior}
        contentAttachment={contentAttachment}
        isArrowDisplayed={isArrowDisplayed}
        contentHeight="auto"
        contentWidth={contentWidth}
        isOpen={isPopupOpen}
        targetRef={targetRef}
        onRequestClose={onRequestClose}
      >
        <div>{this.popupContent}</div>
      </Popup>
    );
  }
}

OverviewPopup.defaultProps = defaultProps;
OverviewPopup.propTypes = propTypes;
export default OverviewPopup;
