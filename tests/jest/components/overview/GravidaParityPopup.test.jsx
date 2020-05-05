import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import GravidaParityPopup from '../../../../src/components/overview/GravidaParityPopup';

loadTranslation('../../../translations/en.json');

describe('GravidaParaPopup component', () => {
  it('should match its snapshaot', () => {
    const pregnancyDetails = {
      history: {
        gravidaCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 1,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
      },
    };
    const wrapper = shallowWithIntl(<GravidaParityPopup pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('should match its snapshaot', () => {
    const pregnancyDetails = null;
    const wrapper = shallowWithIntl(<GravidaParityPopup pregnancyDetails={pregnancyDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
