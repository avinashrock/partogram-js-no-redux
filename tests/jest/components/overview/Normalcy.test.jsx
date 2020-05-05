import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import Normalcy from '../../../../src/components/overview/Normalcy';

describe('Criticality component', () => {
  it('Criticality component matches its snapshot when the crticality is high', () => {
    const wrapper = shallowWithIntl(<Normalcy normalcy="HIGH" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Criticality component matches its snapshot when the crticality is high', () => {
    const wrapper = shallowWithIntl(<Normalcy normalcy="HIGH_CRITICAL" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Criticality component matches its snapshot when the crticality is high', () => {
    const wrapper = shallowWithIntl(<Normalcy normalcy="LOW" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Criticality component matches its snapshot when the crticality is high', () => {
    const wrapper = shallowWithIntl(<Normalcy normalcy="LOW_CRITICAL" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Criticality component matches its snapshot when the crticality is high', () => {
    const wrapper = shallowWithIntl(<Normalcy normalcy="NORMAL" />);
    expect(wrapper).toMatchSnapshot();
  });
});
