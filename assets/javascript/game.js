var wordBank = ["madonna", "computer", "peaches", "meatloaf", "sushi"];
var answer = wordBank[Math.floor(Math.random()*wordBank.length)];
var userGuess = "";
var validGuess = false;
var correctGuess = false;
var previousWrongGuess = false;
var displayedAnswerArray = [];
var guessesRemaining = 5;
var gameStart = false;
var winCounter = 0;
var lossCounter = 0;
var wrongGuessBank = [];

document.onkeyup = function(event) {
	//These four values have to be reset upon every key press.
	userGuess = event.key;
	validGuess = false;
	correctGuess = false;
	previousWrongGuess = false;
	
	//When player presses any key for the first time, initializes the screen to start game.
	if (gameStart == false) {
		hangman.initializeScreen();
 	} else {
	//If not on first play, then shows the user guess, evaluates whether it's a valid and correct entry, and
	//updates displayed answer if so. If the guess is wrong, checks if it's already been guessed, then updates
	//the array of wrong guesses and displays the wrong guesses.
		document.getElementById("your-guess").innerHTML = userGuess;
 		hangman.validateGuess(event);
 		hangman.updateDisplayedAnswer(userGuess.toLowerCase());
 		hangman.checkWrongGuess(userGuess.toLowerCase());
 		hangman.updateWrongGuessBank();
 	}

	//Progresses the game past the first play, and keeps game in started mode,
	//until player loses or wins.
	gameStart = true;	

	//When player loses, prints a game-over message, instructs player to press
	//any key to play again, and resets all values.
	hangman.lose(); 

	//When player wins, prints a victory message, instructs player to press
	//any key to play again, and resets all values.
	hangman.win();
}	