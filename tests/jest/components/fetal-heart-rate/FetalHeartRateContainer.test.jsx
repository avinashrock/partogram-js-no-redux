import React from 'react';
import { shallowWithIntl, loadTranslation, mountWithIntl } from 'enzyme-react-intl';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import fhrData from '../../data/mockFHRData.json';
import FetalHeartRateContainer from '../../../../src/components/fetal-heart-rate/FetalHeartRateContainer';

loadTranslation('../../../../translations/en-US.json');

const getService = {
  getFetalHeartRate: () => ({ data: fhrData, status: 200 }),
};

const requestor = new OrionRequestor({ withCredentials: true });
const contextValue = {
  timezone: 'America/Chicago',
  encounterId: '102',
  configurationId: 'viewBuilderId',
  workflowAPI: undefined,
  orionRequestor: requestor,
};

describe('FetalHeartRateContainer component', () => {
  const mockTimelineData = {
    endDate: new Date('2019-10-11T12:30:00.000Z'),
    initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
    is12HourTime: false,
    interval: {
      lower: {
        offset: () => new Date('2019-10-11T12:30:00.000Z'),
      },
    },
    margin: { left: 320, right: 10 },
    startDate: new Date('2019-10-11T00:30:00.000Z'),
    tickValues: {
      upperBar: [],
      lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
    },
  };

  it('FetalHeartRateContainer should render correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRateContainer
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate="2019-04-07T10:30:00Z"
        />
      </OrionRequestorContext.Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });

  it('should call handleOnClose function', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRateContainer
          service={getService}
          isFailed={false}
          isLoading={false}
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate={null}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    const toggleSelection = jest.fn();
    const mockSelectedDataPoint = {
      key: 'medication_uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ isOpen: true, selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handleOnClose()).toMatchSnapshot();
  });
  it('should call handleOnclose function with selectedDataPoint as null', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRateContainer
          service={getService}
          isFailed={false}
          isLoading={false}
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate={null}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    expect(wrapper.instance().handleOnClose()).toMatchSnapshot();
  });
  it('should call handlePopup function', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRateContainer
          service={getService}
          isFailed={false}
          isLoading={false}
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate={null}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    const toggleSelection = jest.fn();
    expect(wrapper.instance().handlePopup('medication_uid_1', toggleSelection, 1, [])).toMatchSnapshot();
  });
  it('should call handlePopup function with selectedDataPoint', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <FetalHeartRateContainer
          service={getService}
          isFailed={false}
          isLoading={false}
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate={null}
        />
      </OrionRequestorContext.Provider>,
    ).shallow();
    const toggleSelection = jest.fn();
    const mockSelectedDataPoint = {
      key: 'baselinen_uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handlePopup('baselinen_uid_1', toggleSelection, 1, [])).toMatchSnapshot();
  });
});
