import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Meows from '../../../../src/components/overview/Meows';

loadTranslation('../../../translations/en.json');

describe('Meows component should match its snapshot', () => {
  it('Meows should match its snapshot', () => {
    const maternalDetails = {
      bloodType: 'Neg',
      groupBStrepStatus: 'Positive',
      meowsScore: null,
      meowsAttributes: [
        {
          name: 'MEOWS Score',
          value: '2',
          unit: null,
          documentedDateTime: '2019-08-12T03:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
        {
          name: 'Score',
          value: '9',
          unit: null,
          documentedDateTime: '2019-08-010T13:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
        {
          name: 'Details',
          value: '10',
          unit: null,
          documentedDateTime: '2019-08-08T13:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    };
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<Meows maternalDetails={maternalDetails} />).shallow();
    console.error = originalError;
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().setButtonNode();
    wrapper.instance().getButtonNode();
    wrapper.instance().handleButtonClick();
    wrapper.instance().handleRequestClose();
  });
  it('Meows component should match its snapshot when maternal details is null', () => {
    const wrapper = shallowWithIntl(<Meows maternalDetails={null} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
