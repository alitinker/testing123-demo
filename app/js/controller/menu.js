'use strict';

module.exports = function($scope, $rootScope, VERSION) {
  $scope.version = VERSION;

  $scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function() {
        $scope.leftVisible = false;
        $scope.rightVisible = false;
    };

    $scope.showLeft = function(e) {
        $scope.leftVisible = true;
        e.stopPropagation();
    };

    $scope.showRight = function(e) {
        $scope.rightVisible = true;
        e.stopPropagation();
    };

    $rootScope.$on('documentClicked', closing);
    $rootScope.$on('escapePressed', closing);

    function closing() {
        $scope.$apply(function() {
            $scope.close(); 
        });
    }
};
