import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import LaborOnsetPopup from '../../../../src/components/overview/LaborOnsetPopup';

loadTranslation('../../../translations/en.json');

describe('LaborOnsetPopup component', () => {
  it('LaborOnsetPopup component should match its snapshot', () => {
    const laborDetails = {
      laborStartDateTime: '2019-07-10T11:23:00Z',
    };
    const wrapper = shallowWithIntl(<LaborOnsetPopup laborDetails={laborDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('LaborOnsetPopup component should match its snapshot', () => {
    const laborDetails = {
      laborStartDateTime: null,
    };
    const wrapper = shallowWithIntl(<LaborOnsetPopup laborDetails={laborDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
