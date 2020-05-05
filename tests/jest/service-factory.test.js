import partogramServiceFactory from '../../src/service-factory';

let mockOrionRequestorContextRequest;
let mockCancelRequest;

const mockOrionRequestor = {
  get: () => ({
    request: mockOrionRequestorContextRequest,
    cancelRequest: mockCancelRequest,
  }),
};

const mockContractionOrionRequestor = {
  get: () => ({
    request: mockOrionRequestorContextRequest,
    cancelRequest: mockCancelRequest,
  }),
};

describe('partogramService', () => {
  it('should return the appropriate value on success', () => {
    mockOrionRequestor.get({
      url: '/encounters/102/configurations/viewBuilderId/partogram',
      headers: { Accept: 'application/json' },
    });
    expect(partogramServiceFactory.getPartogramBase(102, 'viewBuilderId', mockOrionRequestor)).toMatchSnapshot();
  });
  it('should return the appropriate value on success', () => {
    mockOrionRequestor.get({
      url: '/encounters/getFetalAssessments',
      headers: { Accept: 'application/json' },
    });
    expect(partogramServiceFactory.getFetalHeartRate(102, '2019-12-17T10:30:00Z', 'viewBuilderId', '2019-12-17T10:30:00Z', mockOrionRequestor)).toMatchSnapshot();
  });
});
