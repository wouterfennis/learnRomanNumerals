'use strict';

angular.module('app.romanToDecimal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/romanToDecimal', {
    templateUrl: 'romanToDecimal/romanToDecimal.html',
    controller: 'RomanToDecimalCtrl'
  });
}])

.controller('RomanToDecimalCtrl', [function() {

}]);