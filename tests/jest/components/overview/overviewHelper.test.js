import { loadTranslation } from 'enzyme-react-intl';
import {
  calculateDuration, calculateDurationInDays, populateROMData, populateEGAData, populateDOBData,
  displayAdditionalClinicalDetails,
} from '../../../../src/components/overview/overviewHelper';

loadTranslation('../../../translations/en.json');

describe('overviewHelper methods provides the appropriate return values', () => {
  it('calculateDuration method returns the counter in hours and minutes format', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const counter = '1undefined 41undefined';
    expect(calculateDuration(6101400, intl)).toEqual(counter);
  });
  it('calculateDurationInDays method returns the counter in days, hours and minutes format', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const counter = '0undefined\n  1undefined\n  41undefined';
    expect(calculateDurationInDays(6101400, intl)).toEqual(counter);
  });
  it('calculateDurationInDays method returns the counter in days, hours and minutes format', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const counter = '63undefined\n  2undefined\n  36undefined';
    expect(calculateDurationInDays(5452608000, intl)).toEqual(counter);
  });
  it('populate rom data function gets called when fetal details is not empty and there does not exist a dynamic label', () => {
    const fetalDetails = [{
      dynamicLabel: null,
      dynamicLabelId: 262983812,
      egaAtDelivery: 0,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-15T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const outcome = [{
      romLabel: undefined,
      value: undefined,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateROMData(fetalDetails, intl)).toEqual(outcome);
  });
  it('populate rom data function gets called when fetal details is not empty and rom is null', () => {
    const fetalDetails = [{
      dynamicLabel: 'Baby B',
      dynamicLabelId: 262983812,
      egaAtDelivery: 0,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-15T13:31:00Z',
      ruptureOfMembraneDateTime: null,
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const outcome = [{
      romLabel: undefined,
      value: undefined,
    }, {
      babyLabel: 'Baby B',
      babyValue: '--',
      ruptureOfMembraneDateTime: '--',
      additionalFetalInformation: [{
        name: 'FHR Baseline',
        value: 35,
        unit: 'bpm',
        documentedDateTime: '2019-08-20T05:00:00Z',
        documentedBy: null,
        isResultModified: false,
      }],
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateROMData(fetalDetails, intl)).toEqual(outcome);
  });
  it('populate rom data function gets called when fetal details is  empty', () => {
    const fetalDetails = [];
    const intl = {
      formatMessage: jest.fn(),
    };
    const outcome = [
      {
        label: undefined,
        value: '--',
      },
    ];
    expect(populateROMData(fetalDetails, intl)).toEqual(outcome);
  });
  it('populate ega data function gets called when fetal details is not empty', () => {
    const fetalDetails = [{
      dynamicLabel: 'Baby B',
      dynamicLabelId: 262983812,
      egaAtDelivery: 300,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-15T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const output = [{
      egaLabel: undefined, value: undefined,
    }, {
      deliveryLabel: 'Baby B', deliveryValue: 'NaN NaN',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateEGAData(fetalDetails, intl)).toEqual(output);
  });
  it('populate ega data function gets called when fetal details is empty', () => {
    const fetalDetails = [];
    const outcome = [
      {
        label: undefined,
        value: '--',
      },
    ];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateEGAData(fetalDetails, intl)).toEqual(outcome);
  });
  it('populate ega data function gets called when fetal details is not empty and there exists no dynamic label', () => {
    const fetalDetails = [{
      dynamicLabel: null,
      dynamicLabelId: 262983812,
      egaAtDelivery: 300,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-15T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const output = [{
      egaLabel: undefined, value: undefined,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateEGAData(fetalDetails, intl)).toEqual(output);
  });
  it('populate ega data function gets called when fetal details is not empty and there exists no dynamic label', () => {
    const fetalDetails = [{
      dynamicLabel: 'Baby B',
      dynamicLabelId: 262983812,
      egaAtDelivery: 0,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-15T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const output = [{
      egaLabel: undefined, value: undefined,
    }, {
      deliveryLabel: 'Baby B', deliveryValue: '--',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateEGAData(fetalDetails, intl)).toEqual(output);
  });
  it('populate dob data function gets called when fetal details is not empty', () => {
    const fetalDetails = [{
      dynamicLabel: 'Baby B',
      dynamicLabelId: 262983812,
      egaAtDelivery: 300,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: null,
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const output = [{
      dobLabel: undefined, value: undefined,
    }, {
      dynamicBabyLabel: 'Baby B', deliveryDateTime: '--',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateDOBData(fetalDetails, intl)).toEqual(output);
  });
  it('populate dob data function gets called when fetal details is not empty', () => {
    const fetalDetails = [];
    const output = [{
      label: undefined, value: '--',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateDOBData(fetalDetails, intl)).toEqual(output);
  });
  it('populate dob data function gets called when fetal details is not empty', () => {
    const fetalDetails = [{
      dynamicLabel: 'Baby B',
      dynamicLabelId: 262983812,
      egaAtDelivery: 300,
      laborStopDateTime: '2019-10-14T13:31:00Z',
      deliveryDateTime: '2019-10-14T13:31:00Z',
      ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
      additionalFetalInformation: [
        {
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    }];
    const output = [{
      dobLabel: undefined, value: undefined,
    }, {
      dynamicBabyLabel: 'Baby B', deliveryDateTime: '2019-10-14T13:31:00Z',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    expect(populateDOBData(fetalDetails, intl)).toEqual(output);
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters', () => {
    const additionalClinicalDetails = [
      {
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
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters and thirdcolumn data has two key sets', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
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
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters and thirdcolumn data has two key sets with dynamic results', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: 12,
            unit: 'bpm',
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
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
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: 12,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when thirdcolumn data has three key sets', () => {
    const additionalClinicalDetails = [
      {
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
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when the thirdcolumn data has four key sets', () => {
    const additionalClinicalDetails = [
      {
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
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    },
    {
      label: 'groupBStrepStatus', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when additionalClinicalDetails is empty and thirdcolumn data has two key sets', () => {
    const additionalClinicalDetails = [];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters additionalClinicalDetails is empty and thirdcolumn data has three key sets', () => {
    const additionalClinicalDetails = [];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when the eventAttributes in the first key object has a date and time value', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters eventAttributes in the first key object has a null value and the third column data has three key objects', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
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
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
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
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: 12,
            unit: 'bpm',
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
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
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }, {
      label: 'groupBStrepStatus', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when the additionalClinicalDetails is empty and third column data has four object key values', () => {
    const additionalClinicalDetails = [];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'BloodType', value: '--',
    }, {
      label: 'groupBStrepStatus', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters and eventAttributes in the first key object has a null value', () => {
    const additionalClinicalDetails = [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
  it('displayAdditionalClinicalDetails method is called with all the necessary parameters when eventAttributes in the first key object has dynamic result', () => {
    const additionalClinicalDetails = [
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      }, {
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
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
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: 'value',
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: '2019-11-22T07:00:00Z',
            unit: null,
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
    ];
    const thirdColumnData = [{
      label: 'Oxytocin', value: '--',
    }, {
      label: 'Epidural', value: '--',
    }, {
      label: 'blood type', value: '--',
    }];
    const fourthColumnData = [];
    const timezone = 'Asia/Calcutta';
    expect(displayAdditionalClinicalDetails(additionalClinicalDetails, thirdColumnData, fourthColumnData, timezone));
  });
});
