import React from 'react';
import FetalHeartRateGraph from '../../../../src/components/fetal-heart-rate/FetalHeartRateGraph';

describe('FetalHeartRateGraph component', () => {
  const startDate = new Date('2019-10-11T00:30:00.000Z');
  const endDate = new Date('2019-10-11T12:30:00.000Z');
  const mockTimelineData = {
    endDate,
    initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
    is12HourTime: false,
    viewData: {
      lower: {
        offset: (a) => new Date('2019-10-11T12:30:00.000Z'),
      },
    },
    getTimebarWidth: jest.fn(),
    margin: { left: 320, right: 10 },
    startDate,
    targetDateTime: new Date('2019-12-11T00:30:00.000Z'),
    tickValues: {
      upperBar: [],
      lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
    },
  };

  const fhrDetails = [
    {
      dynamicLabel: 'Baby A',
      dynamicLabelId: 12314,
      fhrBaselineDetails: [
        {
          name: 'Baseline',
          value: 115,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T01:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 115,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 120,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T09:35:00.000Z',
          isResultModified: true,
        },
      ],
      fhrIntermittentDetails: [
        {
          name: 'Intermittent',
          value: 160,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:45:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 160,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:55:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 130,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T11:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 140,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T12:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 150,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T13:30:00.000Z',
          isResultModified: true,
        },
      ],
    },
    {
      dynamicLabel: 'Baby B',
      dynamicLabelId: 12315,
      fhrBaselineDetails: [
        {
          name: 'FHR Baseline',
          value: 90,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T01:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 95,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 100,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T09:35:00.000Z',
          isResultModified: true,
        },
      ],
      fhrIntermittentDetails: [
        {
          name: 'Intermittent',
          value: 130,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T10:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 120,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T11:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 120,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T12:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 130,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T13:30:00.000Z',
          isResultModified: true,
        },
      ],
    },
    {
      dynamicLabel: 'Baby C',
      dynamicLabelId: 456,
      fhrBaselineDetails: [
        {
          name: 'Baseline',
          value: 125,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T01:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 165,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T03:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 170,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:35:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Baseline',
          value: 180,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T10:30:00.000Z',
          isResultModified: true,
        },
      ],
      fhrIntermittentDetails: [
        {
          name: 'Intermittent',
          value: 116,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T02:30:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 160,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T03:55:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 170,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T05:55:00.000Z',
          isResultModified: true,
        },
        {
          name: 'Intermittent',
          value: 180,
          unit: 'bpm',
          documentedDateTime: '2019-12-17T13:30:00.000Z',
          isResultModified: true,
        },
      ],
    },
  ];

  describe('componentDidUpdate', () => {
    const wrapper = mount(<FetalHeartRateGraph
      startDate="2019-04-07T10:30:00Z"
      endDate={null}
      fetalHeartRateDetails={fhrDetails}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      fetalHeartRateLabel="Testing label"
    />);

    it('should render fetal heart graph with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render fetal heart graph destroy function', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();
      expect(destroySpy).toHaveBeenCalled();
      expect(wrapper.instance().graphInstance).toEqual(null);
      wrapper.instance().destroy();
    });

    it('should render fetal heart graph destroy function', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();
      expect(destroySpy).toHaveBeenCalled();
      expect(wrapper.instance().graphInstance).toEqual(null);
      wrapper.instance().destroy();
    });
  });
  describe('componentDidUpdate', () => {
    const wrapper = mount(<FetalHeartRateGraph
      startDate="2019-10-11T00:30:00.000Z"
      endDate={null}
      fetalHeartRateDetails={fhrDetails}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      fetalHeartRateLabel="Testing label"
    />);

    it('should call the componentDidUpdate scenario1', () => {
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
        startDate,
        targetDateTime: new Date('2019-12-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };

      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };

      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData });
      expect(wrapper).toMatchSnapshot();
    });

    it('should call the componentDidUpdate scenario2', () => {
      const changedTimelineData = {
        endDate,
        initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
        is12HourTime: false,
        viewData: {
          lower: {
            offset: (a) => new Date('2019-10-11T12:30:00.000Z'),
          },
        },
        getTimebarWidth: jest.fn(),
        margin: { left: 320, right: 10 },
        startDate,
        targetDateTime: new Date('2019-12-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };

      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };

      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
