'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');

var angular = require('angular');

require('angular-route');
require('angularjs-slider');

var app = angular.module('courseReserveApp', [ 'ngRoute']);

app.run(function($rootScope) {
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 27) {
            $rootScope.$broadcast('escapePressed', e.target);
          }
    });

    document.addEventListener('click', function(e) {
        $rootScope.$broadcast('documentClicked', e.target);
    });
});

app.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');
require('./directive');

app.config(function($routeProvider) {

  $routeProvider.when('/info', {
    templateUrl: 'views/info.html',
    controller: 'ReserveCtrl',
  })
  .when('/', {
    templateUrl: 'views/reserve.html',
    controller: 'ReserveCtrl',
  })
  .when('/my-reserves', {
    templateUrl: 'views/my-reserves.html',
    controller: 'ReserveCtrl',
  })
  .otherwise({
    redirectTo: '/',
  });
});
