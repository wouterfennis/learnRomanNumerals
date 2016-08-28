angular.module('app.controllers')

  .controller('RomanToDecimalController', function($scope, RomanNumeralsService) {
      $scope.romanNumeral = undefined;
      $scope.decimalAnswer = undefined;


      function resetForm(){
        $scope.romanNumeral = RomanNumeralsService.calculateRandomRomanNumeral();
        $scope.decimalAnswer = "";
      }

      resetForm();

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
          // causes a bug/ infinite loop when triggered
          resetForm();
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
