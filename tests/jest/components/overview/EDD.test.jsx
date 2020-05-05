import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import EDD from '../../../../src/components/overview/EDD';

describe('EDD component', () => {
  it('EDD component should match its snapshot when estimatedDeliveryDate is not null or undefined ', () => {
    const wrapper = shallowWithIntl(<EDD estimatedDeliveryDate="2019-08-20T05:00:00Z" timezone="Asia/Calcutta" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('EDD component should match its snapshot whem all babies are not delivered', () => {
    const wrapper = shallowWithIntl(<EDD estimatedDeliveryDate={null} timezone="Asia/Calcutta" />);
    expect(wrapper).toMatchSnapshot();
  });
});
