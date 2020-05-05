import React from 'react';
import ContractionGraph from '../../../../src/components/contraction/ContractionGraph';

describe('ContractionGraph', () => {
  const mockTimelineData = {
    endDate: new Date('2019-10-11T12:30:00.000Z'),
    initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
    is12HourTime: false,
    viewData: {
      lower: {
        offset: () => new Date('2019-10-11T12:30:00.000Z'),
      },
    },
    getTimebarWidth: jest.fn(),
    margin: { left: 320, right: 10 },
    startDate: new Date('2019-10-11T00:30:00.000Z'),
    tickValues: {
      upperBar: [],
      lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
    },
  };

  const contractionData = {
    contractionFrequencyDisplay: 'Parto contraction freq',
    contractionIntensityDisplay: 'Parto contraction Intensity',
    contractionDetails: [
      {
        contractionFrequency: '6',
        contractionIntensity: 'Moderate',
        nomenclatureID: '960970',
        frequencyUnit: null,
        resultDateTime: '2019-12-17T01:35:00.000Z',
        isModifiedFrequency: false,
        isModifiedIntensity: false,
      },
      {
        contractionFrequency: '10',
        contractionIntensity: 'Moderate',
        nomenclatureID: '960970',
        frequencyUnit: null,
        resultDateTime: '2019-12-17T04:35:00.000Z',
        isModifiedFrequency: false,
        isModifiedIntensity: false,
      },
      {
        contractionFrequency: '3',
        contractionIntensity: null,
        nomenclatureID: null,
        frequencyUnit: null,
        resultDateTime: '2020-01-09T03:00:00Z',
        isModifiedFrequency: false,
        isModifiedIntensity: false,
      },
    ],
  };

  const prefernceSetting = {
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
  };

  describe('componentDidMount', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should load graph', () => {
      const originalError = console.error;
      console.error = jest.fn();
      expect(wrapper).toMatchSnapshot();
      console.error = originalError;
    });
  });
  describe('componentWillUnmount', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should unmount graph', () => {
      const destroySpy = jest.fn();
      wrapper.instance().destroy = destroySpy;
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().componentWillUnmount();
      expect(destroySpy).toHaveBeenCalled();
    });
  });
  describe('destroy', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should call destroy function', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();
      expect(destroySpy).toHaveBeenCalled();
      expect(wrapper.instance().graphInstance).toEqual(null);
    });
    it('should call destroy function with graphInstance as null', () => {
      wrapper.instance().graphInstance = null;
      wrapper.instance().destroy();
      expect(wrapper.instance().graphInstance).toEqual(null);
    });
  });
  describe('componentDidUpdate when timelineProps change', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should update graph when timelineprops change senario1', () => {
      const changedTimelineData = {
        endDate: new Date('2019-10-11T12:30:00.000Z'),
        initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
        is12HourTime: false,
        viewData: {
          lower: {
            offset: (a) => new Date('2019-10-11T12:30:00.000Z'),
          },
        },
        getTimebarWidth: jest.fn(),
        margin: { left: 320, right: 10 },
        startDate: new Date('2019-10-11T00:30:00.000Z'),
        targetDateTime: new Date('2019-12-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };

      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData, isOpen: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentDidUpdate senario2', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen={false}
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should update graph when timelineprops change senario2', () => {
      jest.useFakeTimers();
      const destroySpy = jest.fn();
      jest.advanceTimersByTime(0);
      wrapper.instance().graphInstance = { destroy: destroySpy };
      wrapper.instance().destroy = destroySpy;
      wrapper.instance().setGraphInstance = destroySpy;
      wrapper.instance().renderGraph = destroySpy;
      wrapper.instance().componentDidUpdate({ timelineProps: mockTimelineData });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('componentDidUpdate senario3', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should update graph when timelineprops change senario3', () => {
      const changedTimelineData = {
        endDate: new Date('2019-10-13T15:30:00.000Z'),
        initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
        is12HourTime: false,
        viewData: {
          lower: {
            offset: () => new Date('2019-10-11T12:30:00.000Z'),
          },
        },
        getTimebarWidth: jest.fn(),
        margin: { left: 320, right: 10 },
        startDate: new Date('2019-10-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };
      jest.useFakeTimers();
      const destroySpy = jest.fn();
      jest.advanceTimersByTime(0);
      wrapper.instance().graphInstance = { destroy: destroySpy };
      wrapper.instance().destroy = destroySpy;
      wrapper.instance().setGraphInstance = destroySpy;
      wrapper.instance().renderGraph = destroySpy;
      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('componentDidUpdate senario4', () => {
    const wrapper = mount(<ContractionGraph
      contractionData={contractionData}
      timelineProps={mockTimelineData}
      startDate="2020-01-09T10:30:00Z"
      endDate={null}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      isOpen={false}
      yAxisLabel="Contraction Frequency"
      preferenceResponse={prefernceSetting}
    />);
    it('should update graph when timelineprops change senario4', () => {
      const changedTimelineData = {
        endDate: new Date('2019-10-13T15:30:00.000Z'),
        initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
        is12HourTime: false,
        viewData: {
          lower: {
            offset: () => new Date('2019-10-11T12:30:00.000Z'),
          },
        },
        getTimebarWidth: jest.fn(),
        margin: { left: 320, right: 10 },
        startDate: new Date('2019-10-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };
      jest.useFakeTimers();
      const destroySpy = jest.fn();
      jest.advanceTimersByTime(0);
      wrapper.instance().graphInstance = { destroy: destroySpy };
      wrapper.instance().destroy = destroySpy;
      wrapper.instance().setGraphInstance = destroySpy;
      wrapper.instance().renderGraph = destroySpy;
      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
