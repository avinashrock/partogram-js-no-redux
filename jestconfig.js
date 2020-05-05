module.exports = {
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  roots: [process.cwd()],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(svg|jpg|png|md)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    intlLoaders: 'enzyme-react-intl',
  },
  modulePaths: [
    'aggregated-translations',
  ],
  testURL: 'http://localhost',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  coverageDirectory: 'target/reports/coverage',
  coveragePathIgnorePatterns: [
    'src/site/*.*',
  ],
  coverageReporters: [
    'html',
    'lcov',
    'cobertura',
    'text-summary',
  ],
  globalSetup: './jestglobalsetup.js',
  // This allows jest to resolve files from the generated aggregated-translations in addition to node_modules
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
};
