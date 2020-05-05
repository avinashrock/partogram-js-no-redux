import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import intl from 'react-intl';
import OverviewPopup from '../../../../src/components/overview/OverviewPopup';

loadTranslation('../../../translations/en.json');

describe('OverviewPopup component', () => {
  const additionalFetalInformation = [
    {
      name: 'name',
      value: '12',
      unit: 'bpm',
      documentedDateTime: '2019-08-12T03:00:00Z',
    },
  ];
  const pregnancyDetails = {
    history: {
      gravidaCount: 0,
      paraFullTermCount: 0,
      paraPrematureCount: 0,
      abortionsCount: 0,
      ectopicCount: 1,
      spontaneousAbortionCount: 0,
      inducedAbortionCount: 0,
      multipleBirth: 1,
      isPreviuosPregnancyUnknown: true,
    },
  };
  const laborDetails = {
    laborStartDateTime: '2019-08-12T03:00:00Z',
  };
  const maternalDetails = {
    meowsAttributes: [
      {
        name: 'Meow Score',
        value: '2',
        unit: null,
        documentedDateTime: '2019-08-12T03:00:00Z',
        documentedBy: null,
        isResultModified: false,
      },
    ],
  };
  const sortedEpiduralArray = [
    {
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-29T04:30:00Z',
      dateTime: '2020-01-29T04:30:00Z',
    },
    {
      type: 'EPIDURAL_START',
      display: 'Epidural Start',
      value: '2020-01-29T04:30:00Z',
      dateTime: '2020-01-29T04:30:00Z',
    },
  ];
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="rom"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="gravida-para"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="preg-descriptor"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="labor-onset"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="meows"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
  it('OverviewPopup component should match its snapshot', () => {
    const wrapper = shallowWithIntl(<OverviewPopup
      pregnancyDetails={pregnancyDetails}
      maternalDetails={maternalDetails}
      laborStartDateTime={laborDetails}
      additionalFetalInformation={additionalFetalInformation}
      sortedEpiduralArray={sortedEpiduralArray}
      durationLimitExceeded
      attachmentBehavior="auto"
      contentAttachment="middle left"
      isArrowDisplayed
      isPopupOpen
      targetRef={jest.fn()}
      onRequestClose={jest.fn()}
      intl={intl}
      type="epidural"
    />).first().shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
