var myApp = angular.module("myApp",[]);
myApp.controller("myCtr", function($scope , $http){
     $http.get("data.json").then(function(item){
         $scope.players = item.data;
     });
});