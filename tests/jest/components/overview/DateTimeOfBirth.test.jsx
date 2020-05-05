import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import DateTimeOfBirth from '../../../../src/components/overview/DateTimeOfBirth';

describe('DateTimeOfBirth component', () => {
  it('DateTimeOfBirth component matches its snapshot', () => {
    const dobData = [{
      dobLabel: 'Date/Time of Birth',
      value: undefined,
    }, {
      dynamicBabyLabel: 'Baby A',
      deliveryDateTime: '2019-10-14T13:31:00Z',
    },
    ];
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<DateTimeOfBirth dobData={dobData} />).shallow();
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('DateTimeOfBirth component mtches its snapshot when the value is -- ', () => {
    const dobData = [{
      label: 'Date/Time of Birth',
      value: '--',
    },
    ];
    const wrapper = shallowWithIntl(<DateTimeOfBirth dobData={dobData} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('DateTimeOfBirth component mtches its snapshot when delivery date time is -- ', () => {
    const dobData = [{
      dobLabel: 'Date/Time of Birth',
      value: undefined,
    }, {
      dynamicBabyLabel: 'Baby A',
      deliveryDateTime: '--',
    },
    ];
    const wrapper = shallowWithIntl(<DateTimeOfBirth dobData={dobData} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
