'use strict';

/* Services */
 
angular.module('cvServices', ['ngResource']).
	factory('Cv', function($resource){
  		return $resource('cvs/:username.json', {}, {

    		query: {method:'GET', params:{username:'phones'}, isArray:true}
  		});
});
 
