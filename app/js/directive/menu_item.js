'use strict';

module.exports = function() {
return {
         restrict: 'E',
         template: '<div ng-click=\'navigate()\' ng-transclude></div>',
         transclude: true,
         scope: {
             hash: '@'
         },
         link: function($scope) {
             $scope.navigate = function() {
                 window.location.hash = $scope.hash;
             };
         }
     };
};