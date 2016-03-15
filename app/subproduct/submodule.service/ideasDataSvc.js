
;(function(angular){
  'use strict';

  angular
    .module('submodule.service')
    .factory('ideasDataSvc', IdeasDataSvc);

  IdeasDataSvc.$inject = ['$http','$resource'];
  function IdeasDataSvc($http,$resource){


    var Ideas;

    Ideas=$resource('/api/ideas/:id',{id:'@id'});

    var svc= {
        allIdeas: allIdeas,
        ideaDetails: ideaDetails
    };

    return svc;

    function allIdeas(){
        return Ideas.query().$promise;
    }

    function ideaDetails(id){
        return Ideas.get({id:id}).$promise;
    }

  }
})(angular);
