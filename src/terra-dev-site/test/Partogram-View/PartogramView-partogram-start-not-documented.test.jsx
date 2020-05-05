import React from 'react';
import PartogramView from '../../../PartogramView';

const mockResponse = {

  laborDetails: {
    isFemalePatient: true,
    partogramStartDisplay: 'Parto Start Date,Time',
    partogramStartDateTime: null,
    partogramStopDisplay: null,
    partogramStopDateTime: null,
    laborStartDateTime: null,
    laborStopDateTime: null,
    pregnancyDetails: {
      isActivePregnancy: true,
      pregnancyId: 12956119,
      onsetDate: '2018-08-15T05:00:00Z',
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
      deliveryDateTime: '2018-12-13T12:27:19Z',
      hasDelivered: false,
      history: null,
    },
    maternalDetails: null,
    fetalDetails: null,
    medicationDetails: null,
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
