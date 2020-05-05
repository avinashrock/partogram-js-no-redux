import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import RuptureOfMembranePopup from '../../../../src/components/overview/RuptureOfMembranePopup';

loadTranslation('../../../translations/en.json');

describe('RuptureOfMembranePopup component', () => {
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation has values', () => {
    const additionalFetalInformation = [{
      name: 'name',
      value: '12',
      unit: 'bpm',
      documentedDateTime: '2019-06-26T12:00:00',
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="rom" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().getAdditionalFetalInformation(additionalFetalInformation, intl);
  });
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation is empty', () => {
    const additionalFetalInformation = [];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="rom" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().getAdditionalFetalInformation(additionalFetalInformation, intl);
  });
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation has the unit property as null', () => {
    const additionalFetalInformation = [{
      name: 'name',
      value: '12',
      unit: null,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="rom" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().getAdditionalFetalInformation(additionalFetalInformation, intl);
  });
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation when rom is undefined', () => {
    const additionalFetalInformation = [{
      name: 'name',
      value: '12',
      unit: null,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom={undefined} additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation when rom is --', () => {
    const additionalFetalInformation = [{
      name: 'name',
      value: '12',
      unit: null,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="--" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('RuptureOfMembranePopup should match its snapshot when additionalFetalInformation when rom is -- and additionalFetalInformation is empty', () => {
    const additionalFetalInformation = [];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="--" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('RuptureOfMembranePopup should match its snapshot when rom is of date time format and additionalFetalInformation is empty', () => {
    const additionalFetalInformation = [];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="2019-07-10T11:23:00Z" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('RuptureOfMembranePopup should match its snapshot rom is of date time format and additionalFetalInformation is not empty', () => {
    const additionalFetalInformation = [{
      name: 'name',
      value: '12',
      unit: null,
    }];
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<RuptureOfMembranePopup rom="2019-07-10T11:23:00Z" additionalFetalInformation={additionalFetalInformation} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
