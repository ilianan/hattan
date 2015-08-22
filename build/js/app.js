// Define module.
var app = angular.module('demo-app', []);

// Define controller.
app.controller('DemoCtrl', function ($scope) {
  $scope.message = "This is quite a message";
});