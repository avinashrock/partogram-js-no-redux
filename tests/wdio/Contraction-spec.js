/* global browser, before */
/* global $ */

describe('Contractoin Component', () => {
  beforeEach(() => {
    browser.url('#/tests/partogram-js/contraction-view/contraction-baisc-layout');
    const screenshots = browser.checkViewport();
    expect(screenshots).to.matchReference();
  });
  it('1. Validate whether the graph container has been loaded', () => {
    expect($('body .parto-contraction-graph .carbon-graph-container').isExisting()).to.equal(true);
  });

  it('2. Validate whether the graph display container has been loaded', () => {
    expect($('body .parto-contraction-graph .carbon-graph-container').isExisting()).to.equal(true);
  });

  it('3. Validate whether the Y-axis label is equal to "Contraction Frequency" ', () => {
    expect($('body .parto-contraction-graph .carbon-y-axis-label').getText()).to.be.equal('Contraction Frequency');
  });

  it('4. Validate whether the legend for the Contraction Component is loaded.', () => {
    expect($('body .parto-contraction-legend').isExisting()).to.equal(true);
  });

  it('5. Validate whether the mock data is loaded and displayed on the graph.', () => {
    expect($('body .carbon-bubble-graph-content').isExisting()).to.equal(true);
  });

  it('6. Validate whether the X-axis is hidden from the graph.', () => {
    expect($('body .parto-contraction-graph .carbon-axis carbon-axis-x').isExisting()).to.equal(false);
  });

  it('7. Validate whether there are different bubble data points on the graph.', () => {
    expect($('body .parto-contraction-graph .carbon-data-points-group').isExisting()).to.equal(true);
  });
  it('8. Validate when there is no data in the contraction.', () => {
    browser.url('#/tests/partogram-js/contraction-view/contraction-no-data');
    const element = $('body .StatusView-module__outer-view___2cE2S');
    element.waitForExist(5000);
    expect($('body .StatusView-module__outer-view___2cE2S').getText()).to.be.equal('No results Found');
  });
});
