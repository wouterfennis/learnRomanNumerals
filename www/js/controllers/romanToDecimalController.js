angular.module('app.controllers')

  .controller('RomanToDecimalController', function($scope, RomanNumeralsService) {
    console.log("Roman To Decimal controller");
    console.log(RomanNumeralsService.calculateRomanNumeralToDecimal("VIII"));
  });
