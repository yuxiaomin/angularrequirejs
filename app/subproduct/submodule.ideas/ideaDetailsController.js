
;(function(angular){
  'use strict';
  angular
    .module('submodule.ideas')
    .controller('ideaDetailsController', ideaDetailsController);

  ideaDetailsController.$inject = ['$scope', '$routeParams', 'ideasDataSvc'];
  function ideaDetailsController($scope, $routeParams, ideasDataSvc){

		ideasDataSvc.ideaDetails($routeParams.id)
            .then(function(result){
                $scope.ideaDetails = result;
            });
    
  }
})(angular);
