'use strict';
angular.module('TeamChallengeApp', ['ngSanitize'] ) //ngSanitize for HTML displaying

//controls the home view
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showSuccess = false;
	$scope.showIncorrectPass = false;
    $scope.showAlert = function(form) {
    		//password
    		if($scope.password === $scope.confirmPassword){
           		 $scope.showSuccess = true;
           		 $scope.showIncorrectPass = false;
    		}
    		else{
    			$scope.showIncorrectPass = true; 
    			$scope.showSuccess = false;
    		};
    }

}])



