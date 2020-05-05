import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import PartogramApplication from '../../src/PartogramApplication';

loadTranslation('../../../translations/en-US.json');

it('should render a PartogramApplication with a placeholder', () => {
  const testApplication = (
    <PartogramApplication
      locale="en-US"
      timezone="timezone"
      encounterId={102}
    />
  );
  expect(shallowWithIntl(testApplication)).toMatchSnapshot();
});
