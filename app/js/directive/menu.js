'use strict';

module.exports = function() {
  return {
        restrict: 'E',
        template: '<div id=\"menu-inner\" ng-class=\"{ show: visible, left: alignment === \'left\', right: alignment === \'right\' }\" ng-transclude></div>',
        transclude: true,
        scope: {
            visible: '=',
            alignment: '@'
        }
    };
};