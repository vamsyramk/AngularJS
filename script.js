// Code goes here
(function(){
    var app = angular.module("githubViewer", []);
    var MainCtrl = function($scope, $http) {
      var usersuccess = function(response) {
        $scope.users = response.data;

      }
      var usererror = function(error) {
        $scope.error = "could not fetch the data";
      }
      $http.get("https://api.github.com/users").then(usersuccess, usererror);
      $scope.message = "Hello Vamsy";
    }
    app.controller("MainCtrl", MainCtrl);
  }());
  