'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.mainMenu',
  'app.romanToDecimal',
  'app.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  console.log("Hallo");
  $routeProvider.otherwise({redirectTo: '/mainMenu'});
}]);
