import React from 'react';
import Base from 'terra-base';
import PartogramView from '../../../PartogramView';
import partogramUserContext from '../../../partogramUserContext';

const partoBaseResponse = {
  laborDetails: {
    isFemalePatient: true,
    partogramStartDisplay: 'Parto Start Date,Time',
    partogramStartDateTime: '2019-04-07T10:30:00Z',
    partogramStopDisplay: 'Parto Date,Time',
    partogramStopDateTime: '2019-12-17T10:30:00Z',
    laborStartDateTimeDisplay: 'Labor Start',
    laborStartDateTime: null,
    laborStopDateTimeDisplay: 'Labor Stop',
    laborStopDateTime: null,
    pregnancyDetails: {
      isActivePregnancy: true,
      pregnancyId: 12956119,
      onsetDate: '2018-08-15T05:00:00Z',
      estimatedGestationalAge: null,
      estimatedDeliveryDate: null,
      deliveryDateTime: '2018-12-13T12:27:19Z',
      hasDelivered: false,
      history: {
        gravidaCount: 0,
        paraCount: 0,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 0,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 0,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: false,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: false,
      },
    },
    maternalDetails: {
      bloodType: null,
      groupBStrepStatus: null,
      meowsScore: null,
      meowsAttributes: [
        {
          name: 'Meow Score',
          value: '5',
          unit: 'bpm',
          documentedDateTime: null,
          documentedBy: null,
          isResultModified: true,
        },
        {
          name: 'Score',
          value: '9',
          unit: null,
          documentedDateTime: '2019-08-010T13:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
        {
          name: 'Details',
          value: '10',
          unit: null,
          documentedDateTime: '2019-08-08T13:00:00Z',
          documentedBy: null,
          isResultModified: false,
        },
      ],
    },
    fetalDetails: [
    ],
    additionalClinicalDetails: [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: null,
            unit: '-',
            documentedDateTime: '2019-11-22T07:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: 'Baby A',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
          {
            dynamicLabel: 'Baby B',
            dynamicLabelId: 262983812,
            name: 'Parto ROM Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-08-19T09:00:00Z',
            documentedBy: null,
            isResultModified: false,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto Start Date,Time',
            value: null,
            unit: null,
            documentedDateTime: '2019-10-15T15:22:00Z',
            documentedBy: null,
            isResultModified: true,
            criticality: null,
          },
        ],
      },
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'MEOWS Score',
            value: null,
            unit: 'bpm',
            documentedDateTime: '2019-11-22T06:00:00Z',
            documentedBy: null,
            isResultModified: true,
            criticality: null,
          },
        ],
      },
    ],
    medicationDetails: {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: null,
          dateTime: '2019-10-26T08:00:00Z',
        },
        {
          display: 'Epidural Bolus, Anesthesia',
          type: 'EPIDURAL_BOLUS_ANESTHESIA',
          value: '2019-12-17T09:33:00Z',
          dateTime: '2019-07-26T10:00:00Z',
        },
        {
          display: 'Epidural Bolus, Patient',
          type: 'EPIDURAL_BOLUS_PATIENT',
          value: '2019-12-17T09:52:00Z',
          dateTime: '2019-07-26T14:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: null,
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
      oxytocinDetails: [
        {
          oxytocinName: 'Increase',
          isDiscontinued: false,
          discontinuedDateTime: null,
          doseDetails: [
            {
              value: '5',
              dateTime: '2019-07-26T15:00:00Z',
            },
          ],
        },
      ],
    },
  },
};

export default () => (
  <Base locale="en-US">
    <partogramUserContext.Provider value={{ timezone: 'Asia/Calcutta' }}>
      <PartogramView
        isFailed={false}
        isLoading={false}
        encounterId={1234}
        partogramBaseResponse={partoBaseResponse}
      />
    </partogramUserContext.Provider>
  </Base>
);
