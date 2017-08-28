/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
{
  baseUrl: 'js',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
  //injector:mainReleasePaths
  {
     'knockout': '../node_modules/knockout/build/output/knockout-latest.debug',
      'mapping' : '../node_modules/knockout-mapping/dist/knockout.mapping',
      'jquery': '../node_modules/jquery/dist/jquery',
      'css': '../node_modules/require-css/css',
      'jqueryui-amd': '../node_modules/jquery-ui/ui',
      'ojs': '../node_modules/oraclejet/dist/js/libs/oj/min',
      'ojL10n': '../node_modules/oraclejet/dist/js/libs/oj/ojL10n',
      'ojtranslations': '../node_modules/oraclejet/dist/js/libs/oj/resources',
      'text': '../node_modules/requirejs-text/text',
      'promise': '../node_modules/es6-promise/dist/es6-promise',
      'hammerjs': '../node_modules/hammerjs/hammer',
      'signals': '../node_modules/signals/dist/signals',
      'ojdnd': '../node_modules/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
      'customElements': '../node_modules/oraclejet/dist/js/libs/webcomponents/CustomElements',
      'proj4': '../node_modules/oraclejet/dist/js/libs/proj4js/dist/proj4-src',
      'composites': 'composites/src',
      'common': 'common/src',
      'users': 'users/src',
      'demos': 'demos/src',
      'certification' :'certification/src',
      'jwt_decode': '../node_modules/jwt-decode/build/jwt-decode.min'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  }
}
);

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'appController', 'ojs/ojknockout',
  'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar'],
  function (oj, ko, app) { // this callback gets executed when all required modules are loaded

    $(function() {

      function init() {
        oj.Router.sync().then(
          function () {
            // Bind your ViewModel for the content of the whole page body.
            ko.applyBindings(app, document.getElementById('globalBody'));
          },
          function (error) {
            oj.Logger.error('Error in root start: ' + error.message);
          }
        );
      }

      // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready 
      // event before executing any code that might interact with Cordova APIs or plugins.
      if ($(document.body).hasClass('oj-hybrid')) {
        document.addEventListener("deviceready", init);
      } else {
        init();
      }

    });

  }
);
