import React from 'react';
import StatusView from 'terra-status-view';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';

const PartoOverlay = () => (
  <>
    <LoadingOverlay isOpen isAnimated isRelativeToContainer zIndex="6000" />
    <StatusView
      variant="no-data"
    />
  </>
);

export default PartoOverlay;
