/* global browser, before */
/* global $ */

describe('Overview - Data', () => {
  beforeEach(() => {
    browser.url('#/tests/partogram-js/overview-view/overview-basic-layout');
    const screenshots = browser.checkViewport();
    expect(screenshots).to.matchReference();
  });
  it('Overview - Container - Validate whether Overview container has been loaded', () => {
    expect($('body .ContentContainer-module__main___Y84CU').isExisting()).to.equal(true);
  });

  it('Overview - Container - Validate whether the Overview Labels have been loaded.', () => {
    expect($('body .parto-text-align-right').isExisting()).to.equal(true);
  });

  it('Overview - Rupture of Membrance - When there are additional requirements, the label is displayed with fields.', () => {
    ($('body .Grid-module__column-tiny-12___mW0Ih:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(2)')).click();
    expect($('body .Spacer-module__padding-bottom-medium___sebX2:nth-child(1) > span:nth-child(1)').isExisting()).to.equal(true);
  });
});

describe('Overview - Blood Type', () => {
  beforeEach(() => {
    browser.url('#/tests/partogram-js/overview-view/overview-bloodtype-negative-indicator');
    const screenshots = browser.checkViewport();
    expect(screenshots).to.matchReference();
  });
  it('Overview - Blood Type - When blood type has negative in it, Warning Icon for negative RH factor is displayed. ', () => {
    expect($('body .Grid-module__column-tiny-12___mW0Ih:nth-child(3)').isExisting()).to.equal(true);
  });
  it('Overview - Blood Type - Validate whether the blood group is A negative', () => {
    expect($('body .Grid-module__column-tiny-12___mW0Ih:nth-child(3) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)').getText()).to.be.equal('A Negative');
  });
});

describe('Overview - No data', () => {
  beforeEach(() => {
    browser.url('#/tests/partogram-js/overview-view/overview-no-data');
    const screenshots = browser.checkViewport();
    expect(screenshots).to.matchReference();
  });
  it('Overview - Rupture of Membrane - When there are no additional requirements, the label is not displayed.', () => {
    expect($('body .Spacer-module__padding-bottom-medium___sebX2:nth-child(1) > span:nth-child(1)').isExisting()).to.equal(false);
  });
  it('Overview - Rupture of Membrane - Validate when the Rupture of Membrane values are not defined.', () => {
    expect($('body .Grid-module__column-tiny-12___mW0Ih:nth-child(2) > div:nth-child(1) > div:nth-child(2)').getText()).to.be.equal('--');
  });
});
