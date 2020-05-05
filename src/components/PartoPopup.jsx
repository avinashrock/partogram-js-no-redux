import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import EpiduralPopupItem from './epidural/helper/EpiduralPopupItem';
import LaborCurvePopupItem from './labor-curve/LaborCurvePopupItem';
import FetalHeartRatePopupItem from './fetal-heart-rate/FetalHeartRatePopupItem';
import ContractionPopupItem from './contraction/helpers/ContractionPopupItem';

const propTypes = {
  // isOpen to check if popup open
  isOpen: PropTypes.bool,
  // function to handle the closer of popup on toggle
  handleOnClose: PropTypes.func,
  // selectedDataPoint having datapoint data
  selectedDataPoint: PropTypes.object,
  // if true the arrow for popup is displayed
  isArrowDisplayed: PropTypes.bool,
  // graph id
  graphId: PropTypes.string,
  // dataMap object holds multiple data charted on same date
  dataMap: PropTypes.object,
  timezone: PropTypes.string,
};

class PartoPopup extends Component {
  handleGraphDataPoints = () => {
    const {
      selectedDataPoint,
      graphId,
    } = this.props;
    // selecting particular data point from DOM
    const carbonDataGroup = selectedDataPoint.key.includes('baseline')
      ? `.carbon-data-points-group .carbon-point[aria-disabled="false"][aria-describedby="${selectedDataPoint.key}"]`
      : `.carbon-data-pairs-group svg[aria-describedby="${selectedDataPoint.key}"]`;
    const documentDataPoint = document.querySelectorAll(`.${graphId} ${carbonDataGroup}`);
    return documentDataPoint[selectedDataPoint.index].childNodes[0];
  }

  handleBoundingRefFhr = () => {
    const {
      graphId,
    } = this.props;
    const graphDOM = document.querySelector(`.${graphId}`);
    return graphDOM;
  }

  handleBoundingRefEpidural = () => {
    const {
      graphId,
    } = this.props;
    const graphDOM = document.querySelector(`.parto-${graphId}`);
    return graphDOM;
  }

  handTargetRefEpidural = () => {
    const {
      selectedDataPoint,
      graphId,
    } = this.props;
    // selecting particular data point from DOM
    const dataPointDOMRef = document.querySelectorAll(`.parto-${graphId} .carbon-data-points-group svg[aria-describedby="${selectedDataPoint.key}"][aria-hidden="false"]`);
    return dataPointDOMRef[selectedDataPoint.index].childNodes[0];
  }

  handleGraphDataPointsLabor = () => {
    const {
      selectedDataPoint,
      graphId,
    } = this.props;
    let dataPointNode = null;
    if (selectedDataPoint.key.includes('fetal')) {
      dataPointNode = document.querySelectorAll(`.labor-curve-fetal-graph-style svg .carbon-point[aria-describedby=${selectedDataPoint.key}]`)[selectedDataPoint.index].firstChild;
    } else {
      dataPointNode = document.querySelectorAll(`.${graphId} svg .carbon-point[aria-describedby=${selectedDataPoint.key}]`)[selectedDataPoint.index].firstChild;
    }
    return dataPointNode;
  }

  handleBoundingRefLabor = () => {
    const {
      graphId,
    } = this.props;
    const graphDOM = document.querySelector(`.${graphId}`);
    return graphDOM;
  }

  handleBoundingRefContraction = () => {
    const {
      graphId,
    } = this.props;
    const graphDOM = document.querySelector(`.${graphId}`);
    return graphDOM;
  }

  handTargetRefContraction = () => {
    const {
      selectedDataPoint,
      graphId,
    } = this.props;
    // selecting particular data point from DOM
    const dataPointDOMRef = document.querySelectorAll(`.${graphId} .carbon-data-points-group circle[aria-describedby="${selectedDataPoint.key}"]`);
    return dataPointDOMRef[selectedDataPoint.index];
  }


  render() {
    const {
      handleOnClose,
      isOpen,
      selectedDataPoint,
      graphId,
      dataMap,
    } = this.props;

    let popupContent = null;

    if (graphId.includes('fhr')) {
      popupContent = (
        <Popup
          isArrowDisplayed
          isOpen={isOpen}
          contentHeight="auto"
          contentWidth="auto"
          boundingRef={this.boundingRefFhr}
          targetRef={this.handleGraphDataPoints}
          onRequestClose={handleOnClose}
        >
          <FetalHeartRatePopupItem isOpen={isOpen} selectedDataPoint={selectedDataPoint} dataMap={dataMap} />
        </Popup>
      );
    } else if (graphId.includes('labor')) {
      popupContent = (
        <Popup
          attachmentBehavior="auto"
          contentAttachment="top center"
          isArrowDisplayed
          isOpen={isOpen}
          contentHeight="auto"
          contentWidth="auto"
          boundingRef={this.handleBoundingRefLabor}
          targetRef={this.handleGraphDataPointsLabor}
          onRequestClose={handleOnClose}
        >
          <LaborCurvePopupItem isOpen={isOpen} selectedDataPoint={selectedDataPoint} dataMap={dataMap} />
        </Popup>
      );
    } else if (graphId.includes('epidural')) {
      popupContent = (
        <Popup
          attachmentBehavior="auto"
          contentAttachment="top center"
          isArrowDisplayed
          isOpen={isOpen}
          contentHeight="auto"
          contentWidth="auto"
          boundingRef={this.handleBoundingRefEpidural}
          targetRef={this.handTargetRefEpidural}
          onRequestClose={handleOnClose}
        >
          <EpiduralPopupItem isOpen={isOpen} selectedDataPoint={selectedDataPoint} dataMap={dataMap} />
        </Popup>
      );
    } else if (graphId.includes('contraction')) {
      const {
        timezone,
      } = this.props;
      popupContent = (
        <Popup
          attachmentBehavior="auto"
          contentAttachment="top center"
          isArrowDisplayed
          isOpen={isOpen}
          contentHeight="auto"
          contentWidth="auto"
          boundingRef={this.handleBoundingRefContraction}
          targetRef={this.handTargetRefContraction}
          onRequestClose={handleOnClose}
        >
          <ContractionPopupItem isOpen={isOpen} selectedDataPoint={selectedDataPoint} dataMap={dataMap} timezone={timezone} />
        </Popup>
      );
    }
    return popupContent;
  }
}
PartoPopup.propTypes = propTypes;
export default PartoPopup;
