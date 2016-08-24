
function calculateRomanNumeralToDecimal (romanNumeral){

    var decimalAnswer = 0;
    var romanNumeralLength = romanNumeral.length;

    for(var i = 0; i < romanNumeralLength; i ++){
        var leftCharacter = romanNumeral[i];
        var rightCharacterIndex = i + 1;
        var rightCharacter = romanNumeral[rightCharacterIndex];
        if(rightCharacterIndex < romanNumeralLength) {
            decimalAnswer = decimalAnswer + calculateTwoCharacters(leftCharacter, rightCharacter);
        } else {
            decimalAnswer = decimalAnswer + calculateOneCharacter(leftCharacter);
        }
        i++;
    }

    console.log(decimalAnswer);
    return decimalAnswer;
}

function calculateTwoCharacters(leftCharacter, rightCharacter){
        var answer = undefined;
        var leftRomanNumberObject = searchForRomanNumberObject(leftCharacter);
        var rightRomanNumberObject = searchForRomanNumberObject(rightCharacter);
        if(leftRomanNumberObject.decimalValue < rightRomanNumberObject.decimalValue){
            answer = subtractRomanNumbers(leftRomanNumberObject, rightRomanNumberObject);
        } else if(leftRomanNumberObject.decimalValue >= rightRomanNumberObject.decimalValue){
            answer = addRomanNumbers(leftRomanNumberObject, rightRomanNumberObject);
        }
        return answer;
}

function calculateOneCharacter(character){
    var romanNumberObject = searchForRomanNumberObject(character);
    var answer = romanNumberObject.decimalValue;
    return answer;
}

function searchForRomanNumberObject(romanCharacter){
    var wantedRomanNumberObject = undefined;

    for(var i = 0; i < romanNumeralsList.length; i++){
        var possibleRomanNumberObject = romanNumeralsList[i];
        if(possibleRomanNumberObject.romanCharacter === romanCharacter){
            wantedRomanNumberObject = possibleRomanNumberObject;
        }
    }

    return wantedRomanNumberObject;
}

function subtractRomanNumbers(leftRomanNumberObject, rightRomanNumberObject){
    var answer = 0;
    if(leftRomanNumberObject.canBeSubtracted) {
        answer = rightRomanNumberObject.decimalValue - leftRomanNumberObject.decimalValue;
    }
    return answer;
}

function addRomanNumbers(leftRomanNumberObject, rightRomanNumberObject){
    var answer = leftRomanNumberObject.decimalValue + rightRomanNumberObject.decimalValue;

    return answer;
}