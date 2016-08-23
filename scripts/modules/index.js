/**
 * Created by Apple on 16/8/23.
 */
let indexController = require('../controllers/index');
let indexFactory = require('../services/index');
let indexModule = angular
    .module('index', [])
    .factory('indexFactory',indexFactory)
    .controller('indexController',["$scope","indexFactory",indexController]);

module.exports = indexModule;