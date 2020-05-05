import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import PartogramNotStartedView from '../../../../src/notification/PartogramNotStartedView';

loadTranslation('../../../translations/en.json');

// To check the partogram not started component

describe('PartogramNotStartedView', () => {
  it('If the Partogram is not started, the partogram view must match the PartogramNotStartedView', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<PartogramNotStartedView />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
});
