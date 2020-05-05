import React from 'react';
import { shallowWithIntl, loadTranslation, mountWithIntl } from 'enzyme-react-intl';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
// Mock data for loading the application without engine.
import partogramBaseData from '../../mock/mockBaseData.json';
import laborCurveResponse from '../../mock/mockLaborCurveData.json';
import mpageSettingData from '../../mock/mockMpageSetting.json';
import PartogramContainer from '../../src/PartogramContainer';
import contractionData from '../../mock/mockContraction.json';

loadTranslation('../../../translations/en-US.json');
const getService = {
  getPartogramBase: () => ({ data: partogramBaseData, status: 200 }),
  getLaborAssessments: () => ({ data: laborCurveResponse, status: 200 }),
  getContraction: () => ({ data: contractionData, status: 200 }),
  getMpageSetting: () => ({ data: mpageSettingData, status: 200 }),
};

const requestor = new OrionRequestor({ withCredentials: true });


describe('PartogramContainer component', () => {
  it('PartogramContainer component should render correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const output = shallowWithIntl(<PartogramContainer service={getService} timezone="Asia/Calcutta" encounterId={102} locale="en-US" key="PARTOGRAM_APP" />);
    expect(output).toMatchSnapshot();
    console.error = originalError;
  });

  it('should be called with mocked service', () => {
    const testContainer = mountWithIntl(<PartogramContainer service={getService} timezone="Asia/Calcutta" encounterId={102} locale="en-US" key="PARTOGRAM_APP" />);
    expect(testContainer).toMatchSnapshot();
  });

  it('should be called with actual service', () => {
    const testContainer = mountWithIntl(
      <OrionRequestorContext.Provider value={requestor}>
        <PartogramContainer timezone="Asia/Calcutta" encounterId={102} locale="en-US" key="PARTOGRAM_APP" />
      </OrionRequestorContext.Provider>,
    );
    expect(testContainer).toMatchSnapshot();
  });
});
