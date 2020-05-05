import React from 'react';
import Popup from 'terra-popup';
import PartoPopup from '../../src/components/PartoPopup';

const isOpen = true;
const selectedDataPoint = {
  config: {
    color: '#78c346',
    isCritical: false,
    key: 'medication_uid_1',
    label: { display: 'Epidural Bolus, Anesthesia' },
    onClick: jest.fn(),
    shape: {
      options: { x: -8, y: -8, scale: 0.25 },
      path: { d: 'M24,0l14,24L24,48L10,24L24,0z' },
    },
    x: 'Fri Oct 11 2019 16:00:00 GMT+0530 (India Standard Time)',
  },
  index: 1,
  key: 'medication_uid_1',
  toggleSelection: jest.fn(),
};

const selectedDataPointContraction = {
  config: {
    color: '#78c346',
    isCritical: false,
    key: 'uid_1',
    label: { display: 'strong' },
    onClick: jest.fn(),
    x: 'Fri Oct 11 2019 16:00:00 GMT+0530 (India Standard Time)',
  },
  index: 1,
  key: 'uid_1',
  toggleSelection: jest.fn(),
};

const selectedDataPointEpidural = {
  config: {
    color: '#78c346',
    isCritical: false,
    key: 'medication_uid_1',
    label: { display: 'Epidural Bolus, Anesthesia' },
    onClick: jest.fn(),
    shape: {
      options: { x: -8, y: -8, scale: 0.25 },
      path: { d: 'M24,0l14,24L24,48L10,24L24,0z' },
    },
    x: 'Fri Oct 11 2019 16:00:00 GMT+0530 (India Standard Time)',
  },
  index: 0,
  key: 'medication_uid_1',
  toggleSelection: jest.fn(),
};

const dataMap = {
  '2019-10-11T08:30:00.000Z': [{
    event: 'Epidural Bolus, Patient', value: '2019-10-11T08:30:00.000Z', shape: 'M14,0h20v48H14V0', color: '#c985da',
  }],
  '2019-10-11T09:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T09:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  }],
  '2019-10-11T10:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T10:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  }],
  '2019-10-11T11:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T11:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  },
  {
    event: 'Epidural Bolus, Patient', value: '2019-10-11T11:30:00.000Z', shape: 'M14,0h20v48H14V0', color: '#c985da',
  }],
};

const contractionDataMap = {
  '2019-10-11T08:30:00.000Z': [{
    event: 'Epidural Bolus, Patient', value: '2019-10-11T08:30:00.000Z', shape: 'M14,0h20v48H14V0', color: '#c985da',
  }],
  '2019-10-11T09:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T09:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  }],
  '2019-10-11T10:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T10:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  }],
  '2019-10-11T11:30:00.000Z': [{
    event: 'Epidural Bolus, Anesthesia', value: '2019-10-11T11:30:00.000Z', shape: 'M24,0l14,24L24,48L10,24L24,0z', color: '#78c346',
  },
  {
    event: 'Epidural Bolus, Patient', value: '2019-10-11T11:30:00.000Z', shape: 'M14,0h20v48H14V0', color: '#c985da',
  }],
};

const graphId = 'epidural-graph';
const handleOnClose = jest.fn();


describe('load Popup', () => {
  it('should load popup with error', () => {
    const wrapper = shallow(<PartoPopup
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      graphId={graphId}
      dataMap={dataMap}
      selectedDataPoint={selectedDataPoint}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should load null if graph id is wrong', () => {
    const wrapper = shallow(
      <PartoPopup
        isOpen={isOpen}
        handleOnClose={handleOnClose}
        graphId="graph"
        dataMap={dataMap}
        selectedDataPoint={selectedDataPoint}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a Popup when a datapoint is selected', () => {
    const wrapper = shallow(<PartoPopup
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      graphId={graphId}
      dataMap={dataMap}
      selectedDataPoint={selectedDataPoint}
    />);
    expect(wrapper.find(Popup).props().onRequestClose).toBeDefined();
    expect(wrapper.find(Popup).props().targetRef).toBeDefined();
    expect(wrapper.find(Popup).props().contentAttachment).toEqual('top center');
    expect(wrapper.find(Popup).props().contentHeight).toEqual('auto');
    expect(wrapper.find(Popup).props().contentWidth).toEqual('auto');
    expect(wrapper.find(Popup).props().isArrowDisplayed).toEqual(true);
    expect(wrapper.find(Popup).props().isOpen).toEqual(true);
  });
  it('should render epidural popup properly', () => {
    const spyFunc = () => {
      const documentDataPoint = [
        { childNodes: [{}] }, { childNodes: [{}] }, { childNodes: [{}] }, { childNodes: [{}] },
      ];
      return documentDataPoint;
    };
    const wrapper = shallow(
      <PartoPopup
        isOpen={isOpen}
        handleOnClose={handleOnClose}
        graphId="epidural-graph"
        dataMap={dataMap}
        selectedDataPoint={selectedDataPoint}
      />,
    );
    Object.defineProperty(global.document, 'querySelectorAll', { value: spyFunc });
    wrapper.instance().handleBoundingRefEpidural();
    wrapper.instance().handTargetRefEpidural();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render epidural popup properly', () => {
    const wrapper = shallow(
      <PartoPopup
        isOpen={isOpen}
        handleOnClose={handleOnClose}
        graphId="epidural-graph"
        dataMap={dataMap}
        selectedDataPoint={selectedDataPointEpidural}
      />,
    );
    wrapper.instance().handleBoundingRefEpidural();
    wrapper.instance().handTargetRefEpidural();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render contraction popup properly', () => {
    const wrapper = shallow(
      <PartoPopup
        isOpen={isOpen}
        handleOnClose={handleOnClose}
        graphId="parto-contraction-graph"
        dataMap={contractionDataMap}
        selectedDataPoint={selectedDataPointContraction}
      />,
    );
    wrapper.instance().handleBoundingRefContraction();
    wrapper.instance().handTargetRefContraction();
    expect(wrapper).toMatchSnapshot();
  });
});
