/**
 * Created by Apple on 16/8/23.
 */
let mainController = require('../controllers/main');
let mainFactory = require('../services/main');
let mainModule = angular
    .module('main', [])
    .factory('mainFactory',mainFactory)
    .controller('mainController',["$scope","mainFactory","loadMainController",mainController]);

module.exports = mainModule;