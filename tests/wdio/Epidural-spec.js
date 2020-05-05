/* global browser, before */
/* global $ */

describe('Epidural Component', () => {
  beforeEach(() => {
    browser.url('#/tests/partogram-js/epidural-view/epidural-basic-layout');
    const screenshots = browser.checkViewport();
    expect(screenshots).to.matchReference();
  });
  it('1. Validate whether the graph container has been loaded', () => {
    expect($('body .parto-epidural-graph .carbon-graph-container').isExisting()).to.equal(true);
  });
  it('2. Validate whether the graph canvas has been loaded', () => {
    expect($('body .parto-epidural-graph .carbon-graph-canvas').isExisting()).to.equal(true);
  });
  it('3. Validate whether the legend for the Epidural is loaded.', () => {
    expect($('body .parto-epidural-legend').isExisting()).to.equal(true);
  });
  it('4. Validate whether the mock data is loaded and displayed on the graph.', () => {
    expect($('body .parto-epidural-graph .carbon-point').isExisting()).to.equal(true);
  });
  it('5. Validate whether the X-axis is hidden from the graph.', () => {
    expect($('body .parto-epidural-graph .carbon-axis carbon-axis-x').isExisting()).to.equal(false);
  });
  it('6. Validate whether there are different data points on the graph.', () => {
    expect($('body .parto-epidural-graph .carbon-data-points-group').isExisting()).to.equal(true);
  });
  it('7. Validate epidural graph is not loaded when epidural details are empty.', () => {
    browser.url('#/tests/partogram-js/epidural-view/epidural-no-data');
    expect($('body .parto-epidural-graph').isExisting()).to.equal(false);
  });
});
