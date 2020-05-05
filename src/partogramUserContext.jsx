import React from 'react';

const partogramUserContext = React.createContext(
  // This context object is used to wrap the parent level application to set time zone
  // This could be used directly by child components as needed without explicitly chaining props
);
export default partogramUserContext;
