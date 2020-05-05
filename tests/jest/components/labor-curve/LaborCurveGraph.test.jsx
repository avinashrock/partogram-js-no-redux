import React from 'react';
import { loadTranslation } from 'enzyme-react-intl';
import LaborCurveGraph from '../../../../src/components/labor-curve/LaborCurveGraph';
import { laborCurveHoverData } from '../../../../src/components/labor-curve/LaborCurveHoverData';

loadTranslation('../../../../translations/en-US.json');

const intl = {
  formatMessage: jest.fn(),
};

describe('Labor Curve Graph component', () => {
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

  const laborCurveResponse = {
    data: {
      laborCurveDetails: [
        {
          dilationDetails: [
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 5,
              unit: 'cms',
              documentedDateTime: '2020-03-11T00:35:00.000Z',
              documentedBy: null,
              isResultModified: true,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 5,
              unit: 'cms',
              documentedDateTime: '2020-03-11T01:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 6,
              unit: 'cms',
              documentedDateTime: '2020-03-11T03:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 6,
              unit: 'cms',
              documentedDateTime: '2020-03-11T05:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 7,
              unit: 'cms',
              documentedDateTime: '2020-03-11T06:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 8,
              unit: 'cms',
              documentedDateTime: '2020-03-11T07:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: null,
              name: 'Cervix Dilation',
              value: 9,
              unit: 'cms',
              documentedDateTime: '2020-03-11T08:35:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
          ],
        },
        {
          fetalStationDetails: [
            {
              nomenclatureID: '968530',
              name: 'Fetal Station',
              value: -3,
              unit: null,
              documentedDateTime: '2020-03-11T00:35:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '14917072',
              name: 'Fetal Station',
              value: -2,
              unit: null,
              documentedDateTime: '2020-03-11T01:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '965378',
              name: 'Fetal Station',
              value: -1,
              unit: null,
              documentedDateTime: '2020-03-11T03:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '965378',
              name: 'Fetal Station',
              value: -1,
              unit: null,
              documentedDateTime: '2020-03-11T05:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '965378',
              name: 'Fetal Station',
              value: 0,
              unit: null,
              documentedDateTime: '2020-03-11T06:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '965378',
              name: 'Fetal Station',
              value: 0,
              unit: null,
              documentedDateTime: '2020-03-11T07:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
            {
              nomenclatureID: '965378',
              name: 'Fetal Station',
              value: 1,
              unit: null,
              documentedDateTime: '2020-03-11T08:45:00.000Z',
              documentedBy: null,
              isResultModified: false,
              criticality: null,
            },
          ],
        },
        {
          fetalPositionDetails: [
            {
              nomenclatureID: '14072971',
              name: 'Fetal Position',
              value: 'Occiput Posterior',
              unit: null,
              documentedDateTime: '2020-03-11T06:34:00Z',
              documentedBy: null,
              isResultModified: false,
            },
            {
              nomenclatureID: '2',
              name: 'Fetal Position',
              value: 'Left Occiput Anterior',
              unit: null,
              documentedDateTime: '2020-03-11T02:34:00Z',
              documentedBy: null,
              isResultModified: false,
            },
            {
              nomenclatureID: '30',
              name: 'Fetal Position',
              value: 'Double Footling, Left Sacrum Posterior',
              unit: null,
              documentedDateTime: '2020-03-11T04:34:00Z',
              documentedBy: null,
              isResultModified: false,
            },
          ],
        },
      ],
    },
  };

  describe('componentDidUpdate', () => {
    const wrapper = mount(<LaborCurveGraph
      startDate="2019-04-07T10:30:00Z"
      endDate={null}
      laborCurveResponse={laborCurveResponse}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      intl={intl}
    />);

    it('should render labor curve graph with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render labor curve graph destroy function', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();
      expect(destroySpy).toHaveBeenCalled();
      expect(wrapper.instance().graphInstance).toEqual(null);
      wrapper.instance().destroy();
    });

    it('should render labor curve graph destroy function', () => {
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
    const wrapper = mount(<LaborCurveGraph
      startDate="2019-10-11T00:30:00.000Z"
      endDate={null}
      laborCurveResponse={laborCurveResponse}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
      intl={intl}
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
