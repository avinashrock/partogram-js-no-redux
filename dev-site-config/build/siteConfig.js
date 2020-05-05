 import settingsConfig from './settingsConfig';
 import nameConfig from './nameConfig';
 import menuItems from './menuItems';
 import contentConfig from './contentConfig';
 import navigationItems from './navigationItems';
 import extensionsConfig from './extensionsConfig';
 import Component7 from '/Users/ap062035/Documents/dev-merge/partogram-js/mock/Partogram.mock.js';
 import placeholderSrc from '/Users/ap062035/Documents/dev-merge/partogram-js/node_modules/terra-dev-site/terra.png';

 export default {
   'nameConfig': nameConfig,
   'settingsConfig': settingsConfig,
   'menuItems': menuItems,
   'contentConfig': contentConfig,
   'navigationItems': navigationItems,
   'indexPath': '/home',
   'capabilities': {
      '/home': {},
      '/components': { 'devTools': true },
      '/tests': { 'devTools': true },
      '/evidence': {}
   },
   'extensions': extensionsConfig,
   'placeholderSrc': placeholderSrc,
   'apps': [],
   'basename': ''
};
