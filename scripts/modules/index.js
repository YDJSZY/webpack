/**
 * Created by Apple on 16/8/23.
 */
let indexController = require('../controllers/index');
let indexFactory = require('../services/index');
let requestFactory = require('../services/requestFactory');
let indexModule = angular
    .module('index', [])
    .factory('indexFactory',indexFactory)
    .factory('requestFactory',requestFactory)
    .controller('indexController',["$scope","indexFactory","requestFactory",indexController]);

module.exports = indexModule;