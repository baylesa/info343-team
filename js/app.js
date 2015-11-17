'use strict';
angular.module('TeamChallengeApp', ['ngSanitize'])

// Controller for the home view
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

    // Errors used in form fields
    $scope.formFieldErrors = {
        email: 'Must have a valid email address.',
        firstName: 'Must enter a first name.',
        lastName: 'Must enter a last name',
        birthdateForm: 'Must be a valid birthdate of the form (MM/DD/YYYY).',
        birthdateYear: 'Birthdate must be at least thirteen years in the past.',
        password: 'Must enter a password.',
        confirmPassword: 'Must confirm your password and it must be the same as above.'
    };

    // Used in custom validation in 'reasonable' date directive
    $scope.birthdate = '';
    $scope.birthdateError = $scope.formFieldErrors.birthdateForm;
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
        if(dateEntered > todayMinusThirteen) {
            scope.birthdateError = scope.formFieldErrors.birthdateYear;
            return false;
        }
        
        return true;
      };
    }
  };
});
