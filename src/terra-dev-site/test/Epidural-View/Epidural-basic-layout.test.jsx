import React from 'react';
import Base from 'terra-base';
import PartogramView from '../../../PartogramView';
import partogramUserContext from '../../../partogramUserContext';
import contractionData from '../../../../mock/mockContraction.json';
import mpageSettingData from '../../../../mock/mockMpageSetting.json';
import partogramBaseData from '../../../../mock/mockBaseData.json';

const partoBaseResponse = {
  laborDetails: {
    isFemalePatient: true,
    partogramStartDisplay: 'Parto Start Date,Time',
    partogramStartDateTime: '2019-04-07T10:30:00Z',
    partogramStopDisplay: 'Parto Date,Time',
    partogramStopDateTime: '2019-12-17T10:30:00Z',
    laborStartDateTimeDisplay: 'Labor Start',
    laborStartDateTime: '2019-10-07T19:40:00.00Z',
    laborStopDateTimeDisplay: 'Labor Stop',
    laborStopDateTime: null,
    pregnancyDetails: {
      isActivePregnancy: true,
      pregnancyId: 12956119,
      onsetDate: '2018-08-15T05:00:00Z',
      estimatedGestationalAge: 300,
      estimatedDeliveryDate: '2019-05-22T05:00:00Z',
      deliveryDateTime: '2018-12-13T12:27:19Z',
      hasDelivered: false,
      history: {
        gravidaCount: 0,
        paraCount: 1,
        paraFullTermCount: 0,
        paraPrematureCount: 0,
        abortionsCount: 0,
        livingCount: 0,
        ectopicCount: 1,
        spontaneousAbortionCount: 0,
        inducedAbortionCount: 0,
        multipleBirth: 1,
        hadPreviousCSection: true,
        hadAllCSection: false,
        isMultiPara: false,
        isNulliPara: false,
        isPreviuosPregnancyUnknown: true,
      },
    },
    maternalDetails: {
      bloodType: 'A negative',
      groupBStrepStatus: 'O neg',
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
      {
        dynamicLabel: 'Baby A',
        dynamicLabelId: 262983812,
        egaAtDelivery: 300,
        laborStopDateTime: '2019-10-14T13:31:00Z',
        deliveryDateTime: '2019-10-14T13:31:00Z',
        ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
        additionalFetalInformation: [
          {
            name: 'FHR Baseline',
            value: 35,
            unit: 'bpm',
            documentedDateTime: '2019-08-20T05:00:00Z',
            documentedBy: null,
            isResultModified: false,
          },
        ],
      },
      {
        dynamicLabel: 'Baby B',
        dynamicLabelId: 262983812,
        egaAtDelivery: 300,
        laborStopDateTime: '2019-10-14T13:31:00Z',
        deliveryDateTime: '2019-10-14T13:31:00Z',
        ruptureOfMembraneDateTime: '2019-10-14T13:31:00Z',
        additionalFetalInformation: [
          {
            name: 'FHR Baseline',
            value: 35,
            unit: 'bpm',
            documentedDateTime: '2019-08-20T05:00:00Z',
            documentedBy: null,
            isResultModified: false,
          },
        ],
      },
    ],
    additionalClinicalDetails: [
      {
        eventAttributes: [
          {
            dynamicLabel: null,
            dynamicLabelId: 0,
            name: 'Parto ABO only',
            value: 'A',
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
            value: '2019-08-19T09:00:00Z',
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
            value: '2019-08-19T09:00:00Z',
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
            value: '2019-10-01T15:22:00Z',
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
            value: '0',
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
          value: '2019-12-15T11:23:00Z',
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

const preferenceResponse = {
  id: 'VB_MLDPARTOGRAMVB',
  name: 'MLDPartogramVB',
  type: '40088455',
  componentsConfigurations: [
    {
      id: 'MP_VB_WF_PARTO_OVERVIEW',
      name: 'Partogram Overview',
      label: 'Overview',
      sequence: 10,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [],
    },
    {
      id: 'MP_VB_WF_PARTO_FHR',
      name: 'Partogram Fetal Heart Rate',
      label: 'Fetal Heart Rate',
      sequence: 2,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [],
    },
    {
      id: 'MP_VB_WF_PARTO_CONTRACT',
      name: 'Partogram Contractions',
      label: 'Contractions',
      sequence: 1,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [
        {
          id: 'WF_PARTO_CONTRACT_STR_NOMEN',
          display: null,
          filterNomens: [
            {
              mnemonic: 'Strong',
              display: 'Strong value',
              displayCode: 960865,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_STR_LABEL',
          display: 'Unbearable',
          filterNomens: [
            {
              mnemonic: null,
              display: null,
              displayCode: null,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_MOD_NOMEN',
          display: null,
          filterNomens: [
            {
              mnemonic: 'Moderate',
              display: 'Moderate value',
              displayCode: 960970,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_MOD_LABEL',
          display: 'Intense',
          filterNomens: [
            {
              mnemonic: null,
              display: null,
              displayCode: null,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_WK_NOMEN',
          display: null,
          filterNomens: [
            {
              mnemonic: 'Mild',
              display: 'Mild value',
              displayCode: 5133252,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_WK_LABEL',
          display: 'Bearable',
          filterNomens: [
            {
              mnemonic: null,
              display: null,
              displayCode: null,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_NP_NOMEN',
          display: null,
          filterNomens: [
            {
              mnemonic: 'NotPalpable',
              display: 'NotPalpable value',
              displayCode: 9498979,
            },
          ],
        },
        {
          id: 'WF_PARTO_CONTRACT_NP_LABEL',
          display: 'Tangible',
          filterNomens: [
            {
              mnemonic: null,
              display: null,
              displayCode: null,
            },
          ],
        },
      ],
    },
    {
      id: 'MP_VB_WF_PARTO_LABOR',
      name: 'Partogram Labor Curve',
      label: 'Partogram Labor Curve',
      sequence: 3,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [],
    },
    {
      id: 'MP_VB_WF_PAGE_LEVEL',
      name: 'Workflow MPage-level Settings',
      label: 'Workflow MPage-level Settings',
      sequence: 9,
      isFilterConfigured: true,
      metaData: [],
      filterDetails: [],
    },
  ],
};

const getService = {
  getPartogramBase: () => ({ data: partogramBaseData, status: 200 }),
  getContraction: () => ({ data: contractionData, status: 200 }),
  getMpageSetting: () => ({ data: mpageSettingData, status: 200 }),
};

export default () => (
  <Base locale="en-US">
    <partogramUserContext.Provider value={{ timezone: 'Asia/Calcutta', preferenceResponse }}>
      <PartogramView
        isFailed={false}
        isLoading={false}
        encounterId={1234}
        partogramBaseResponse={partoBaseResponse}
        service={getService}
      />
    </partogramUserContext.Provider>
  </Base>
);
