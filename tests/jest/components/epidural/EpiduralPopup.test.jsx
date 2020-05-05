import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import EpiduralPopup from '../../../../src/components/overview/EpiduralPopup';

loadTranslation('../../../translations/en.json');

describe('Epidural Popup should match its snapshot', () => {
  it('Epidural Popup matches its snapshot when it receives the props', () => {
    const sortedEpiduralDetails = [
      {
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      },
      {
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-08-26T08:00:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<EpiduralPopup sortedEpiduralStartDetails={sortedEpiduralDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('Epidural Popup matches its snapshot when it receives the props', () => {
    const sortedEpiduralDetails = [
      {
        display: 'Epidural Start',
        type: 'EPIDURAL_START',
        value: '2019-07-10T11:23:00Z',
        dateTime: '2019-07-26T08:00:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<EpiduralPopup sortedEpiduralStartDetails={sortedEpiduralDetails} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
