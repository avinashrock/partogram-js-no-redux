import React from 'react';
import PartogramView from '../../../PartogramView';


const mockResponse = {
  laborDetails: {
    isFemalePatient: null,
    pregnancyDetails: {},
    maternalDetails: {},
    fetalDetails: [],
    medicationDetails: {},
  },
};

export default () => (

  <PartogramView
    isFailed
    isLoading={false}
    encounterId={1234}
    configurationId="VB_PARTOGRAM"
    partogramBaseResponse={mockResponse}
  />
);
