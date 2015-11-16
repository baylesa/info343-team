'use strict';
angular.module('TeamChallengeApp', ['ngSanitize'] ) //ngSanitize for HTML displaying

//controls the home view
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	

}])


// age restriction 
var agePrompt=prompt("What is your age?");

if (agePrompt>=13) alert('Welcome!')
else {
alert('Sorry! Must be at least 13 to sign up')
document.location="https://www.youtube.com/watch?v=YaG5SAw1n0c";//link if not 18
}