import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import GravidaParityInformation from '../../../../src/components/overview/GravidaParityInformation';

loadTranslation('../../../translations/en.json');

describe('GravidaParityInformation component', () => {
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: true,
        isNulliPara: false,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    wrapper.shallow().instance().setButtonNode();
    wrapper.shallow().instance().getButtonNode();
  });
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: null,
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: false,
        isNulliPara: false,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: true,
        isNulliPara: true,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: true,
        isNulliPara: true,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />).shallow();
    wrapper.instance().handleButtonClick();
  });
  it('GravidaParityInformation should match its snapshot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: true,
        isNulliPara: true,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityInformation pregnancyDetails={pregnancyDetails} />).shallow();
    wrapper.instance().handleRequestClose();
  });
});
