/**
 * Created by Apple on 16/8/22.
 */
function main($scope,mainFactory){
    $scope.main = "This is main page";
    mainFactory.say();
}

module.exports = main;