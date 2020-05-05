import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import LaborCurvePopupItem from '../../../../src/components/labor-curve/LaborCurvePopupItem';

loadTranslation('../../../../translations/en-US.json');

describe('Labor Curve Popup Items', () => {
  it('Component should render cervix Dilation snapshot for pop element with data', () => {
    const mockSelectedDataPoint = {
      key: 'labor_curve_uid_1',
      toggleSelection: jest.fn(),
      index: 1,
      config: {
        x: '2020-03-11T03:35:00.000Z',
      },
    };
    const dataMap = new Map();
    const index = new Date('2020-03-11T03:35:00.000Z').toISOString();
    if (typeof dataMap[index] === 'undefined') {
      dataMap[index] = [];
    }
    dataMap[index].push({
      event: 'Cervix Dilation',
      value: 5,
      resultUnit: 'cms',
      shape: 'M24,48C10.7,48,0,37.3,0,24S10.7,0,24,0s24,10.7,24,24S37.3,48,24,48z',
      color: '#007cc3',
    });
    const wrapper = shallowWithIntl(<LaborCurvePopupItem
      isOpen
      selectedDataPoint={mockSelectedDataPoint}
      dataMap={dataMap}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
  });

  it('Component should render Fetal Station snapshot for pop element with data', () => {
    const mockSelectedDataPoint = {
      key: 'labor_curve_uid_1',
      toggleSelection: jest.fn(),
      index: 1,
      config: {

        x: '2020-03-11T03:35:00.000Z',
      },
    };
    const dataMap = new Map();
    const index = new Date('2020-03-11T01:35:00.000Z').toISOString();
    if (typeof dataMap[index] === 'undefined') {
      dataMap[index] = [];
    }
    dataMap[index].push({
      event: 'Fetal Station',
      value: -3,
      resultUnit: null,
      shape: 'M24,4l24,40H0L24,4z',
      color: '#c985da',
    });
    const wrapper = shallowWithIntl(<LaborCurvePopupItem
      isOpen
      selectedDataPoint={mockSelectedDataPoint}
      dataMap={dataMap}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
