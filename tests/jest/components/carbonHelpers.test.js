import { getGraphCanvasJSON, getDataSet } from '../../../src/components/carbonHelpers';

describe('carbonHepers provides the methods with appropriate return values', () => {
  it('getGraphCanvasJSON return the appropriate return value along with dateLineproperty when partogramStopDate is null', () => {
    const canvasData = {
      axis: {
        x: {
          lowerLimit: '2019-08-28T20:30:00.000Z',
          rangeRounding: false,
          show: false,
          ticks: {
            format: '%H:%S',
            lowerStepTickValues: [],
            midpointTickValues: [],
            upperStepTickValues: [],
          },
          type: 'timeseries',
          upperLimit: '2019-08-29T08:30:00.000Z',
        },
        y: {
          label: 'Heart Rate:',
          lowerLimit: 60,
          upperLimit: 210,
          rangeRounding: false,
          padDomain: false,
        },
      },
      bindLegendTo: '#fhrLegend',
      bindTo: 'fhrGraph',
      dateline: [{
        color: '#ffba02',
        shape: {
          options: {
            scale: 0.25,
            x: -6,
            y: -6,
          },
          path: {
            d: 'M24 4l24 40H0L24 4z',
          },
        },
        showDatelineIndicator: false,
        value: '2019-12-16T06:14:54.000Z',
      }],
      padding: {
        bottom: 6,
        left: 51,
        right: 0,
        top: 0,
      },
      dimension: {
        height: 400,
      },
      pan: {
        enabled: true,
      },
      showLabel: true,
      showLegend: true,
    };
    expect(getGraphCanvasJSON('fhrGraph', '2019-08-28T20:30:00.000Z', '2019-08-29T08:30:00.000Z', 'fhrLegend', { lowerStepTickValues: [], midpointTickValues: [], upperStepTickValues: [] }, 210, 60, 'Heart Rate:', '2019-12-16T06:14:54.000Z')).toEqual(canvasData);
  });
  it('getGraphCanvasJSON return the appropriate return value partogramStopDate is not null', () => {
    const canvasData = {
      axis: {
        x: {
          lowerLimit: '2019-08-28T20:30:00.000Z',
          rangeRounding: false,
          show: false,
          ticks: {
            format: '%H:%S',
            lowerStepTickValues: [],
            midpointTickValues: [],
            upperStepTickValues: [],
          },
          type: 'timeseries',
          upperLimit: '2019-08-29T08:30:00.000Z',
        },
        y: {
          label: 'Heart Rate:',
          lowerLimit: 60,
          upperLimit: 210,
          rangeRounding: false,
          padDomain: false,
        },
      },
      dimension: {
        height: 400,
      },
      bindLegendTo: '#fhrLegend',
      bindTo: 'fhrGraph',
      dateline: [{
        color: '#ffba02',
        shape: {
          options: {
            scale: 0.25,
            x: -6,
            y: -6,
          },
          path: {
            d: 'M24 4l24 40H0L24 4z',
          },
        },
        showDatelineIndicator: false,
        value: undefined,
      }],
      padding: {
        bottom: 6,
        left: 51,
        right: 0,
        top: 0,
      },
      pan: {
        enabled: true,
      },
      showLabel: true,
      showLegend: true,
    };
    expect(getGraphCanvasJSON('fhrGraph', '2019-08-28T20:30:00.000Z', '2019-08-29T08:30:00.000Z', 'fhrLegend', { lowerStepTickValues: [], midpointTickValues: [], upperStepTickValues: [] }, 210, 60, 'Heart Rate:')).toEqual(canvasData);
  });
  it('getDataSet method is invoked with appropriate object value', () => {
    const fhrDetails = [
      {
        dynamicLabel: 'Baby A',
        dynamicLabelId: 12314,
        fhrBaselineDetails: [
          {
            name: 'Baseline',
            value: 110,
            unit: 'bpm',
            documentedDateTime: '2019-07-18T01:35:00.000Z',
            isResultModified: true,
          },
        ],
        fhrIntermittentDetails: [
          {
            name: 'Intermittent',
            value: 130,
            unit: 'bpm',
            documentedDateTime: '2019-07-19T19:30:00.000Z',
          },
        ],
      },
    ];
    const baselineDataSet = [
      {
        color: '#007cc3',
        key: 'baseline_uid_0',
        label: { display: 'Baby A - Baseline', unit: 'bpm' },
        onClick: jest.fn,
        regions: [
          {
            axis: 'y',
            color: '#F4F4F4',
            end: 160,
            start: 110,
          },
        ],
        shape: {
          options: {
            scale: 0.25,
            x: -6,
            y: -6,
          },
          path: { d: 'M24 0l24 24-24 24L0 24 24 0z' },
        },
        values: [{ x: '2019-07-18T01:35:00.000Z', y: 110 }],
      },
    ];
    expect(getDataSet(fhrDetails, 110, 160, true, jest.fn)).toMatchObject(baselineDataSet);
  });
  it('getDataSet method is invoked with appropriate object value', () => {
    const fhrDetails = [
      {
        dynamicLabel: 'Baby A',
        dynamicLabelId: 12314,
        fhrBaselineDetails: [
          {
            name: 'Baseline',
            value: 110,
            unit: 'bpm',
            documentedDateTime: '2019-07-18T01:35:00.000Z',
            isResultModified: true,
          },
        ],
        fhrIntermittentDetails: [
          {
            name: 'Intermittent',
            value: 130,
            unit: 'bpm',
            documentedDateTime: '2019-07-19T19:30:00.000Z',
          },
        ],
      },
    ];
    const baselineDataSet = [
      {
        color: '#007cc3',
        key: 'baseline_uid_0',
        label: { display: 'Baby A - Baseline', unit: 'bpm' },
        onClick: jest.fn,
        regions: [
          {
            axis: 'y',
            color: '#F4F4F4',
            end: 160,
            start: 110,
          },
        ],
        shape: {
          options: {
            scale: 0.25,
            x: -6,
            y: -6,
          },
          path: { d: 'M24 0l24 24-24 24L0 24 24 0z' },
        },
        values: [{ x: '2019-07-18T01:35:00.000Z', y: 110 }],
      },
    ];
    expect(getDataSet(fhrDetails, 110, 160, true, jest.fn)).toMatchObject(baselineDataSet);
  });
  it('getDataSet is invoked with appropriate object', () => {
    const fhrDetails = [
      {
        dynamicLabel: 'Baby A',
        dynamicLabelId: 12314,
        fhrBaselineDetails: [
          {
            name: 'Baseline',
            value: 110,
            unit: 'bpm',
            documentedDateTime: '2019-07-18T01:35:00.000Z',
            isResultModified: true,
          },
        ],
        fhrIntermittentDetails: [
          {
            name: 'Intermittent',
            value: 130,
            unit: 'bpm',
            documentedDateTime: '2019-07-19T19:30:00.000Z',
          },
        ],
      },
    ];
    const intermittentDataSet = [{
      color: {
        mid: '#007cc3',
      },
      key: 'intermittent_uid_0',
      label: {
        mid: {
          display: 'Baby A - Intermittent',
          unit: 'bpm',
        },
      },
      onClick: jest.fn,
      regions: {
        mid: [
          {
            axis: 'y',
            color: '#F4F4F4',
            end: 160,
            start: 110,
          },
        ],
      },
      shape: {
        mid: {
          options: {
            scale: 0.2,
            x: -5,
            y: -5,
          },
          path: {
            d: 'M0 0h48v48H0V0z',
          },
        },
      },
      values: [
        {
          mid: {
            x: '2019-07-19T19:30:00.000Z',
            y: 130,
          },
        },
      ],
    }];
    expect(getDataSet(fhrDetails, 110, 160, false, jest.fn)).toMatchObject(intermittentDataSet);
  });
  it('getDataSet is invoked with appropriate object', () => {
    const fhrDetails = [
      {
        dynamicLabel: 'Baby A',
        dynamicLabelId: 12314,
        fhrBaselineDetails: [
          {
            name: 'Baseline',
            value: 110,
            unit: 'bpm',
            documentedDateTime: '2019-07-18T01:35:00.000Z',
            isResultModified: true,
          },
        ],
        fhrIntermittentDetails: [
          {
            name: 'Intermittent',
            value: 130,
            unit: 'bpm',
            documentedDateTime: '2019-07-19T19:30:00.000Z',
          },
        ],
      },
    ];
    const intermittentDataSet = [{
      color: {
        mid: '#007cc3',
      },
      key: 'intermittent_uid_0',
      label: {
        mid: {
          display: 'Baby A - Intermittent',
          unit: 'bpm',
        },
      },
      onClick: jest.fn,
      regions: {
        mid: [
          {
            axis: 'y',
            color: '#F4F4F4',
            end: 160,
            start: 110,
          },
        ],
      },
      shape: {
        mid: {
          options: {
            scale: 0.2,
            x: -5,
            y: -5,
          },
          path: {
            d: 'M0 0h48v48H0V0z',
          },
        },
      },
      values: [
        {
          mid: {
            x: '2019-07-19T19:30:00.000Z',
            y: 130,
          },
        },
      ],
    }];
    expect(getDataSet(fhrDetails, 110, 160, false, jest.fn)).toMatchObject(intermittentDataSet);
  });
});
