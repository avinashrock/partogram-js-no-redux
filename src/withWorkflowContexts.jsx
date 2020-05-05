import React from 'react';
import WorkflowContext from 'workflow-framework/lib/workflow-context';
import OrionRequestorContext from 'orion-application/lib/orion-requestor/OrionRequestorContext';

const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';

const withWorkflowContexts = (WrappedComponent) => {
  const WithWorkflowContextsComp = (props) => (
    <WorkflowContext.Consumer>
      {(workflowAPI) => (
        <OrionRequestorContext.Consumer>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {(orionRequestor) => <WrappedComponent workflowAPI={workflowAPI} orionRequestor={orionRequestor} {...props} />}
        </OrionRequestorContext.Consumer>
      )}
    </WorkflowContext.Consumer>
  );

  WithWorkflowContextsComp.displayName = `withWorkflowContexts(${getDisplayName(WrappedComponent)})`;
  WithWorkflowContextsComp.WrappedComponent = WrappedComponent;

  return WithWorkflowContextsComp;
};

export default withWorkflowContexts;
