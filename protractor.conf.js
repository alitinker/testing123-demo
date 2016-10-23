// conf.js
exports.config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'phantomjs'
  },

  //If you don't need tests to run in a particular order, you can use this instead:
  specs: ['test/e2e/**/*-spec.js'],

  rootElement: '[ng-app]',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 80000
  },
  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);

    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
}