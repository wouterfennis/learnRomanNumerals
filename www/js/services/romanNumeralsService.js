angular.module('app.services', [])


  .service('RomanNumeralsService', function(RomanNumeralsDefinition) {

    var romanNumeralService = this;
    var romanNumeralsList = RomanNumeralsDefinition.all();
    var MAX_SAME_ROMAN_CHARS = 3;
    var MAX_ROMAN_NUMERAL_VALUE = 3888;
    var MIN_ROMAN_NUMERAL_VALUE = 1;

    // public function
    romanNumeralService.calculateRomanNumeralToDecimal = function(romanNumeral){
      var decimalAnswer = 0;
      var romanNumeralLength = romanNumeral.length;

      for (var i = 0; i < romanNumeralLength; i++) {
        var leftCharacter = romanNumeral[i];
        var rightCharacterIndex = i + 1;
        var rightCharacter = romanNumeral[rightCharacterIndex];
        if (rightCharacterIndex < romanNumeralLength) {
          decimalAnswer = decimalAnswer + calculateTwoCharacters(leftCharacter, rightCharacter);
        } else {
          decimalAnswer = decimalAnswer + calculateOneCharacter(leftCharacter);
        }
        i++;
      }

      console.log(decimalAnswer);
      return decimalAnswer;
    };

    function calculateTwoCharacters(leftCharacter, rightCharacter) {
      var answer = undefined;
      var leftRomanNumberObject = searchForRomanNumberObject(leftCharacter);
      var rightRomanNumberObject = searchForRomanNumberObject(rightCharacter);
      if (leftRomanNumberObject.decimalValue < rightRomanNumberObject.decimalValue) {
        answer = subtractRomanNumbers(leftRomanNumberObject, rightRomanNumberObject);
      } else if (leftRomanNumberObject.decimalValue >= rightRomanNumberObject.decimalValue) {
        answer = addRomanNumbers(leftRomanNumberObject, rightRomanNumberObject);
      }
      return answer;
    }

    function calculateOneCharacter(character) {
      var romanNumberObject = searchForRomanNumberObject(character);
      var answer = romanNumberObject.decimalValue;
      return answer;
    }

    function searchForRomanNumberObject(romanCharacter) {
      var wantedRomanNumberObject = undefined;

      for (var i = 0; i < romanNumeralsList.length; i++) {
        var possibleRomanNumberObject = romanNumeralsList[i];
        if (possibleRomanNumberObject.romanCharacter === romanCharacter) {
          wantedRomanNumberObject = possibleRomanNumberObject;
        }
      }

      return wantedRomanNumberObject;
    }

    function subtractRomanNumbers(leftRomanNumberObject, rightRomanNumberObject) {
      var answer = 0;
      if (leftRomanNumberObject.canBeSubtracted) {
        answer = rightRomanNumberObject.decimalValue - leftRomanNumberObject.decimalValue;
      }
      return answer;
    }

    function addRomanNumbers(leftRomanNumberObject, rightRomanNumberObject) {
      var answer = leftRomanNumberObject.decimalValue + rightRomanNumberObject.decimalValue;

      return answer;
    }

    romanNumeralService.calculateDecimalToRomanNumeral = function(decimalValue){
      var romanNumeralAnswer = "";

      var remainingDecimalValue = decimalValue;
      console.log("startup value: " + remainingDecimalValue);
      for(var i = 0; i < romanNumeralsList.length; i++){
        var romanNumeralObject = romanNumeralsList[i];
        var romanCharCounter = 0;
        while(decimalValueCanBeConverted(remainingDecimalValue, romanNumeralObject)){
          if(romanCharCounter < MAX_SAME_ROMAN_CHARS){
            // convert number to roman numeral and lower the remaining decimal value
            romanNumeralAnswer = romanNumeralAnswer + romanNumeralObject.romanCharacter;
            remainingDecimalValue = remainingDecimalValue - romanNumeralObject.decimalValue;
            console.log("Na aftrek: " + remainingDecimalValue);
            romanCharCounter++
          } else {
            // more than 3 chars are about to be placed next to each other!!!
          }

        }
      }
      return romanNumeralAnswer;
    };

    function decimalValueCanBeConverted(decimalValue, romanNumeralObject){
      var canBeConverted = false;
      console.log("converted resultaat" + decimalValue / romanNumeralObject.decimalValue + " " + romanNumeralObject.romanCharacter + " " + decimalValue);
      if(decimalValue / romanNumeralObject.decimalValue >= 1){
        canBeConverted = true;
      }
      return canBeConverted;
    }


    romanNumeralService.calculateRandomRomanNumeral = function(){
      var randomDecimalValue = getRandomDecimalValue();
      var randomRomanNumeral = romanNumeralService.calculateDecimalToRomanNumeral(randomDecimalValue);
      return randomRomanNumeral;
    };

    function getRandomDecimalValue(){
      var randomDecimalValue = Math.floor((Math.random() * MAX_ROMAN_NUMERAL_VALUE) + MIN_ROMAN_NUMERAL_VALUE);
      return randomDecimalValue;
    }
  });
