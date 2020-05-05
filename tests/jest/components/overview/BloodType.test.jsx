import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import BloodType from '../../../../src/components/overview/BloodType';

loadTranslation('../../../translations/en.json');

describe('BloodType component', () => {
  it('BloodType  component matches its snapshot', () => {
    const maternalDetails = {
      bloodType: 'Negative',
    };
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('BloodType  component matches its snapshot', () => {
    const maternalDetails = {
      bloodType: 'N',
    };
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('BloodType  component matches its snapshot', () => {
    const maternalDetails = null;
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('BloodType  component matches its snapshot', () => {
    const maternalDetails = {
      bloodType: null,
    };
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('BloodType  component matches its snapshot', () => {
    const maternalDetails = {};
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('BloodType  component matches its snapshot when the value is not negative', () => {
    const maternalDetails = {
      bloodType: 'P',
    };
    const wrapper = shallowWithIntl(<BloodType maternalDetails={maternalDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
});
