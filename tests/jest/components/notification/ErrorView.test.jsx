import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import ErrorView from '../../../../src/notification/ErrorView';

loadTranslation('../../../translations/en.json');

describe('ErrorView', () => {
  it('ErrorView matches its snapshot', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<ErrorView />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
});
