angular.module('app.controllers')

  .controller('DecimalToRomanController', function($scope, RomanNumeralsService) {
    $scope.decimalValue = undefined;
    $scope.romanAnswer = undefined;


    function resetForm(){
      $scope.decimalValue = RomanNumeralsService.calculateRandomDecimalValue();
      $scope.romanAnswer = "";
    }

    resetForm();

    $scope.addCharToAnswer = function(enteredChar){
      $scope.romanAnswer = $scope.romanAnswer + enteredChar;
    };

    $scope.removeLastCharFromAnswer = function(){
      var lastCharPosition = -1;
      $scope.romanAnswer = $scope.romanAnswer.slice(0, lastCharPosition);
    };

    $scope.clearDecimalAnswer = function(){
      $scope.romanAnswer = "";
    };

    $scope.checkAnswer = function(){
      var correctAnswer = RomanNumeralsService.calculateDecimalToRomanNumeral($scope.decimalValue);
      var userAnswer = $scope.romanAnswer;
      if(correctAnswer === userAnswer){
        showSuccessMessage("Correct Answer!");
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
