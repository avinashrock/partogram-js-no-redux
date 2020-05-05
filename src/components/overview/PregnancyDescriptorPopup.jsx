import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import Spacer from 'terra-spacer';
import Text from 'terra-text';

const propTypes = {
  intl: intlShape.isRequired,
};

class PregnancyDescriptorPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      intl,
    } = this.props;
    const popupContent = (
      <Spacer paddingLeft="large" paddingRight="small" paddingBottom="small" paddingTop="medium">
        <Text fontSize={12}>
          <Spacer paddingRight="small" isInlineBlock>
            <IconWarning />
          </Spacer>
          {intl.formatMessage({ id: 'partogram-engine.pregnancy-unknown' })}
        </Text>
      </Spacer>
    );
    return (popupContent);
  }
}

PregnancyDescriptorPopup.propTypes = propTypes;
export default injectIntl(PregnancyDescriptorPopup);
