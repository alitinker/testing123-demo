'use strict';

module.exports = function($scope, DataService) {

	$scope.data = {};
	$scope.myReserves = DataService.getData();
	$scope.formState = false;


	$scope.submitCourseReserve = function(){
		DataService.setData($scope.data);
		$scope.formState = true;
	};

	$scope.submitNew = function(){
		$scope.formState = false;
		$scope.data = {};
	};


};
