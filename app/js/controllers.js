'use strict';

/* Controllers */

 function CurriculumCrtl($scope) {
  var master = {
    name: 'John Smith',
    title: 'Software Developer',
    summary: 'Desarrollador semi senior con 5 años de experiencia en aplicaciones J2EE. ',

 experienceList:[{ company:'Tecso', 
                title:'SSr Developer',
                fromMonth:'08',
                fromYear:'2011',
                toMonth:'03',
                toYear:'2013',
                description: 'Participe en el desarrollo de aplicaciones para el cliente CitBank'
              },

              { company:'IBM', 
                title:'Junior Developer',
                fromMonth:'01',
                fromYear:'2010',
                toMonth:'08',
                toYear:'2011',
                description: 'Participe en el desarrollo de aplicaciones para el cliente CitBank'
              }

              ]

  };


  $scope.cancel = function() {
    $scope.form = angular.copy(master);
  };

  $scope.save = function() {
    master = $scope.form;
    $scope.cancel();
  };

  $scope.addExperience = function() {
    $scope.form.experienceList.push({type:'', value:''});
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

