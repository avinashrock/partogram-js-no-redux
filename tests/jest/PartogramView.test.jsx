import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import PartogramView from '../../src/PartogramView';

loadTranslation('../../../translations/en.json');

describe('PartogramView component', () => {
  it('PartogramView component matches its snapshot', () => {
    const wrapper = shallowWithIntl(<PartogramView />);
    expect(wrapper).toMatchSnapshot();
  });
  it('PartogramView component loads successfuly', () => {
    const wrapper = shallowWithIntl(<PartogramView isLoading />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView fails', () => {
    const wrapper = shallowWithIntl(<PartogramView isFailed />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads with an error response', () => {
    const wrapper = shallowWithIntl(<PartogramView isFailed errorResponse={500} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads with an error response', () => {
    const wrapper = shallowWithIntl(<PartogramView isFailed errorResponse={404} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads with an error response', () => {
    const wrapper = shallowWithIntl(<PartogramView isFailed errorResponse={401} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads with an error response', () => {
    const wrapper = shallowWithIntl(<PartogramView isFailed errorResponse={400} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the timeline view successfully after receiving props', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: true,
        partogramStartDisplay: 'Parto Start Date,Time',
        partogramStartDateTime: '2019-04-07T10:30:00Z',
        pregnancyDetails: {
          isActivePregnancy: true,
        },
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error view when patient is not female', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: false,
        partogramStartDisplay: 'Parto Start Date,Time',
        partogramStartDateTime: '2019-04-07T10:30:00Z',
        pregnancyDetails: {
          isActivePregnancy: true,
        },
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error view when patient has no active pregnancy', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: true,
        partogramStartDisplay: 'Parto Start Date,Time',
        partogramStartDateTime: '2019-04-07T10:30:00Z',
        pregnancyDetails: {
          isActivePregnancy: false,
        },
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error view when partogramStartDisplay is null', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: true,
        partogramStartDisplay: null,
        partogramStartDateTime: '2019-04-07T10:30:00Z',
        pregnancyDetails: {
          isActivePregnancy: true,
        },
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error view when partogramStartDateTime is not charted', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: true,
        partogramStartDisplay: 'Parto Start Date,Time',
        partogramStartDateTime: null,
        pregnancyDetails: {
          isActivePregnancy: true,
        },
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error View when pregnancy details are null', () => {
    const partogramBaseResponse = {
      laborDetails: {
        isFemalePatient: true,
        partogramStartDisplay: 'Parto Start Date,Time',
        partogramStartDateTime: null,
        pregnancyDetails: null,
      },
    };
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('PartogramView loads the Error View when pregnancy details are null', () => {
    const partogramBaseResponse = null;
    const wrapper = shallowWithIntl(<PartogramView partogramBaseResponse={partogramBaseResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
});
