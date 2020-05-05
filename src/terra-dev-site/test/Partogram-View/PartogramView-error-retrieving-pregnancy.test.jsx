import React from 'react';
import PartogramView from '../../../PartogramView';


const mockResponse = {
  laborDetails: {
    isFemalePatient: true,
    pregnancyDetails: null,
    maternalDetails: {},
    fetalDetails: [],
    medicationDetails: {},
  },
};

export default () => (

  <PartogramView
    isFailed={false}
    isLoading={false}
    encounterId={1234}
    configurationId="VB_PARTOGRAM"
    partogramBaseResponse={mockResponse}
  />
);
