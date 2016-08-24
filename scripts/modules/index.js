/**
 * Created by Apple on 16/8/23.
 */
let indexController = require('../controllers/index');
let indexFactory = require('../services/index');
let requestFactory = require('../services/requestFactory');
let indexModule = angular
    .module('index', ['ui.select','ngSanitize'])
    .factory('indexFactory',indexFactory)
    .factory('requestFactory',requestFactory)
    .controller('indexController',["$scope","$sce","indexFactory","requestFactory",indexController]);

//var $injector = angular.injector();
//console.log($injector.get())
module.exports = indexModule;