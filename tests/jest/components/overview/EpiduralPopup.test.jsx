import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import EpiduralPopup from '../../../../src/components/overview/EpiduralPopup';

loadTranslation('../../../translations/en.json');

describe('EpiduralPopup component', () => {
  it('should match its snapshaot', () => {
    const sortedEpiduralStartDetails = [{
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-29T04:30:00Z',
      dateTime: '2020-01-29T04:30:00Z',
    }];
    const sortedEpiduralDiscontinuedArray = [
      {
        display: 'Epidural Discontinued',
        type: 'EPIDURAL_DISCONTINUED',
        value: '2020-01-30T08:00:00Z',
        dateTime: '2020-01-30T08:00:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<EpiduralPopup
      sortedEpiduralStartDetails={sortedEpiduralStartDetails}
      sortedEpiduralDiscontinuedArray={sortedEpiduralDiscontinuedArray}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('should match its snapshaot', () => {
    const sortedEpiduralStartDetails = [{
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-29T04:30:00Z',
      dateTime: '2020-01-29T04:30:00Z',
    }, {
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-30T07:30:00Z',
      dateTime: '2020-01-30T04:30:00Z',
    },
    {
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-30T09:30:00Z',
      dateTime: '2020-01-30T11:30:00Z',
    }];
    const sortedEpiduralDiscontinuedArray = [
      {
        display: 'Epidural Discontinued',
        type: 'EPIDURAL_DISCONTINUED',
        value: '2020-01-30T08:00:00Z',
        dateTime: '2020-01-30T08:00:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<EpiduralPopup
      sortedEpiduralStartDetails={sortedEpiduralStartDetails}
      sortedEpiduralDiscontinuedArray={sortedEpiduralDiscontinuedArray}
    />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
