import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Overview from '../../../../src/components/overview/Overview';

loadTranslation('../../../translations/en-US.json');

describe('Overview component', () => {
  it('Overview component should match its snapshot with all the necessary props', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-07T19:40:00.00Z',
      laborStopDateTime: '2019-07-07T19:40:00.00Z',
      partogramStopDateTime: '2019-07-07T19:40:00.00Z',
    };
    const medicationDetails = {
      epiduralDetails: [{
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      }],
    };
    const fetalDetails = [{
      dynamicLabel: 'Baby A',
      deliveryDateTime: '2019-10-14T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-08T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 31,
          unit: null,
          documentedDateTime: '2019-06-26T12:00:00Z',
          documentedBy: null,
          isResultModified: null,
        },
      ],
    }];
    const pregnancyDetails = {
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
    };
    const maternalDetails = {
      bloodType: 'Neg',
      groupBStrepStatus: 'Positive',
    };
    const additionalClinicalDetails = [{
      eventAttributes: [
        {
          dynamicLabel: null,
          dynamicLabelId: 0,
          name: 'Parto ABO only',
          value: 'A',
          unit: '-',
          documentedDateTime: '2019-11-22T07:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],

    },
    {
      eventAttributes: [
        {
          dynamicLabel: 'Baby A',
          dynamicLabelId: 262983812,
          name: 'Parto ROM Date,Time',
          value: '2019-08-19T09:00:00Z',
          unit: null,
          documentedDateTime: '2019-08-19T09:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],
    }];
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<Overview
      laborDetails={laborDetails}
      fetalDetails={fetalDetails}
      medicationDetails={medicationDetails}
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      additionalClinicalDetails={additionalClinicalDetails}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
    wrapper.instance().UNSAFE_componentWillMount();
  });
  it('Overview component should match its snapshot when maternal details is null', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-07T19:40:00.00Z',
      laborStopDateTime: '2019-07-07T19:40:00.00Z',
      partogramStopDateTime: '2019-07-07T19:40:00.00Z',
    };
    const medicationDetails = {
      epiduralDetails: [{
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      }],
    };
    const fetalDetails = [{
      dynamicLabel: 'Baby A',
      deliveryDateTime: '2019-10-14T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-08T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 31,
          unit: null,
          documentedDateTime: '2019-06-26T12:00:00Z',
          documentedBy: null,
          isResultModified: null,
        },
      ],
    }];
    const pregnancyDetails = {
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
    };
    const additionalClinicalDetails = [{
      eventAttributes: [
        {
          dynamicLabel: null,
          dynamicLabelId: 0,
          name: 'Parto ABO only',
          value: 'A',
          unit: '-',
          documentedDateTime: '2019-11-22T07:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],

    },
    {
      eventAttributes: [
        {
          dynamicLabel: 'Baby A',
          dynamicLabelId: 262983812,
          name: 'Parto ROM Date,Time',
          value: '2019-08-19T09:00:00Z',
          unit: null,
          documentedDateTime: '2019-08-19T09:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],
    }];
    const wrapper = shallowWithIntl(<Overview
      laborDetails={laborDetails}
      fetalDetails={fetalDetails}
      medicationDetails={medicationDetails}
      pregnancyDetails={pregnancyDetails}
      maternalDetails={null}
      additionalClinicalDetails={additionalClinicalDetails}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().UNSAFE_componentWillMount();
  });
  it('Overview component should match its snapshot when blood type does not exist as part of th maternal details', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-07T19:40:00.00Z',
      laborStopDateTime: '2019-07-07T19:40:00.00Z',
      partogramStopDateTime: '2019-07-07T19:40:00.00Z',
    };
    const medicationDetails = {
      epiduralDetails: [{
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      }],
    };
    const fetalDetails = [{
      dynamicLabel: 'Baby A',
      deliveryDateTime: '2019-10-14T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-08T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 31,
          unit: null,
          documentedDateTime: '2019-06-26T12:00:00Z',
          documentedBy: null,
          isResultModified: null,
        },
      ],
    }];
    const pregnancyDetails = {
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
    };
    const maternalDetails = {
      groupBStrepStatus: 'Positive',
    };
    const additionalClinicalDetails = [{
      eventAttributes: [
        {
          dynamicLabel: null,
          dynamicLabelId: 0,
          name: 'Parto ABO only',
          value: 'A',
          unit: '-',
          documentedDateTime: '2019-11-22T07:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],

    },
    {
      eventAttributes: [
        {
          dynamicLabel: 'Baby A',
          dynamicLabelId: 262983812,
          name: 'Parto ROM Date,Time',
          value: '2019-08-19T09:00:00Z',
          unit: null,
          documentedDateTime: '2019-08-19T09:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],
    }];
    const wrapper = shallowWithIntl(<Overview
      laborDetails={laborDetails}
      fetalDetails={fetalDetails}
      medicationDetails={medicationDetails}
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      additionalClinicalDetails={additionalClinicalDetails}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().UNSAFE_componentWillMount();
  });
  it('Overview component should match its snapshot when gbsStatus does not exist as part of th maternal details and meows score is defined', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-07T19:40:00.00Z',
      laborStopDateTime: '2019-07-07T19:40:00.00Z',
      partogramStopDateTime: '2019-07-07T19:40:00.00Z',
    };
    const medicationDetails = {
      epiduralDetails: [{
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      }],
    };
    const fetalDetails = [{
      dynamicLabel: 'Baby A',
      deliveryDateTime: '2019-10-14T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-08T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 31,
          unit: null,
          documentedDateTime: '2019-06-26T12:00:00Z',
          documentedBy: null,
          isResultModified: null,
        },
      ],
    }];
    const pregnancyDetails = {
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
    };
    const maternalDetails = {
      bloodType: 'Neg',
      meowsScore: null,
      meowsAttributes: [
        {
          name: 'Meow Score',
          value: '5',
          unit: 'bpm',
          documentedDateTime: null,
          documentedBy: null,
          isResultModified: true,
        },
      ],
    };
    const additionalClinicalDetails = [{
      eventAttributes: [
        {
          dynamicLabel: null,
          dynamicLabelId: 0,
          name: 'Parto ABO only',
          value: 'A',
          unit: '-',
          documentedDateTime: '2019-11-22T07:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],

    },
    {
      eventAttributes: [
        {
          dynamicLabel: 'Baby A',
          dynamicLabelId: 262983812,
          name: 'Parto ROM Date,Time',
          value: '2019-08-19T09:00:00Z',
          unit: null,
          documentedDateTime: '2019-08-19T09:00:00Z',
          documentedBy: null,
          isResultModified: false,
          criticality: null,
        },
      ],
    }];
    const wrapper = shallowWithIntl(<Overview
      laborDetails={laborDetails}
      fetalDetails={fetalDetails}
      medicationDetails={medicationDetails}
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      additionalClinicalDetails={additionalClinicalDetails}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().UNSAFE_componentWillMount();
  });
});
