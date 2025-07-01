// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['detectBrowsers'],

    // configuration
    detectBrowsers: {
      // enable/disable, default is true
      enabled: true,
 
      // enable/disable phantomjs support, default is true
      usePhantomJS: true,
 
      // use headless mode, for browsers that support it, default is false
      preferHeadless: true,
 
      // post processing of browsers list
      // here you can edit the list of browsers used by karma
      postDetection: function(availableBrowsers) {
        /* Karma configuration with custom launchers
          customLaunchers: {
            IE9: {
              base: 'IE',
              'x-ua-compatible': 'IE=EmulateIE9'
            }
          }
        */
 
          //Add IE Emulation
          var result = availableBrowsers;
 
          if (availableBrowsers.indexOf('IE')>-1) {
            result.push('IE9');
          }
 
          //Remove PhantomJS if another browser has been detected
          if (availableBrowsers.length > 1 && availableBrowsers.indexOf('PhantomJS')>-1) {
            var i = result.indexOf('PhantomJS');
 
            if (i !== -1) {
              result.splice(i, 1);
            }
          }
 
          return result;
        }
    },
 
    plugins: [
      'karma-chrome-launcher',
      'karma-edge-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-safari-launcher',
      'karma-safaritechpreview-launcher',
      'karma-opera-launcher',
      'karma-phantomjs-launcher',
      'karma-detect-browsers'
    ]
  });
};