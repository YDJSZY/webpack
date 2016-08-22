/**
 * Created by Apple on 16/8/22.
 */
function index(app){
    app.controller("indexController",["$scope",function($scope){
        $scope.index = "This is index page";
    }])
}

module.exports = index;

