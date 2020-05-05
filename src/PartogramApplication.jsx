import React from 'react';
import PropTypes from 'prop-types';
import Base from 'terra-base';
import PartogramContainer from './PartogramContainer';

const propTypes = {
  locale: PropTypes.string,
  timezone: PropTypes.string,
  // Encounter for a specific patient
  encounterId: PropTypes.number.isRequired,
  // user configured view builder id in the bedrock
  configurationId: PropTypes.string,
  // Mpages Custom Props like criterion, patientId and others
  mpageCustomProps: PropTypes.object,
  // partogram js is embedded with partogram engine
  isEmbedded: PropTypes.bool,
};

// The disabling here is due to React-on-Rails not allowing default props
// Anyone mimicking this top level component should make it a class so that
// they can handle default props in the future.
// eslint-disable-next-line react/prefer-stateless-function
class PartogramApplication extends React.Component {
  render() {
    const {
      locale, timezone, encounterId, configurationId, mpageCustomProps, isEmbedded,
    } = this.props;
    return (
      <Base locale={locale}>
        <PartogramContainer
          encounterId={encounterId}
          configurationId={configurationId || (mpageCustomProps ? mpageCustomProps.criterion.category_mean : null)}
          timezone={timezone}
          key="PARTOGRAM_APP"
          isEmbedded={isEmbedded}
        />
      </Base>
    );
  }
}
PartogramApplication.defaultProps = { timezone: 'UTC', locale: 'en' };
PartogramApplication.propTypes = propTypes;
export default PartogramApplication;
