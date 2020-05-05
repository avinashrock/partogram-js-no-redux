import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import PregnancyDescriptor from '../../../../src/components/overview/PregnancyDescriptor';

loadTranslation('../../../translations/en.json');

describe('PregnancyDescriptor component', () => {
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: false,
        isMultiPara: true,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: true,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().setButtonNode();
    wrapper.instance().getButtonNode();
    wrapper.instance().handleButtonClick();
    wrapper.instance().handleRequestClose();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: false,
        isMultiPara: true,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: false,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: false,
        isMultiPara: false,
        isNulliPara: true,
        isPreviuosPregnancyUnknown: true,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: false,
        isMultiPara: false,
        isNulliPara: true,
        isPreviuosPregnancyUnknown: false,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: true,
        isMultiPara: false,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: true,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: null,
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('PregnancyDescriptor component should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        hadPreviousCSection: true,
        isMultiPara: false,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: false,
      },
    };
    const wrapper = shallowWithIntl(<PregnancyDescriptor pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
