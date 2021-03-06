import React from 'react';
import { loadTranslation } from 'enzyme-react-intl';
import LaborCurveFetalPositionGraph from '../../../../src/components/labor-curve/LaborCurveFetalPositionGraph';


loadTranslation('../../../../translations/en-US.json');

const intl = {
  formatMessage: jest.fn(),
};

const pregnancyDescriptor = {
  gravidaCount: 0,
  paraCount: 1,
  paraFullTermCount: 0,
  paraPrematureCount: 0,
  abortionsCount: 0,
  livingCount: 0,
  ectopicCount: 1,
  spontaneousAbortionCount: 0,
  inducedAbortionCount: 0,
  multipleBirth: 1,
  hadPreviousCSection: true,
  hadAllCSection: false,
  isMultiPara: false,
  isNulliPara: false,
  isPreviuosPregnancyUnknown: true,

};

const preferenceResponse = {
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
      filterDetails: [],
    },

    {
      id: 'MP_VB_WF_PARTO_LABOR',
      name: 'Partogram Labor Curve',
      label: 'Partogram Labor Curve',
      sequence: 3,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_OA',
          display: 'Occiput Anterior',
          filterNomens: [
            {
              mnemonic: 'OA',
              display: 'Occiput Anterior',
              displayCode: 1,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LOA',
          display: 'Left Occiput Anterior',
          filterNomens: [
            {
              mnemonic: 'LOA',
              display: 'Left Occiput Anterior',
              displayCode: 2,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ROA',
          display: 'Right Occiput Anterior',
          filterNomens: [
            {
              mnemonic: 'ROA',
              display: 'Right Occiput Anterior',
              displayCode: 3,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_OP',
          display: 'Occiput Posterior',
          filterNomens: [
            {
              mnemonic: 'OP',
              display: 'Occiput Posterior',
              displayCode: 14072971,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LOP',
          display: 'Left Occiput Posterior',
          filterNomens: [
            {
              mnemonic: 'LOP',
              display: 'Left Occiput Posterior',
              displayCode: 5,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ROP',
          display: 'Right Occiput Posterior',
          filterNomens: [
            {
              mnemonic: 'ROP',
              display: 'Right Occiput Posterior',
              displayCode: 6,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LOT',
          display: 'Left Occiput Transverse',
          filterNomens: [
            {
              mnemonic: 'LOT',
              display: 'Left Occiput Transverse',
              displayCode: 7,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ROT',
          display: 'Right Occiput Transverse',
          filterNomens: [
            {
              mnemonic: 'ROT',
              display: 'Right Occiput Transverse',
              displayCode: 8,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_SA',
          display: 'Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'SA',
              display: 'Sacrum Anterior',
              displayCode: 9,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LSA',
          display: 'Left Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'LSA',
              display: 'Left Sacrum Anterior',
              displayCode: 10,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_RSA',
          display: 'Right Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'RSA',
              display: 'Right Sacrum Anterior',
              displayCode: 11,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_SP',
          display: 'Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'SP',
              display: 'Sacrum Posterior',
              displayCode: 12,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LSP',
          display: 'Left Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'LSP',
              display: 'Left Sacrum Posterior',
              displayCode: 13,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_RSP',
          display: 'Right Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'RSP',
              display: 'Right Sacrum Posterior',
              displayCode: 14,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_LST',
          display: 'Left Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'LST',
              display: 'Left Sacrum Transverse',
              displayCode: 15,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_RST',
          display: 'Right Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'RST',
              display: 'Right Sacrum Transverse',
              displayCode: 16,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ISA',
          display: 'Single Footling, Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'ISA',
              display: 'Single Footling, Sacrum Anterior',
              displayCode: 17,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DSA',
          display: 'Double Footling, Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'DSA',
              display: 'Double Footling, Sacrum Anterior',
              displayCode: 18,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ILSA',
          display: 'Single Footling, Left Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'ILSA',
              display: 'Single Footling, Left Sacrum Anterior',
              displayCode: 19,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DLSA',
          display: 'Double Footling, Left Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'DLSA',
              display: 'Double Footling, Left Sacrum Anterior',
              displayCode: 20,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_IRSA',
          display: 'Single Footling, Right Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'IRSA',
              display: 'Single Footling, Right Sacrum Anterior',
              displayCode: 21,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DRSA',
          display: 'Double Footling, Right Sacrum Anterior',
          filterNomens: [
            {
              mnemonic: 'DRSA',
              display: 'Double Footling, Right Sacrum Anterior',
              displayCode: 22,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_IRST',
          display: 'Single Footling, Right Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'IRST',
              display: 'Single Footling, Right Sacrum Transverse',
              displayCode: 23,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DRST',
          display: 'Double Footling, Right Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'DRST',
              display: 'Double Footling, Right Sacrum Transverse',
              displayCode: 24,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ILST',
          display: 'Single Footling, Left Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'ILST',
              display: 'Single Footling, Left Sacrum Transverse',
              displayCode: 25,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DLST',
          display: 'Double Footling, Left Sacrum Transverse',
          filterNomens: [
            {
              mnemonic: 'DLST',
              display: 'Double Footling, Right Sacrum Transverse',
              displayCode: 26,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_IRSP',
          display: 'Single Footling, Right Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'IRSP',
              display: 'Single Footling, Right Sacrum Posterior',
              displayCode: 27,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DRSP',
          display: 'Double Footling, Right Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'DRSP',
              display: 'Double Footling, Right Sacrum Posterior',
              displayCode: 28,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ILSP',
          display: 'Single Footling, Left Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'ILSP',
              display: 'Single Footling, Left Sacrum Posterior',
              displayCode: 29,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DLSP',
          display: 'Double Footling, Left Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'DLSP',
              display: 'Double Footling, Left Sacrum Posterior',
              displayCode: 30,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_ISP',
          display: 'Single Footling, Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'ISP',
              display: 'Single Footling, Sacrum Posterior',
              displayCode: 31,
            },
          ],
        },
        {
          id: 'WF_PARTO_LABOR_FETAL_POS_DSP',
          display: 'Double Footling, Sacrum Posterior',
          filterNomens: [
            {
              mnemonic: 'DSP',
              display: 'Double Footling, Sacrum Posterior',
              displayCode: 32,
            },
          ],
        },
      ],
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

describe('Labor Curve Fetal Position Graph component', () => {
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
    const wrapper = mount(<LaborCurveFetalPositionGraph
      startDate="2019-04-07T10:30:00Z"
      endDate={null}
      laborCurveResponse={laborCurveResponse}
      pregnancyDescriptor={pregnancyDescriptor}
      preferenceResponse={preferenceResponse}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGanttGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
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
    const wrapper = mount(<LaborCurveFetalPositionGraph
      startDate="2019-10-11T00:30:00.000Z"
      endDate={null}
      laborCurveResponse={laborCurveResponse}
      pregnancyDescriptor={pregnancyDescriptor}
      preferenceResponse={preferenceResponse}
      timelineProps={mockTimelineData}
      handlePopup={jest.fn()}
      createGanttGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
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
