import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import LaborCurveView from '../../../../src/components/labor-curve/LaborCurveView';

loadTranslation('../../../../translations/en-US.json');

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

describe('LaborCurveView component', () => {
  it('LaborCurveView should match snapshot', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isFailed />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isLoading />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isFailed errorResponse={500} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isFailed errorResponse={401} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isFailed errorResponse={404} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView that has failed', () => {
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} isFailed errorResponse={400} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a LaborCurveView with laborCurveResponse', () => {
    const originalError = console.error;
    console.error = jest.fn();
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
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} laborCurveResponse={laborCurveResponse} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('should render a LaborCurveView with laborCurveResponse as null', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const laborCurveResponse = {
      laborAssessment: null,
    };
    const wrapper = shallowWithIntl(<LaborCurveView preferenceResponse={preferenceResponse} laborCurveResponse={laborCurveResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
});
