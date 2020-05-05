import React from 'react';
import { shallowWithIntl, loadTranslation, mountWithIntl } from 'enzyme-react-intl';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import ContractionContainer from '../../../../src/components/contraction/ContractionContainer';
import ContractionView from '../../../../src/components/contraction/ContractionView';
import partogramUserContext from '../../../../src/partogramUserContext';
import contractionData from '../../../../mock/mockContraction.json';
import partogramService from '../../../../src/service-factory';

loadTranslation('../../../../translations/en-US.json');

const requestor = new OrionRequestor({ withCredentials: true });

jest.mock('../../../../src/service-factory');

describe('ContractionContainer component', () => {
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

  const context = {
    timezone: 'UTC',
    preferenceResponse: {
      id: 'VB_MLDPARTOGRAMVB',
      name: 'MLDPartogramVB',
      type: '40088455',
      componentsConfigurations: [
        {
          id: 'MP_VB_WF_PARTO_OVERVIEW',
          name: 'Partogram Overview',
          label: 'Overview',
          sequence: 10,
          isFilterConfigured: true,
          metaData: [],
          filterDetails: [],
        },
        {
          id: 'MP_VB_WF_PARTO_FHR',
          name: 'Partogram Fetal Heart Rate',
          label: 'Fetal Heart Rate',
          sequence: 2,
          isFilterConfigured: true,
          metaData: [],
          filterDetails: [],
        },
        {
          id: 'MP_VB_WF_PARTO_CONTRACT',
          name: 'Partogram Contractions',
          label: 'Contractions',
          sequence: 1,
          isFilterConfigured: true,
          metaData: [],
          filterDetails: [
            {
              id: 'WF_PARTO_CONTRACT_STR_NOMEN',
              display: null,
              filterNomens: [
                {
                  mnemonic: 'Strong',
                  display: 'Strong value',
                  displayCode: 960865,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_STR_LABEL',
              display: 'Unbearable',
              filterNomens: [
                {
                  mnemonic: null,
                  display: null,
                  displayCode: null,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_MOD_NOMEN',
              display: null,
              filterNomens: [
                {
                  mnemonic: 'Moderate',
                  display: 'Moderate value',
                  displayCode: 960970,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_MOD_LABEL',
              display: 'Intense',
              filterNomens: [
                {
                  mnemonic: null,
                  display: null,
                  displayCode: null,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_WK_NOMEN',
              display: null,
              filterNomens: [
                {
                  mnemonic: 'Mild',
                  display: 'Mild value',
                  displayCode: 5133252,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_WK_LABEL',
              display: 'Bearable',
              filterNomens: [
                {
                  mnemonic: null,
                  display: null,
                  displayCode: null,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_NP_NOMEN',
              display: null,
              filterNomens: [
                {
                  mnemonic: 'NotPalpable',
                  display: 'NotPalpable value',
                  displayCode: 9498979,
                },
              ],
            },
            {
              id: 'WF_PARTO_CONTRACT_NP_LABEL',
              display: 'Tangible',
              filterNomens: [
                {
                  mnemonic: null,
                  display: null,
                  displayCode: null,
                },
              ],
            },
          ],
        },
        {
          id: 'MP_VB_WF_PARTO_LABOR',
          name: 'Partogram Labor Curve',
          label: 'Partogram Labor Curve',
          sequence: 3,
          isFilterConfigured: true,
          metaData: [],
          filterDetails: [],
        },
        {
          id: 'MP_VB_WF_PAGE_LEVEL',
          name: 'Workflow MPage-level Settings',
          label: 'Workflow MPage-level Settings',
          sequence: 9,
          isFilterConfigured: true,
          metaData: [],
          filterDetails: [],
        },
      ],
    },
    orionRequester: { get: jest.fn() },
  };
  const getService = {
    getContraction: () => ({ data: contractionData, status: 200 }),
  };

  it('ContractionContainer should render correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallow(
      <partogramUserContext.Provider value={context}>
        <ContractionContainer service={getService} />
      </partogramUserContext.Provider>,
    );
    wrapper.find(ContractionContainer).setState = ({});
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('ComponentDidMount should be called', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const testContainer = shallowWithIntl(
      <partogramUserContext.Provider value={context}>
        <ContractionContainer
          service={getService}
          isFailed={false}
          isLoading={false}
          timelineProps={mockTimelineData}
          partogramStartDate="2019-04-07T10:30:00Z"
          partogramStopDate={null}
        />
      </partogramUserContext.Provider>,
    ).shallow();
    testContainer.instance().componentDidMount();
    console.error = originalError;
  });

  it('should call handleOnClose function', () => {
    const wrapper = shallowWithIntl(
      <ContractionContainer
        service={getService}
        isFailed={false}
        isLoading={false}
        timelineProps={mockTimelineData}
        partogramStartDate="2019-04-07T10:30:00Z"
        partogramStopDate={null}
      />,
    );
    const toggleSelection = jest.fn();
    const mockSelectedDataPoint = {
      key: 'contraction_uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ isOpen: true, selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handleOnClose()).toMatchSnapshot();
  });
  it('should call handleOnclose function with selectedDataPoint as null', () => {
    const wrapper = shallowWithIntl(<ContractionContainer
      isFailed={false}
      isLoading={false}
      timelineProps={mockTimelineData}
      partogramStartDate="2019-04-07T10:30:00Z"
      partogramStopDate={null}
      service={getService}
    />);
    expect(wrapper.instance().handleOnClose()).toMatchSnapshot();
  });
  it('should call handlePopup function', () => {
    const wrapper = shallowWithIntl(<ContractionContainer
      isFailed={false}
      isLoading={false}
      timelineProps={mockTimelineData}
      partogramStartDate="2019-04-07T10:30:00Z"
      partogramStopDate={null}
      service={getService}
    />);
    const toggleSelection = jest.fn();
    expect(wrapper.instance().handlePopup('uid_1', toggleSelection, 1, [])).toMatchSnapshot();
  });
  it('should call handlePopup function with selectedDataPoint', () => {
    const wrapper = shallowWithIntl(<ContractionContainer
      isFailed={false}
      isLoading={false}
      timelineProps={mockTimelineData}
      partogramStartDate="2019-04-07T10:30:00Z"
      partogramStopDate={null}
      service={getService}
    />);
    const toggleSelection = jest.fn();
    const mockSelectedDataPoint = {
      key: 'uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handlePopup('uid_1', toggleSelection, 1, [])).toMatchSnapshot();
  });
  it('should call createGraph function', () => {
    const wrapper = shallowWithIntl(<ContractionContainer
      isFailed={false}
      isLoading={false}
      timelineProps={mockTimelineData}
      partogramStartDate="2019-04-07T10:30:00Z"
      partogramStopDate={null}
      service={getService}
    />);

    const graphSpy = jest.fn();
    Carbon.api.graph = graphSpy;
    expect(graphSpy).not.toHaveBeenCalled();
    wrapper.find(ContractionView).props().createGraph();
    expect(graphSpy).toHaveBeenCalled();
  });
  describe('orionRequester works properly', () => {
    it('ContractionContainer should render correctly with orionRequester', () => {
      const originalError = console.error;
      console.error = jest.fn();
      const wrapper = shallowWithIntl(
        <partogramUserContext.Provider value={{ h: 'sadfasd' }}>
          <ContractionContainer
            isFailed={false}
            isLoading={false}
            timelineProps={mockTimelineData}
            partogramStartDate="2019-04-07T10:30:00Z"
            partogramStopDate={null}
          />
        </partogramUserContext.Provider>,
      ).dive();
      expect(wrapper).toMatchSnapshot();
      console.error = originalError;
    });
  });
});
