
var Word = require('./words.js');
var prompt = require('prompt');

console.log("NAME.... THAT.... ANIMAL!");
console.log("name the types of animals! ");
console.log("FYI. All of these are REAL ANIMALS. Goodluck!");
console.log("------------------");
prompt.start();



game = {
 	wordBank: ['gharial', 'conure', 'wobbegong', 'hagfish', 'fossa', 'quaker', 'gerenuk'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWordz: null,
 	
 	startGame: function (wordz) {
 		this.resetGuesses();
 		this.currentWordz = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWordz.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWordz.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWordz.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWordz.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWordz.target);
 			} else {
 				console.log(self.currentWordz.wordRender());
 			}
 		});

 	}


};

game.startGame();