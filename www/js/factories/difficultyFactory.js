angular.module('app.factories', [])


.factory('DifficultyDefinition', function() {

  var difficultyList = [
      {
      level: 1,
      minDecimalValue: 1,
      maxDecimalValue: 10
      },{
      level: 2,
      minDecimalValue: 10,
      maxDecimalValue: 100
      },{
      level: 3,
      minDecimalValue: 100,
      maxDecimalValue: 1000
      },{
      level: 4,
      minDecimalValue: 1000,
      maxDecimalValue: 3888
      }
];

  return {
    all: function() {
      return difficultyList;
    },
    searchForDifficulty: function(level) {
      wantedDifficulty = undefined;
      for (var i = 0; i < difficultyList.length; i++) {
        var possibleDifficulty = difficultyList[i];
        if(possibleDifficulty.level === level){
          wantedDifficulty = possibleDifficulty;
        }
      }
      return wantedDifficulty;
    }
  };
});
