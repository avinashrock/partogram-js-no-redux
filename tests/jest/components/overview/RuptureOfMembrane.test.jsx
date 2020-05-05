import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import RuptureOfMembrane from '../../../../src/components/overview/RuptureOfMembrane';

loadTranslation('../../../translations/en.json');

describe('RuptureOfMembrane', () => {
  it('RuptureOfMembrane component should match its snapshot', () => {
    const romData = [
      {
        romLabel: 'Rupture of Membrane', value: undefined,
      },
      {
        babyLabel: 'Baby B',
        babyValue: '--',
        ruptureOfMembraneDateTime: '--',
        additionalFetalInformation: [{
          name: 'FHR Baseline',
          value: 35,
          unit: 'bpm',
          documentedDateTime: '2019-08-20T05:00:00Z',
          documentedBy: null,
          isResultModified: false,
        }],
      },
    ];
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<RuptureOfMembrane
      romData={romData}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
    wrapper.instance().renderRomData(romData);
    wrapper.instance().getButtonNode();
    wrapper.instance().setButtonNode();
  });
  it('RuptureOfMembrane component should match its snapshot when value is -- ', () => {
    const romData = [
      {
        label: 'Rupture of Membrane', value: '--',
      },
    ];
    const wrapper = shallowWithIntl(<RuptureOfMembrane
      romData={romData}
    />).shallow();
    wrapper.instance().handleButtonClick();
    wrapper.instance().handleRequestClose();
    expect(wrapper).toMatchSnapshot();
  });
});
