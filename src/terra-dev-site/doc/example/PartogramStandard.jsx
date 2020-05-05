import React from 'react';
import OrionRequestor, { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import PartogramContainer from '../../../PartogramContainer';
// Mock data for loading the application without engine.
import partogramBaseData from '../../../../mock/mockBaseData.json';
import laborCurveData from '../../../../mock/mockLaborCurveData.json';
import mpageSettingData from '../../../../mock/mockMpageSetting.json';
import fhrData from '../../../../mock/mockFHRData.json';
import contractionData from '../../../../mock/mockContraction.json';

const getService = {
  getPartogramBase: () => ({ data: partogramBaseData, status: 200 }),
  getLaborAssessments: () => ({ data: laborCurveData, status: 200 }),
  getMpageSetting: () => ({ data: mpageSettingData, status: 200 }),
  getFetalHeartRate: () => ({ data: fhrData, status: 200 }),
  getUtrineAssessments: () => ({ data: contractionData, status: 200 }),
};

const requestor = new OrionRequestor({ withCredentials: true });

export default () => (
  <OrionRequestorContext.Provider value={requestor}>
    <PartogramContainer service={getService} timezone="America/Chicago" encounterId={102} locale="en-US" key="PARTOGRAM_APP" />
  </OrionRequestorContext.Provider>
);
