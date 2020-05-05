import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import LaborOnset from '../../../../src/components/overview/LaborOnset';

loadTranslation('../../../translations/en.json');

describe('LaborOnset component', () => {
  it('LaborOnset should match its snapshot', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
      laborStopDateTime: '2019-07-10T11:23:00Z',
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    const fetalDetails = [
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
    ];
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().setButtonNode();
    wrapper.instance().getButtonNode();
    wrapper.instance().handleButtonClick();
    wrapper.instance().handleRequestClose();
    console.error = originalError;
  });
  it('LaborOnset should match its snapshot when laborStartDateTime is null', () => {
    const laborDetails = {
      laborStartDateTime: null,
      laborStopDateTime: '2019-07-10T11:23:00Z',
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    const fetalDetails = [
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('LaborOnset should match its snapshot when laborStopDateTime is null', () => {
    let laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
      laborStopDateTime: null,
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    const fetalDetails = [
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
      {
        laborStopDateTime: '2019-07-10T11:23:00Z',
      },
    ];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    wrapper.instance().getLaborOnset(laborDetails, fetalDetails, intl);
    laborDetails = {
      laborStartDateTime: null,
      laborStopDateTime: null,
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    wrapper.instance().getLaborOnset(laborDetails, fetalDetails, intl);
  });
  it('LaborOnset should match its snapshot when laborStopDateTime: is null and fetalDetails is null', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
      laborStopDateTime: null,
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    const fetalDetails = null;
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('LaborOnset should match its snapshot when laborStopDateTime is entirely null in non-dynamic and dynamic case', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
      laborStopDateTime: null,
      partogramStopDateTime: '2019-07-10T11:23:00Z',
    };
    const fetalDetails = [
      {
        laborStopDateTime: null,
      },
      {
        laborStopDateTime: null,
      },
    ];
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('LaborOnset should match its snapshot when laborStopDateTime and partogramStopDateTime is null', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
      laborStopDateTime: null,
      partogramStopDateTime: null,
    };
    const fetalDetails = [
      {
        laborStopDateTime: null,
      },
      {
        laborStopDateTime: null,
      },
    ];
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('LaborOnset should match its snapshot when laborStartDateTime is null', () => {
    const laborDetails = {
      laborStartDateTime: null,
      laborStopDateTime: null,
      partogramStopDateTime: null,
    };
    const fetalDetails = [
      {
        laborStopDateTime: null,
      },
      {
        laborStopDateTime: null,
      },
    ];
    const wrapper = shallowWithIntl(<LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
