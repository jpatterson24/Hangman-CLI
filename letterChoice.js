var LetterChoice = function(letter) {
	this.input = letter;
	this.display = false;

	this.printLetter = function() {
		return !(this.display) ? "_" : this.input;
	};
};

module.exports = LetterChoice;