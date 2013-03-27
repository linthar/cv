'use strict';

/* App Module */

angular.module('curriculum', ['cvServices']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/cv', {templateUrl: 'partials/list.html',   controller: ListCrtl}).

		when('/cv/:username', {templateUrl: 'partials/cv.html',   controller: CurriculumCrtl}).

		otherwise({redirectTo: '/cv'});
}]);
