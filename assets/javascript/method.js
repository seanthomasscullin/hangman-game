/* This is my javascript for the hangman object, containing all the helper methods for the hangman game. */

var hangman = {

	//Takes the randomly picked answer from the word bank and constructs an array of underscores
	//with length equal to the length of the answer string. Also fills the game screen with the 
	//requisite game text.
	initializeScreen: function() {
		for (i = 0; i < answer.length; i++) {
	 		displayedAnswerArray.push("_");
	 	}
		document.getElementById("answer-on-display").innerHTML = displayedAnswerArray.join(" ")
		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
		document.getElementById("wrong-guesses").innerHTML = wrongGuessBank;
		document.getElementById("your-guess").innerHTML = "";
	},

	//Checks whether the key entered by the user is between A to Z. If not, asks user to enter
	//a valid key.
	validateGuess: function(event) {
		if (event.keyCode < 65 || event.keyCode > 90) { 
			document.getElementById("your-guess").innerHTML = "Please enter a key between A to Z!"
		} else {
			validGuess = true;
		}
	},

	//If guess is wrong, checks whether it's already been used.
	checkWrongGuess: function(userGuess) {
		for (i = 0; i < wrongGuessBank.length; i++) {
			if (userGuess == wrongGuessBank[i]) {
				previousWrongGuess = true;
			} 
		}
	},

	//Checks if guess is correct, and if so, updates the one of the letters in the displayed
	//answer with the correct guess.
	updateDisplayedAnswer: function(userGuess) {
		for (i = 0; i < answer.length; i++) {
			if (userGuess == answer.charAt(i)) {
				correctGuess = true;
				displayedAnswerArray[i] = userGuess;
			}
		}
		document.getElementById("answer-on-display").innerHTML = displayedAnswerArray.join(" ")
	},

	//If the guess is valid but wrong, then decreases the number of guesses available by one, updates the
	//bank of previously used wrong guesses, then displays this bank to the screen.
	updateWrongGuessBank: function() {
		if (correctGuess == false && validGuess == true && previousWrongGuess == false && guessesRemaining > 0) {
			guessesRemaining--;
			wrongGuessBank.push(userGuess);
			document.getElementById("wrong-guesses").innerHTML = wrongGuessBank;
			document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
		}
	},

	//If the player correctly guesses every letter of the answer, then displays a victory message, increases
	//the number of wins by one, and resets values for the next game. 
	win: function() {
		if (displayedAnswerArray.join("").toString() == answer) {
			document.getElementById('winSound').play();
			document.getElementById("guesses-remaining").innerHTML = "You win! Press any key to play again.";			
			winCounter++;
			document.getElementById("number-of-wins").innerHTML = winCounter;
			this.resetValues();
		}
	},

	//If the player fails to guess the answer with the max number of guesses, method displays a lose message, increases
	//the number of losses by one, and resets values for the next game. 
	lose: function() {
		if (guessesRemaining == 0) {
			document.getElementById("guesses-remaining").innerHTML = "Out of guesses! Press any key to play again.";
			lossCounter++;
			document.getElementById("number-of-losses").innerHTML = lossCounter++;
			this.resetValues();
		}
	},

	resetValues: function() {
		answer = wordBank[Math.floor(Math.random()*wordBank.length)];
		displayedAnswerArray = [];
		userGuess = "";
		guessesRemaining = 5;
		wrongGuessBank = [];
		gameStart = false;
	},

	resetScreen: function() {
		displayedAnswerArray = [];
		guessesRemaining = 5;
		winCounter = 0;
		lossCounter = 0;
		wrongGuessBank = [];
		gameStart = false;
		document.getElementById("answer-on-display").innerHTML = "Welcome to my Hangman game! Press any key to play.";
		document.getElementById("your-guess").innerHTML = "";
		document.getElementById("number-of-wins").innerHTML = "0";
		document.getElementById("number-of-losses").innerHTML = "0";
		document.getElementById("guesses-remaining").innerHTML = "5";
		document.getElementById("wrong-guesses").innerHTML = "";
		document.getElementById("wrong-guesses").innerHTML = "";
	}
}