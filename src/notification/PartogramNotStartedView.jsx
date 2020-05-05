import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import StatusView from 'terra-status-view';
import Text from 'terra-text';
import Card from 'terra-card/lib/Card';

const propTypes = {
  intl: intlShape.isRequired,
  eventDisplayName: PropTypes.string,
};

const PartogramNotStartedView = (props) => {
  const { intl, eventDisplayName } = props;
  const message = intl.formatMessage({ id: 'partogram-engine.invalid-result-charted' });
  const errorView = (
    <>
      <StatusView
        isAlignedTop={false}
        isGlyphHidden={false}
        variant="no-data"
        title={intl.formatMessage({ id: 'partogram-engine.no-partogram-start-charted-title' })}
      />
      <Card.Body isContentCentered>
        <Text fontSize={16}>
          {message.replace(message.slice(message.search('<'), message.search('>') + 1), eventDisplayName)}
        </Text>
      </Card.Body>
    </>
  );
  return (
    errorView
  );
};

PartogramNotStartedView.propTypes = propTypes;
export default injectIntl(PartogramNotStartedView);
