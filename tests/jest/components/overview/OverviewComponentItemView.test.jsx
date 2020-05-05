import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import OverviewComponentItemView from '../../../../src/components/overview/OverviewComponentItemView';

describe('OverviewComponentItemView component', () => {
  it('OverviewComponentItemView matches its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewComponentItemView label="name" value="string" isPaddingRequired={false} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewComponentItemView matches its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewComponentItemView label="name" value={undefined} isPaddingRequired={false} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewComponentItemView matches its snapshot', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<OverviewComponentItemView label="name" value={undefined} isPaddingRequired />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
});
