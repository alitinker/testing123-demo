exports.config = {

  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['test/e2e/**/*_spec.js'],

  rootElement: '[ng-app]',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
