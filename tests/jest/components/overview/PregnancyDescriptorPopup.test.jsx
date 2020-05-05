import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import PregnancyDescriptorPopup from '../../../../src/components/overview/PregnancyDescriptorPopup';

loadTranslation('../../../translations/en.json');

describe('PregnancyDescriptorPopup component', () => {
  it('PregnancyDescriptorPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<PregnancyDescriptorPopup />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
