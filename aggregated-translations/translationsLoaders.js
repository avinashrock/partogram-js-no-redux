'use strict';

var loadEnUSTranslations = function loadEnUSTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-US.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-US-translations');
};

var loadDeTranslations = function loadDeTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./de.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'de-translations');
};

var loadEnGBTranslations = function loadEnGBTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-GB.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-GB-translations');
};

var loadEsTranslations = function loadEsTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./es.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'es-translations');
};

var loadFrTranslations = function loadFrTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./fr.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'fr-translations');
};

var loadPtTranslations = function loadPtTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./pt.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'pt-translations');
};

var loadEnTranslations = function loadEnTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-translations');
};

var translationsLoaders = {
  'en-US': loadEnUSTranslations,
  'de': loadDeTranslations,
  'en-GB': loadEnGBTranslations,
  'es': loadEsTranslations,
  'fr': loadFrTranslations,
  'pt': loadPtTranslations,
  'en': loadEnTranslations
};

module.exports = translationsLoaders;