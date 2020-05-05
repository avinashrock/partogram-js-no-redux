
/* global browser, before */
/* global $ */

const testSuite = [{
  DESCRIPTION: 'Validate whether the patient is female or not.',
  URL: 'partogram-view-not-female',
  EXPECTED_TEXT: 'Partogram information not applicable.',
},
{
  DESCRIPTION: 'Validate whether the patient has active pregnancy or not.',
  URL: 'partogram-view-no-active-pregnancy',
  EXPECTED_TEXT: 'This patient does not have active pregnancy.',
},
{
  DESCRIPTION: 'Validate error in retrieving pregnancy data.',
  URL: 'partogram-view-error-retrieving-pregnancy',
  EXPECTED_TEXT: 'Error retrieving pregnancy data.',
},
{
  DESCRIPTION: 'Validate whether event for Partogram start is not configured.',
  URL: 'partogram-view-partogram-start-not-configured',
  EXPECTED_TEXT: 'The Partogram Start filter has not been properly configured. Contact your system administrator.',
},
{
  DESCRIPTION: 'Validate value not documented for Partogram start.',
  URL: 'partogram-view-partogram-start-not-documented',
  EXPECTED_TEXT: 'Partogram not started\nDocument a valid result to start the Partogram.',
},
{
  DESCRIPTION: 'Validate error fetching partogram base details.',
  URL: 'partogram-view-error-loading-partogram',
  EXPECTED_TEXT: 'Not available.',
},
{
  DESCRIPTION: 'Validate No partogram base details.',
  URL: 'partogram-view-no-partogram-response',
  EXPECTED_TEXT: 'Not available.',
},
{
  DESCRIPTION: 'Validate 500 - internal server error',
  URL: 'partogram-view-error-500',
  EXPECTED_TEXT: 'Internal Server Error',
},
{
  DESCRIPTION: 'Validate 400 - bad request.',
  URL: 'partogram-view-error-400',
  EXPECTED_TEXT: 'Incorrect parameters',
},
{
  DESCRIPTION: 'Validate 404 - No result found.',
  URL: 'partogram-view-error-404',
  EXPECTED_TEXT: 'No results Found',
},
{
  DESCRIPTION: 'Validate 401 - Unauthorized request.',
  URL: 'partogram-view-error-401',
  EXPECTED_TEXT: 'Unauthorized request',
},
];

describe('PartogramContentView ', () => {
  testSuite.forEach((test, index) => {
    it(`${index + 1}. ${test.DESCRIPTION}`, () => {
      browser.url(`#/tests/partogram-js/partogram-view/${test.URL}`);

      const $contentContainer = $('#partogramContent');
      expect($contentContainer.getText()).to.be.equal(test.EXPECTED_TEXT);

      const screenshots = browser.checkViewport();
      expect(screenshots).to.matchReference();
    });
  });
});
