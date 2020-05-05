import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import responseRecord from './mockBaseData.json';


// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);


// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/patients/18/partogram').reply(200, {
  partogram: 'partogram.  Mock-Data.',
});

mock.onGet('/patients/100/sample-component').reply(200, {
  sampleComponent: responseRecord,
});

mock.onGet('/patients/200/partogram').reply(500);
