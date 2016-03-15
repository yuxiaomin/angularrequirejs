
;(function(angular){
  'use strict';
  angular
    .module('submodule.ideas')
    .controller('ideasHomeController', ideasHomeController);

  ideasHomeController.$inject = ['$scope', 'ideasDataSvc'];
  function ideasHomeController($scope, ideasDataSvc){

        $scope.ideaName = "Todo List";

        $scope.gridOptions = {
            data: 'ideas',
            columnDefs: [
                {field: 'name', displayName: 'Name'},
                {field: 'technologies', displayName: 'Technologies'},
                {field: 'platform', displayName: 'Platforms'},
                {field: 'status', displayName: 'Status'},
                {field: 'devsNeeded', displayName: 'Vacancies'},
                {field: 'id', displayName: 'View Details', cellTemplate: '<a ng-href="#/details/{{row.getProperty(col.field)}}">View Details</a>'}
            ],
            enableColumnResize: true
        };

        ideasDataSvc.allIdeas().then(function(result){
            $scope.ideas=result;
            console.log($scope.ideas);
        });
    
  }
})(angular);
