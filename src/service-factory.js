const partogramService = () => (
  {
    getPartogramBase: (encounterId, configurationId, orionRequestor) => (
      orionRequestor.get({
        url: `/encounters/${encounterId}/configurations/${configurationId}/partogram`,
        headers: { Accept: 'application/json' },
      })
    ),
    getLaborAssessments: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime, orionRequestor) => (
      orionRequestor.get({
        url: '/encounters/laborcurve',
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
    getFetalHeartRate: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime, orionRequestor) => (
      orionRequestor.get({
        url: '/encounters/getFetalAssessments',
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
    getUtrineAssessments: (encounterId, partogramStartDateTime, configurationId, partogramStopDateTime, orionRequestor) => (
      orionRequestor.get({
        url: '/encounters/contractions',
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
    getMpageSetting: (configurationId, orionRequestor) => (
      orionRequestor.get({
        url: `configurations/${configurationId}/partogram-preferences`,
        headers: {
          Accept: 'application/json',
        },
      })
    ),
  }
);

export default partogramService();
