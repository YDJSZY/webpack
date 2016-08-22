/**
 * Created by Apple on 16/8/19.
 */
require("bower/bootstrap/dist/css/bootstrap.min.css");
require("bower/bootstrap/dist/js/bootstrap.min.js");
require("bower/oclazyload/dist/ocLazyLoad.min.js");
var jQuery = $ = require("jquery");
var index = require("./scripts/controllers/index");
var angular = require("./scripts/vendor/angular");
var app = angular.module("app",[require('angular-ui-router'), 'oc.lazyLoad']);
index(app);
app.controller("indexController",["$scope",function($scope){
    $scope.index = "This is index page";
}]);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: './view/index.html',
            controller: 'indexController',
            /*resolve: {
                loadIndexController: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('./scripts/controllers/index')(app);
                }]
            }*/
        })
        .state('main', {
            url: '/main',
            templateUrl: './view/main.html',
            controller: function () {
                this.main = 'This is main';
            },
            controllerAs: 'main'
        })
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});
module.exports = app;