import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import FetalHeartRatePopupItem from '../../../../src/components/fetal-heart-rate/FetalHeartRatePopupItem';

loadTranslation('../../../../translations/en-US.json');

const requestor = new OrionRequestor({ withCredentials: true });

const contextValue = {
  timezone: 'America/Chicago',
  encounterId: '102',
  configurationId: 'viewBuilderId',
  workflowAPI: undefined,
  orionRequestor: requestor,
};

describe('Fetal Heart Rate Popup Items', () => {
  it('Component should render baseline snapshot for pop element with data', () => {
    const mockSelectedDataPoint = {
      key: 'baseline_uid_1',
      toggleSelection: jest.fn(),
      index: 1,
      config: {
        x: '2019-12-12T18:30:00.000Z',
      },
    };
    const dataMap = new Map();
    const index = new Date('2019-12-12T18:30:00.000Z').toISOString();
    if (typeof dataMap[index] === 'undefined') {
      dataMap[index] = [];
    }
    dataMap[index].push({
      event: 'Baby B - Baseline',
      value: 110,
      resultUnit: 'bpm',
      shape: 'M0,16h16V0h16v16h16v16H32v16H16V32H0V16z',
      color: '#a5d784',
      isResultModified: false,
    });
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRatePopupItem
          isOpen
          selectedDataPoint={mockSelectedDataPoint}
          dataMap={dataMap}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    expect(wrapper).toMatchSnapshot();
  });

  it('Component should render intermittent snapshot for pop element with data', () => {
    const mockSelectedDataPoint = {
      key: 'intermittent',
      toggleSelection: jest.fn(),
      index: 1,
      config: {
        mid: {
          x: '2019-12-12T18:30:00.000Z',
        },
      },
    };
    const dataMap = new Map();
    const index = new Date('2019-12-12T18:30:00.000Z').toISOString();
    if (typeof dataMap[index] === 'undefined') {
      dataMap[index] = [];
    }
    dataMap[index].push({
      event: 'Baby B - Intermittent',
      value: 110,
      resultUnit: 'bpm',
      shape: 'M0,16h16V0h16v16h16v16H32v16H16V32H0V16z',
      color: '#a5d784',
      isResultModified: false,
    });
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRatePopupItem
          isOpen
          selectedDataPoint={mockSelectedDataPoint}
          dataMap={dataMap}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
