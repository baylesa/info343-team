'use strict';
angular.module('TeamChallengeApp', ['ngSanitize'] ) //ngSanitize for HTML displaying

//controls the home view
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showSuccess = false;  // defaults alerts to hidden
	$scope.showIncorrectPass = false;
    $scope.showAlert = function(form) {  // tests if password matches confirmed password field
		// password check
		if ($scope.password === $scope.confirmPassword) {
       		 $scope.showSuccess = true;
       		 $scope.showIncorrectPass = false;
		} else {
			$scope.showIncorrectPass = true; 
			$scope.showSuccess = false;
		}
    };

    // Used in custom validation in 'reasonable' date directive
    $scope.birthdate = '';
    $scope.birthdateFeedback = 'Must be a valid birthdate of the form (MM/DD/YYYY)';
}])
.directive('reasonable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // custom validator for the date input field
      ctrl.$validators.validDate = function(modelValue, viewValue) {
        
        // check date format (MM/DD/YYYY) with regex
        var DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;
        var validDateFormat = DATE_REGEX.test(viewValue);
        if (!validDateFormat) {
          return false;
        }

        // must be valid date format if here, so now check
        // that date is at least thirteen years in the past
        var dateEntered = new Date(viewValue);
        var todayMinusThirteen = new Date();
        todayMinusThirteen.setFullYear(todayMinusThirteen.getFullYear() - 13);
        console.log(dateEntered > todayMinusThirteen);
        if(dateEntered > todayMinusThirteen) {
            scope.birthdateFeedback = 'Birthdate must be at least thirteen years in the past';
            return false;
        }
        
        return true;
      };
    }
  };
});
