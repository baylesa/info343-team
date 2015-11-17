'use strict';
angular.module('TeamChallengeApp', ['ngSanitize'] ) //ngSanitize for HTML displaying

//controls the home view
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showSuccess = false; // defaults alerts to hidden
	$scope.showIncorrectPass = false;
    $scope.showAlert = function(form) { // tests if password matches confirmed password field
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



