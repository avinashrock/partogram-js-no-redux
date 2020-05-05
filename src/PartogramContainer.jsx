import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import partogramService from './service-factory';
import partogramUserContext from './partogramUserContext';
import partogramServiceEngine from './service-factory-engine';
import PartogramView from './PartogramView';
import withWorkflowContexts from './withWorkflowContexts';

const propTypes = {
  // EncounterId of patient
  encounterId: PropTypes.number,
  // This would be needed for translations to load as expected with in the component
  intl: intlShape.isRequired,
  // user configured view builder id in the bedrock
  configurationId: PropTypes.string,
  service: PropTypes.func,
  timezone: PropTypes.timezone,
  workflowAPI: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  orionRequestor: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  // partogram js is embedded with partogram engine
  isEmbedded: PropTypes.bool,
};

class PartogramContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceResponse: null,
      preferenceResponse: null,
      isLoading: true,
      isFailed: false,
    };
  }

  componentDidMount() {
    const {
      orionRequestor, encounterId, configurationId, service, isEmbedded,
    } = this.props;
    if (service) {
      const promiseAll = Promise.all([service.getPartogramBase(), service.getMpageSetting()]);
      promiseAll.then((response) => {
        this.setState({
          serviceResponse: response[0],
          preferenceResponse: response[1].data,
          isLoading: false,
          isFailed: false,
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          isFailed: true,
        });
      });
    } else if (isEmbedded) {
      const promiseAll = Promise.all([
        partogramServiceEngine.getPartogramBase(encounterId, configurationId),
        partogramServiceEngine.getMpageSetting(configurationId),
      ]);
      promiseAll.then((response) => {
        this.setState({
          serviceResponse: response[0],
          preferenceResponse: response[1].data,
          isLoading: false,
          isFailed: false,
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          isFailed: true,
        });
      });
    } else {
      const promiseAll = Promise.all([
        partogramService.getPartogramBase(encounterId, configurationId, orionRequestor),
        partogramService.getMpageSetting(configurationId),
      ]);
      promiseAll.then((response) => {
        this.setState({
          serviceResponse: response[0],
          preferenceResponse: response[1].data,
          isLoading: false,
          isFailed: false,
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          isFailed: true,
        });
      });
    }
  }

  render() {
    const {
      encounterId, configurationId, timezone, service, workflowAPI, orionRequestor, isEmbedded,
    } = this.props;
    const {
      serviceResponse, isFailed, isLoading, preferenceResponse,
    } = this.state;
    if (isFailed && !isLoading && workflowAPI) {
      workflowAPI.onInitialRequestCompleted({ error: this.props.intl.formatMessage({ id: 'partogram-engine.internal-server-error' }) });
    } else if (!isLoading && workflowAPI) {
      workflowAPI.onInitialRequestCompleted({ error: undefined });
    }
    const contextValue = {
      timezone,
      encounterId,
      configurationId,
      workflowAPI,
      orionRequestor,
      preferenceResponse,
      isEmbedded,
    };
    return (
      <partogramUserContext.Provider value={contextValue}>
        <PartogramView
          isFailed={isFailed}
          isLoading={isLoading}
          bedrockPreferenceResponse={preferenceResponse || null}
          partogramBaseResponse={serviceResponse ? serviceResponse.data : null}
          preferenceResponse={preferenceResponse ? preferenceResponse.data : null}
          errorResponse={serviceResponse ? serviceResponse.status : null}
          service={service}
        />
      </partogramUserContext.Provider>
    );
  }
}

PartogramContainer.propTypes = propTypes;
export default injectIntl(withWorkflowContexts(PartogramContainer));
