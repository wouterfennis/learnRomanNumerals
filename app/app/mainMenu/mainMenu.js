'use strict';

angular.module('app.mainMenu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainMenu', {
    templateUrl: 'mainMenu/mainMenu.html',
    controller: 'MainMenuCtrl'
  });
}])

.controller('MainMenuCtrl', [function() {

}]);