import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import StatusView from 'terra-status-view';
import PartogramStatusView from '../../../../src/notification/StatusView';

loadTranslation('../../../translations/en.json');

describe('Status View', () => {
  it('The status view for displaying the errors.', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<PartogramStatusView />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
});
