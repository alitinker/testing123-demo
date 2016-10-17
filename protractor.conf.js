// conf.js
exports.config = {
  framework: 'jasmine',
  directConnect: true,

  //If you don't need tests to run in a particular order, you can use this instead:
  specs: ['test/e2e/**/*-spec.js'],

  rootElement: '[ng-app]',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 80000
  },
  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);
  }
}