var app = angular.module("swApp", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/main', {
      templateUrl : 'tpl/main.html',
      controller : 'MainCtrl'
    })
    .when('/about', {
      templateUrl : 'tpl/about.html',
      controller : 'MainCtrl'
    })
    .when('/services', {
      templateUrl : 'tpl/services.html',
      controller : 'ServicesCtrl'
    })
    .when('/contact', {
      templateUrl : 'tpl/contact.html',
      controller : 'ContactCtrl'
    })
    .otherwise({redirectTo:'/main'});
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('json/services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ServicesCtrl', ['$scope', "$http", function($scope, $http){
  $http.get('json/services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('json/locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);