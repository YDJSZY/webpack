/**
 * Created by Apple on 16/8/22.
 */
function index($scope,$sce,indexFactory,requestFactory){
    $scope.index = "This is index page";
    $scope.order_types = ["a","b","c","d"];
    indexFactory.say();
    requestFactory.get();
    $scope.trustAsHtml = function(value) {
        return $sce.trustAsHtml(value);
    };
}

module.exports = index;

