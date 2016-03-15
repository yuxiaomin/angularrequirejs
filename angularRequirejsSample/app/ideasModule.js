define(['http://localhost:8088/config.js',
        'http://localhost:8088/subproduct/submodule/submodule.module.js',
        'http://localhost:8088/subproduct/submodule.ideas/submodule.ideas.module.js',
        'http://localhost:8088/subproduct/submodule.ideas/ideasHomeController.js',
        'http://localhost:8088/subproduct/submodule.ideas/ideaDetailsController.js',
        'http://localhost:8088/subproduct/submodule.service/submodule.service.module.js',
        'http://localhost:8088/subproduct/submodule.service/ideasDataSvc.js'],
    function(config){
    'use strict';

    var app = angular.module('ideasApp', ['submodule']);

    app.config(config);
/*    app.factory('ideasDataSvc',ideasDataSvc);
    app.controller('ideasHomeController', ideasHomeController);
    app.controller('ideaDetailsController',ideaDetailsController);*/
});