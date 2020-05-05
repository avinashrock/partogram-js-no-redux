import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Epidural from '../../../../src/components/overview/Epidural';

loadTranslation('../../../translations/en.json');

describe('Epidural Component', () => {
  it('should match its snapshot when medicationDetails are present', () => {
    const medicationDetails = {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: '2019-07-10T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: '2019-07-18T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    };
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot medicationDetails is null', () => {
    const medicationDetails = null;
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot when epiduralDetails is null', () => {
    const medicationDetails = {
      epiduralDetails: [],
    };
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot when the type is not EPIDURAL_START', () => {
    const medicationDetails = {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL',
          value: '2019-07-10T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDUTAL',
          value: '2019-07-18T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    };
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot when Epidural start and discontinued are present', () => {
    const medicationDetails = {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: '2019-07-10T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: '2019-07-18T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    };
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot', () => {
    const medicationDetails = {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: '2019-07-10T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: '2019-07-18T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    };
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should match its snapshot', () => {
    const medicationDetails = {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: '2019-07-10T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: '2019-07-18T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    };
    const epiduralDetails = [
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
    const discontinuedDetails = [
      {
        display: 'Epidural Discontinued',
        type: 'EPIDURAL_DISCONTINUED',
        value: '2019-07-18T09:52:00Z',
        dateTime: '2019-07-26T15:00:00Z',
      },
      {
        display: 'Epidural Discontinued',
        type: 'EPIDURAL_DISCONTINUED',
        value: '2019-07-18T09:52:00Z',
        dateTime: '2019-08-26T15:00:00Z',
      },
    ];
    const wrapper = shallowWithIntl(<Epidural medicationDetails={medicationDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    wrapper.shallow().instance().setButtonNode();
    wrapper.shallow().instance().getButtonNode();
    wrapper.shallow().instance().handleButtonClick();
    wrapper.shallow().instance().handleRequestClose();
    wrapper.shallow().instance().sortEpiduralStartDetails(epiduralDetails);
    wrapper.shallow().instance().sortEpiduralStopDetails(discontinuedDetails);
  });
});
