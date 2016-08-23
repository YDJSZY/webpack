/**
 * Created by Apple on 16/8/22.
 */
function index($scope,indexFactory,requestFactory){
    $scope.index = "This is index page";
    indexFactory.say();
    requestFactory.get();
}

module.exports = index;

