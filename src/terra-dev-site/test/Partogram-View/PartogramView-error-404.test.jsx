import React from 'react';
import PartogramView from '../../../PartogramView';


export default () => (

  <PartogramView
    isFailed
    isLoading={false}
    encounterId={1234}
    configurationId="VB_PARTOGRAM"
    partogramBaseResponse={null}
    errorResponse={404}
  />
);
