const navConfig = require('./navigation.config');

module.exports = {
  sideEffectImports: [
    '../mock/**/*.mock.js',
  ],
  appConfig: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de', 'en-GB', 'es', 'fr', 'pt'],
  },
  navConfig,
  filterSideMenu: true,
  hotReloading: false,
  generatePages: {
    searchPatterns: [
      {
        root: process.cwd(),
        entryPoint: 'src/terra-dev-site',
      },
    ],
  },
  extensions: {
    /** The url to link to github. If this is supplied a github extension will be display with a link to the supplied url.
     * Defaulted to the repository url specified in the <root_dir>/package.json.
     */
    gitHubUrl: 'https://github.cerner.com/aeon-womenshealth/partogram-js',
  },
};
