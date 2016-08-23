/**
 * Created by Apple on 16/8/22.
 */
function index($scope,indexFactory){
    $scope.index = "This is index page";
    indexFactory.say();
}

module.exports = index;

