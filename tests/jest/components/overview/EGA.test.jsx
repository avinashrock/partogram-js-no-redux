import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import EGA from '../../../../src/components/overview/EGA';

loadTranslation('../../../translations/en-US.json');

describe('Testing Ega Cpmponent', () => {
  it('EGA component should match its snapshot with all the necessary props defined', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<EGA estimatedGestationalAge={300} allBabiesDelivered intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('EGA component should match its snapshot when all the babies are not delivered', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<EGA estimatedGestationalAge={300} allBabiesDelivered={false} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('EGA component should match its snapshot when estimatedGestationalAg is undefined or null', () => {
    const intl = {
      formatMessage: jest.fn(),
    };
    const wrapper = shallowWithIntl(<EGA estimatedGestationalAge={undefined} allBabiesDelivered={false} intl={intl} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
