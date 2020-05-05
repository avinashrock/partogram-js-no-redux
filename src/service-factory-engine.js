import axios from 'axios';

const partogramServiceEngine = () => (
  {
    getPartogramBase: (encounterId, configurationId) => (
      axios.get(`/encounters/${encounterId}/configurations/${configurationId}/partogram`, {
        headers: {
          Accept: 'application/json',
        },
      })
    ),
    getLaborAssessments: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime) => (
      axios.get('/encounters/laborcurve', {
        params: {
          encounterId,
          partogramStartDateTime,
          configurationId,
          partogramStopDateTime,
        },
        headers: {
          Accept: 'application/json',
        },
      })
    ),
    getFetalHeartRate: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime) => (
      axios.get('/encounters/getFetalAssessments', {
        params: {
          encounterId,
          partogramStartDateTime,
          configurationId,
          partogramStopDateTime,
        },
        headers: {
          Accept: 'application/json',
        },
      })
    ),
    getUtrineAssessments: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime) => (
      axios.get('/encounters/contractions', {
        params: {
          encounterId,
          partogramStartDateTime,
          configurationId,
          partogramStopDateTime,
        },
        headers: {
          Accept: 'application/json',
        },
      })
    ),
    getMpageSetting: (configurationId) => (
      axios.get(`/configurations/${configurationId}/partogram-preferences`, {
        headers: {
          Accept: 'application/json',
        },
      })
    ),
  }
);

export default partogramServiceEngine();
