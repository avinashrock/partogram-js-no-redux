import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import PartoOverLay from '../../../src/application/PartoOverlay';

describe('Overlay component renders without any failure', () => {
  it('the component matches its snapshot', () => {
    const wrapper = shallowWithIntl(
      <PartoOverLay />,
    );
    expect(wrapper.shallow()).toMatchSnapshot();
  });
});
