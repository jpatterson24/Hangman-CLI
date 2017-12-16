
console.log("******************************"+" "+"The Hangman Game"+" "+"************************************"+"\n"
            +"*********"+" "+"1990's TV shows guess the name of the popular TV shows of the 90s"+" "+"********"+"\n"
            +"************************"+" "+"PRESS ANY KEY TO GET STARTED!!!!"+" "+"**************************"+"\n");

console.log("\n"+"*************************************"+" "+"HANGMAN"+" "+"**************************************"+"\n"+
                 "********************"+" "+"Hangman uses the names of a TV shows from the 90s"+" "+"*************");


var prompt = require('prompt');
var letter = require('./choice.js');

prompt.start();

hangman = {
	wordOptions :["family matters", "fullhouse", "dinosaurs", "blossom", "martin", "the fresh prince of belair", "xfiles", "seinfeld", "boy meets world", "friends", "home improvement", "saved by the bell", "the simpsons", "the cosby show", "cheers"],
 	correctWords : 0,
 	remainingGuesses : 10,
 	currentWord : null,
 	startGame : function (word) {
 		this.resetRemainingGuesses();

 		this.currentWord = new letter(this.wordOptions[Math.floor(Math.random()* this.wordOptions.length)]);

 		this.currentWord.getLetters();

 		this.promptUser();
 	},
 	resetRemainingGuesses : function(){
 		this.remainingGuesses = 10;
 	},
 	promptUser : function(){
 		var user = this;

 		console.log("Guess the following 1990's T.V. Show!!!: " + user.currentWord.wordDisplay());

 		prompt.get(['guessLetter'], function(err, result){
 			console.log(" The letter guessed was: " + result.guessLetter);

 			var userGuesses = user.currentWord.checkLetterChoice(result.guessLetter);

 			if (userGuesses === 0){
 				console.log('You guessed wrong!');
 				user.remainingGuesses--;
 			}else{
 				console.log("You guessed right!");

 				if(user.currentWord.wordChoice()){
 					console.log("You Won!!!");
 					return; 
 				}
 			}
 			console.log("Guesses remaining ", user.remainingGuesses);
 			//console.log("Guess the following 1990's T.V. Show!!!: " + user.currentWord.wordDisplay());
 			console.log("Here are the letters you guessed: ");

 			if ((user.remainingGuesses > 0) && (user.currentWord.found === false)) {
 				user.promptUser();
 			}
 			else if (user.remainingGuesses === 0){
 				console.log("Game over sorry the correct word was: " + user.currentWord.wordDisplay());
 			} else {
 				console.log(user.currentWord.wordDisplay());
 			}
 		});
 	}
};
hangman.startGame();
