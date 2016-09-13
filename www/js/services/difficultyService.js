angular.module('app.services')


  .service('DifficultyService', function(DifficultyDefinition) {

    var difficultyService = this;
    var difficultyList = DifficultyDefinition.all();
    var currentDifficulty = undefined;
    
    difficultyService.setCurrentDifficulty = function(difficulty){
        currentDifficulty = difficulty;
    }
    
    difficultyService.getDifficultyList = function(){
        return difficultyList;
    }
    

  });
