import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import EpiduralPopupItem from '../../../../src/components/epidural/helpers/EpiduralPopupItem';

const isOpen = true;
const contextValue = {
  timezone: 'America/Chicago',
};
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

describe('show load popupitem', () => {
  it('should load popup item', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <EpiduralPopupItem isOpen={isOpen} selectedDataPoint={selectedDataPoint} dataMap={dataMap} />
      </OrionRequestorContext.Provider>,
    ).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('should show error in popup item', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <EpiduralPopupItem isOpen={false} selectedDataPoint={selectedDataPoint} dataMap={dataMap} />
      </OrionRequestorContext.Provider>,
    ).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
