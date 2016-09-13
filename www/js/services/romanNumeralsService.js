angular.module('app.services', [])


.service('RomanNumeralsService', function (RomanNumeralsDefinition) {

    var romanNumeralService = this;
    var romanNumeralsList = RomanNumeralsDefinition.all();
    var MAX_SAME_ROMAN_CHARS = 3;
    var MAX_ROMAN_NUMERAL_VALUE = 3888;
    var MIN_ROMAN_NUMERAL_VALUE = 1;

    // public function
    romanNumeralService.calculateRomanNumeralToDecimal = function (romanNumeral) {

        var decimalAnswer = 0;

        for (var i = 0; i < romanNumeralsList.length; i++) {
            var romanNumberObject = romanNumeralsList[i];
            if (romanNumberObject.isSpecialNotation) {
                while (romanNumeral.indexOf(romanNumberObject.romanCharacter) !== -1) {
                    decimalAnswer = decimalAnswer + romanNumberObject.decimalValue;
                    romanNumeral = romanNumeral.replace(romanNumberObject.romanCharacter, "#");
                }
            }
        }

        for (var i = 0; i < romanNumeralsList.length; i++) {
            var romanNumberObject = romanNumeralsList[i];
            if (!romanNumberObject.isSpecialNotation) {
                while (romanNumeral.indexOf(romanNumberObject.romanCharacter) !== -1) {
                    decimalAnswer = decimalAnswer + romanNumberObject.decimalValue;
                    romanNumeral = romanNumeral.replace(romanNumberObject.romanCharacter, "#");
                }
            }
        }

        return decimalAnswer;

    };

    romanNumeralService.calculateDecimalToRomanNumeral = function (decimalValue) {
        var romanNumeralAnswer = "";

        var remainingDecimalValue = decimalValue;
        for (var i = 0; i < romanNumeralsList.length; i++) {
            var romanNumeralObject = romanNumeralsList[i];
            var previousRomanNumeral = romanNumeralsList[i - 1];
            var romanCharCounter = 0;
            while (decimalValueCanBeConverted(remainingDecimalValue, romanNumeralObject)) {
                if (romanCharCounter < MAX_SAME_ROMAN_CHARS) {
                    // convert number to roman numeral and lower the remaining decimal value
                    romanNumeralAnswer = romanNumeralAnswer + romanNumeralObject.romanCharacter;
                    remainingDecimalValue = remainingDecimalValue - romanNumeralObject.decimalValue;
                    romanCharCounter++
                }
            }
        }
        return romanNumeralAnswer;
    };

    function decimalValueCanBeConverted(decimalValue, romanNumeralObject) {
        var canBeConverted = false;
        if (decimalValue / romanNumeralObject.decimalValue >= 1) {
            canBeConverted = true;
        }
        return canBeConverted;
    }

    romanNumeralService.calculateRandomRomanNumeral = function () {
        var randomDecimalValue = romanNumeralService.calculateRandomDecimalValue();
        console.log("Random number: " + randomDecimalValue);
        var randomRomanNumeral = romanNumeralService.calculateDecimalToRomanNumeral(randomDecimalValue);
        return randomRomanNumeral;
    };

    romanNumeralService.calculateRandomDecimalValue = function () {
        var randomDecimalValue = Math.floor((Math.random() * MAX_ROMAN_NUMERAL_VALUE) + MIN_ROMAN_NUMERAL_VALUE);
        return randomDecimalValue;
    }
});