import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import TimelineView from '../../../src/application/TimelineView';

loadTranslation('../../../translations/en.json');

const requestor = new OrionRequestor({ withCredentials: true });

const contextValue = {
  timezone: 'America/Chicago',
  encounterId: '102',
  configurationId: 'viewBuilderId',
  workflowAPI: undefined,
  orionRequestor: requestor,
};

describe('TimelineView component renders without any failure', () => {
  it('the component matches its snapshot', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <TimelineView encounterId={101} partogramStartDateTime="2019-04-07T10:30:00Z" partogramStopDateTime={null} />
      </OrionRequestorContext.Provider>,
    );
    expect(wrapper.shallow()).toMatchSnapshot();
  });
  it('the component matches its snapshot when partogramStopDateTime is not null', () => {
    const wrapper = shallowWithIntl(
      <OrionRequestorContext.Provider value={contextValue}>
        <TimelineView encounterId={101} partogramStartDateTime="2019-04-07T10:30:00Z" partogramStopDateTime="2019-05-07T10:30:00Z" />
      </OrionRequestorContext.Provider>,
    );
    expect(wrapper.shallow()).toMatchSnapshot();
  });
});
