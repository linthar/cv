'use strict';

/* Controllers */

 function CurriculumCrtl($scope) {
  var master = {
    name: 'John Smith',
    title: 'Software Developer',
    summary: 'Desarrollador semi senior con 5 años de experiencia en aplicaciones J2EE. ',

 experienceList:[{ company:'Tecso', 
                title:'SSr Developer',
                fromMonth:8,
                fromYear:2011,
                toMonth:3,
                toYear:2013,
                description: 'Participe en el desarrollo de aplicaciones para el cliente CitBank'
              },

              { company:'IBM', 
                title:'Junior Developer',
                fromMonth:1,
                fromYear:2010,
                toMonth:8,
                toYear:2011,
                description: 'Participe en el desarrollo de aplicaciones para el cliente CitBank'
              }

              ]

  };

 
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
    return $scope.myForm.$invalid || angular.equals(master, $scope.form);
  };

  $scope.cancel();
}

