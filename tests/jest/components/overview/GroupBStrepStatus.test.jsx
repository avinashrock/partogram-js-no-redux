import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import GroupBStrepStatus from '../../../../src/components/overview/GroupBStrepStatus';

loadTranslation('../../../translations/en.json');

describe('GroupBStrepStatus component', () => {
  it('GroupBStrepStatus component matches its snapshot', () => {
    let maternalDetails = {
      groupBStrepStatus: 'POSITIVE',
    };
    const wrapper = shallowWithIntl(<GroupBStrepStatus maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    maternalDetails = {
      groupBStrepStatus: 'P',
    };
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GroupBStrepStatus component matches its snapshot', () => {
    const maternalDetails = null;
    const wrapper = shallowWithIntl(<GroupBStrepStatus maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GroupBStrepStatus component matches its snapshot', () => {
    const maternalDetails = {};
    const wrapper = shallowWithIntl(<GroupBStrepStatus maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GroupBStrepStatus component matches its snapshot', () => {
    const maternalDetails = {
      groupBStrepStatus: 'N',
    };
    const wrapper = shallowWithIntl(<GroupBStrepStatus maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
});
