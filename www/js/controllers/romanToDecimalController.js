angular.module('app.controllers')

  .controller('RomanToDecimalController', function($scope, RomanNumeralsService) {
      $scope.romanNumeral = "VII"
      $scope.decimalAnswer = "";


      $scope.addCharToAnswer = function(enteredChar){
        $scope.decimalAnswer = $scope.decimalAnswer + enteredChar;
      };

      $scope.removeLastCharFromAnswer = function(){
        var lastCharPosition = -1;
        $scope.decimalAnswer = $scope.decimalAnswer.slice(0, lastCharPosition);
      };

      $scope.clearDecimalAnswer = function(){
        $scope.decimalAnswer = "";
      };

      $scope.checkAnswer = function(){
        var correctAnswer = RomanNumeralsService.calculateRomanNumeralToDecimal($scope.romanNumeral);
        var userAnswer = parseInt($scope.decimalAnswer);
        if(correctAnswer === userAnswer){
          showSuccessMessage("Correct Answer!");
        } else {
          showErrorMessage("Wrong Answer!");
        }
      };

      function showSuccessMessage(message){
        alert(message);
      }

      function showErrorMessage(message){
        alert(message);
      }
  });
