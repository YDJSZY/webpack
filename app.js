/**
 * Created by Apple on 16/8/19.
 */
require("bower/bootstrap/dist/css/bootstrap.min.css");
require("bower/bootstrap/dist/js/bootstrap.min.js");
require("bower/oclazyload/dist/ocLazyLoad.min.js");
var jQuery = $ = require("jquery");
var angular = require("./scripts/vendor/angular");
var app = angular.module("app",[require('angular-ui-router'), 'oc.lazyLoad'])
app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: './view/index.html',
            controller: 'indexController',
            resolve: {
                loadIndexController: function($q, $ocLazyLoad) {
                    console.log('state resolve:', 'Index, indexController');
                    var deferred = $q.defer();
                    var indexModule = require('./scripts/modules/index');
                    $ocLazyLoad.load(indexModule);
                    deferred.resolve();
                    return deferred.promise;
                }
            }
        })
        .state('main', {
            url: '/main',
            templateUrl: './view/main.html',
            controller: 'mainController',
            resolve: {
                loadMainController: function($q, $ocLazyLoad) {
                    console.log('state resolve:', 'Main, mainController');
                    var deferred = $q.defer();
                    var mainModule = require('./scripts/modules/main');
                    $ocLazyLoad.load(mainModule);
                    deferred.resolve();
                    return deferred.promise;
                }
            }
        })
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});
module.exports = app;