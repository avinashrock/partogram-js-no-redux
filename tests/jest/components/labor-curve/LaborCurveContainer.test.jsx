import React from 'react';
import { shallowWithIntl, loadTranslation, mountWithIntl } from 'enzyme-react-intl';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import LaborCurveContainer from '../../../../src/components/labor-curve/LaborCurveContainer';
import LaborCurveView from '../../../../src/components/labor-curve/LaborCurveView';
import partogramUserContext from '../../../../src/partogramUserContext';
import laborCurveResponse from '../../../../mock/mockLaborCurveData.json';
import partogramService from '../../../../src/service-factory';

loadTranslation('../../../../translations/en-US.json');

const requestor = new OrionRequestor({ withCredentials: true });

jest.mock('../../../../src/service-factory');

describe('Labor Curve Container component', () => {
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
    },
    orionRequestor: { get: jest.fn() },
  };
  const getService = {
    getLaborAssessments: () => ({ data: laborCurveResponse.laborCurveDetails, status: 200 }),
  };

  it('LaborCurveContainer should render correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallow(
      <partogramUserContext.Provider value={context}>
        <LaborCurveContainer service={getService} />
      </partogramUserContext.Provider>,
    );
    wrapper.find(LaborCurveContainer).setState = ({});
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('ComponentDidMount should be called', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const testContainer = shallowWithIntl(
      <partogramUserContext.Provider value={context}>
        <LaborCurveContainer
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
      <LaborCurveContainer
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
      key: 'labor_curve_uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ isOpen: true, selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handleOnClose()).toMatchSnapshot();
  });
  it('should call handleOnclose function with selectedDataPoint as null', () => {
    const wrapper = shallowWithIntl(<LaborCurveContainer
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
    const wrapper = shallowWithIntl(<LaborCurveContainer
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
    const wrapper = shallowWithIntl(<LaborCurveContainer
      isFailed={false}
      isLoading={false}
      timelineProps={mockTimelineData}
      partogramStartDate="2019-04-07T10:30:00Z"
      partogramStopDate={null}
      service={getService}
    />);
    const toggleSelection = jest.fn();
    const mockSelectedDataPoint = {
      key: 'labor_curve_uid_1',
      toggleSelection,
      index: 1,
      config: {},
    };
    wrapper.instance().setState({ selectedDataPoint: mockSelectedDataPoint });
    expect(wrapper.instance().handlePopup('labor_curve_uid_1', toggleSelection, 1, [])).toMatchSnapshot();
  });
  it('should call createGraph function', () => {
    const wrapper = shallowWithIntl(<LaborCurveContainer
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
    wrapper.find(LaborCurveView).props().createGraph();
    expect(graphSpy).toHaveBeenCalled();
  });
  describe('orionRequester works properly', () => {
    it('Labor Curve Container should render correctly with orionRequester', () => {
      const originalError = console.error;
      console.error = jest.fn();
      const wrapper = shallowWithIntl(
        <partogramUserContext.Provider value={{ h: 'asdf' }}>
          <LaborCurveContainer
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
