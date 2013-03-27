'use strict';

/* Controllers */


/**
 * Curriculum controller
 */
function CurriculumCrtl($scope, $routeParams, $http) {
 
  var master = {};

  $scope.months = [
      {name: 'Enero', id: 1},
      {name: 'Febrero', id: 2},
      {name: 'Marzo', id: 3},
      {name: 'Abril', id: 4},
      {name: 'Mayo', id: 5},
      {name: 'Junio', id: 6},
      {name: 'Julio', id: 7},
      {name: 'Agosto', id: 8},
      {name: 'Septiembre', id: 9},
      {name: 'Octubre', id: 10},
      {name: 'Noviembre', id: 11},
      {name: 'Diciembre', id: 12}];

  var currentYear = new Date().getFullYear();
  var years = [];
  for(var i=currentYear;i>1990;i--) {
    years.push(i);
  }
  $scope.years = years;

  
  $http.get('cvs/' + $routeParams.username + '.json').success(function(data) {
      $scope.form = data;
      master = angular.copy(data);
  });
  

  $scope.cancel = function() {
    $scope.form = angular.copy(master);
  };

  $scope.save = function() {
    master = $scope.form;
    $scope.cancel();
  };

  $scope.addExperience = function() {
    $scope.form.experienceList.unshift({type:'', value:''});
  };

  $scope.removeExperience = function(experience) {
    var experienceList = $scope.form.experienceList;
    for (var i = 0, ii = experienceList.length; i < ii; i++) {
      if (experience === experienceList[i]) {
        experienceList.splice(i, 1);
      }
    }
  };

  $scope.isCancelDisabled = function() {
    return angular.equals(master, $scope.form);
  };

  $scope.isSaveDisabled = function() {
    return $scope.cvForm.$invalid || angular.equals(master, $scope.form);
  };

  $scope.cancel();
}





/**
 * List controller
 */
 function ListCrtl($scope) {

    $scope.users = [
                    { name : "John Smith",    username : "johnsmith"},
                    { name : "Pepe Gonzalez", username : "pepegonzalez"},
                    { name : "Michael Smith", username : "michaelsmith"},
                    { name : "Ralph Gonzalez", username : "ralphgonzalez"},
                    { name : "Peter Gordon", username : "petergordon"},
                    { name : "Bart Griffin", username : "bartgriffin"},
                    { name : "Elena Gomez",  username : "elenagomez"}
                   ]
 }

