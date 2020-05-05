import React from 'react';
import ContractionPopupItem from '../../../../src/components/contraction/helpers/ContractionPopupItem';


describe('Contraction Popup', () => {
  const selectedDataPoint = {
    key: 'uid_Intense',
    toggleSelection: jest.fn(),
    index: 0,
    config: {
      onClick: jest.fn(),
      isCritical: false,
      x: 'Thu Jan 09 2020 13:30:00 GMT+0530 (India Standard Time)',
      y: '6',
      weight: undefined,
      color: '#007CC3',
      label: { display: 'Intense', contractionFrequencyDisplay: 'Parto contraction freq', contractionIntensityDisplay: 'Parto contraction Intensity' },
      yAxis: 'y',
      key: 'uid_Intense',
    },
  };

  const dataMap = {
    '2020-01-09T06:00:00Z': [{
      contractionFrequency: '6',
      contractionIntensity: 'Moderate',
      nomenclatureID: '960970',
      frequencyUnit: null,
      resultDateTime: '2020-01-09T06:00:00Z',
      isModifiedFrequency: false,
      isModifiedIntensity: false,
    }],
    '2020-01-09T08:00:00Z': [{
      contractionFrequency: '10',
      contractionIntensity: 'Moderate',
      nomenclatureID: '960970',
      frequencyUnit: null,
      resultDateTime: '2020-01-09T06:15:00Z',
      isModifiedFrequency: false,
      isModifiedIntensity: false,
    }],
  };
  const dataMapNoIntensity = {
    '2020-01-09T06:00:00Z': [{
      contractionFrequency: '6',
      contractionIntensity: 'Moderate',
      nomenclatureID: '960970',
      frequencyUnit: null,
      resultDateTime: '2020-01-09T06:00:00Z',
      isModifiedFrequency: false,
      isModifiedIntensity: false,
    }],
    '2020-01-09T08:00:00Z': [{
      contractionFrequency: '2',
      contractionIntensity: null,
      nomenclatureID: null,
      frequencyUnit: null,
      resultDateTime: '2020-01-09T06:15:00Z',
      isModifiedFrequency: false,
      isModifiedIntensity: false,
    }],
  };
  it('should load popup Properly', () => {
    const wrapper = shallow(<ContractionPopupItem isOpen selectedDataPoint={selectedDataPoint} dataMap={dataMap} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should load popup Properly', () => {
    const wrapper = shallow(<ContractionPopupItem isOpen selectedDataPoint={selectedDataPoint} dataMap={dataMapNoIntensity} />);
    expect(wrapper).toMatchSnapshot();
  });
});
