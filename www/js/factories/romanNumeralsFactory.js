angular.module('app.factories', [])


.factory('RomanNumeralsDefinition', function() {

  var romanNumeralsList = [{
    romanCharacter: "M",
    decimalValue: 1000,
    isSpecialNotation: false,
    canBeSubtracted: false
  }, {
    romanCharacter: "CM",
    decimalValue: 900,
    isSpecialNotation: true,
    canBeSubtracted: false
  },{
    romanCharacter: "D",
    decimalValue: 500,
    isSpecialNotation: false,
    canBeSubtracted: false
  },{
    romanCharacter: "CD",
    decimalValue: 400,
    isSpecialNotation: true,
    canBeSubtracted: false
  }, {
    romanCharacter: "C",
    decimalValue: 100,
    isSpecialNotation: false,
    canBeSubtracted: true
  }, {
    romanCharacter: "XC",
    decimalValue: 90,
    isSpecialNotation: true,
    canBeSubtracted: false
  },{
    romanCharacter: "L",
    decimalValue: 50,
    isSpecialNotation: false,
    canBeSubtracted: false
  },{
    romanCharacter: "XL",
    decimalValue: 40,
    isSpecialNotation: true,
    canBeSubtracted: false
  }, {
    romanCharacter: "X",
    decimalValue: 10,
    isSpecialNotation: false,
    canBeSubtracted: true
  },{
    romanCharacter: "IX",
    decimalValue: 9,
    isSpecialNotation: true,
    canBeSubtracted: false
  }, {
    romanCharacter: "V",
    decimalValue: 5,
    isSpecialNotation: false,
    canBeSubtracted: false
  }, {
    romanCharacter: "IV",
    decimalValue: 4,
    isSpecialNotation: true,
    canBeSubtracted: false
  },{
    romanCharacter: "I",
    decimalValue: 1,
    isSpecialNotation: false,
    canBeSubtracted: true
  }];

  return {
    all: function() {
      return romanNumeralsList;
    },
    searchForDecimal: function(romanCharacter) {
      wantedDecimal = undefined;
      for (var i = 0; i < romanNumeralsList.length; i++) {
        var possibleDecimal = romanNumeralsList[i];
        if(possibleDecimal.romanCharacter === romanCharacter){
          wantedDecimal = possibleDecimal;
        }
      }
      return wantedDecimal;
    },
    searchForRomanNumeral: function(decimalValue) {
      wantedRomanNumeral = undefined;
      for (var i = 0; i < romanNumeralsList.length; i++) {
        var possibleRomanNumeral = romanNumeralsList[i];
        if(possibleRomanNumeral.decimalValue === decimalValue){
          wantedRomanNumeral = possibleRomanNumeral;
        }
      }
      return wantedRomanNumeral;
    }
  };
});
