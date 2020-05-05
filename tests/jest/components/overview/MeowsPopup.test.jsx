import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import MeowsPopup from '../../../../src/components/overview/MeowsPopup';

describe('MeowsPopup component', () => {
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [{
        name: 'Meow Score',
        value: '2',
        unit: 'bpm',
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: true,
      }],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [{
        name: 'Meow Score',
        value: '2',
        unit: 'bpm',
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: false,
      }],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [{
        name: 'Meow Score',
        value: 9,
        unit: null,
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: false,
      }],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [{
        name: 'Meow Score',
        value: 9,
        unit: null,
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: true,
      }],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [{
        name: 'Meow Score',
        value: null,
        unit: null,
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: true,
      }],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('MeowsPopup should match its snapshot', () => {
    const maternalDetails = {
      meowsAttributes: [],
    };
    const wrapper = shallowWithIntl(<MeowsPopup maternalDetails={maternalDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
});
