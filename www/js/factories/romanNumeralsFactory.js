angular.module('app.factories', [])


.factory('RomanNumeralsDefinition', function() {

  var romanNumeralsList = [{
    romanCharacter: "M",
    decimalValue: 1000,
    canBeSubtracted: false
  }, {
    romanCharacter: "CM",
    decimalValue: 900,
    canBeSubtracted: false
  },{
    romanCharacter: "D",
    decimalValue: 500,
    canBeSubtracted: false
  },{
    romanCharacter: "CD",
    decimalValue: 400,
    canBeSubtracted: false
  }, {
    romanCharacter: "C",
    decimalValue: 100,
    canBeSubtracted: true
  }, {
    romanCharacter: "XC",
    decimalValue: 90,
    canBeSubtracted: false
  },{
    romanCharacter: "L",
    decimalValue: 50,
    canBeSubtracted: false
  },{
    romanCharacter: "XL",
    decimalValue: 40,
    canBeSubtracted: false
  }, {
    romanCharacter: "X",
    decimalValue: 10,
    canBeSubtracted: true
  },{
    romanCharacter: "IX",
    decimalValue: 9,
    canBeSubtracted: false
  }, {
    romanCharacter: "V",
    decimalValue: 5,
    canBeSubtracted: false
  }, {
    romanCharacter: "IV",
    decimalValue: 4,
    canBeSubtracted: false
  },{
    romanCharacter: "I",
    decimalValue: 1,
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
