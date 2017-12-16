var Letter = require('./letterChoice.js');

var Choice = function(cho){
		this.choice = cho;
		this.letters = [];
		this.found = false;

		this.getLetters = function() {
				for(var i = 0; i < this.choice.length; i++){
					this.letters.push(new Letter(this.choice[i]));
				}
		};

		this.wordChoice = function() {
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.display;
		});

		return this.display;
	};

	this.checkLetterChoice = function(letterGuess) {
		var option = 0;

		for(var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].input == letterGuess){
				this.letters[i].display = true;
				option++;
			}
		}

		return option;
	};

	this.wordDisplay = function() {
		var string = '';

		for(var i=0; i < this.letters.length; i++){
			string += this.letters[i].printLetter();
		}

		return string;
	};

}

module.exports = Choice;