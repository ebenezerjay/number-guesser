var minRangeInput = document.querySelector("#min-range-input");
var maxRangeInput = document.querySelector("#max-range-input");
var updateButton = document.querySelector("#update-button");
var minRangeNumber = document.querySelector("#min-range-number");
var maxRangeNumber = document.querySelector("#max-range-number");
var player1NameInput = document.querySelector("#player1-name-input");
var player1GuessInput = document.querySelector("#player1-guess-input");
var player2NameInput = document.querySelector("#player2-name-input");
var player2GuessInput = document.querySelector("#player2-guess-input");
var submitButton = document.querySelector("#submit-guess-button");
var challenger1Name = document.querySelector("#challenger1-name");
var challenger2Name = document.querySelector("#challenger2-name");
var player1Guess = document.querySelector("#player1-guess");
var player2Guess = document.querySelector("#player2-guess");
var player1Hint = document.querySelector("#p1-hint");
var player2Hint = document.querySelector("#p2-hint");
var randomNumber = null;
var sectionRight = document.querySelector(".section-right");
var clearGameButton = document.querySelector("#clear-game-button");
var resetGameButton = document.querySelector("#reset-game-button");

minRangeInput.addEventListener("input", function(e) {
	if (minRangeInput.value != "" || null && maxRangeInput != "" || null) {
		document.getElementById("update-button").disabled = false;
	}
});

submitButton.addEventListener("click", updateGuesses);
updateButton.addEventListener("click", generateRandomNumber);
player1GuessInput.addEventListener("input", function() {
	document.getElementById("clear-game-button").disabled = false;
	clearGame();
});
player1GuessInput.addEventListener("input", function() {
	document.getElementById("reset-game-button").disabled = false;
	resetGame();
})

function generateRandomNumber(e) {
	minRangeNumber.innerText = minRangeInput.value;
	maxRangeNumber.innerText = maxRangeInput.value;
	randomNumber = random();
	e.preventDefault();
	console.log(randomNumber);
}

function random() {
  var random = Math.floor(Math.random() * (parseInt(maxRangeInput.value) - parseInt(minRangeInput.value) + 1)) + parseInt(minRangeInput.value);
  return random;
}

function updateGuesses(e) {
	challenger1Name.innerText = player1NameInput.value;
	challenger2Name.innerText = player2NameInput.value;
	player1Guess.innerText = player1GuessInput.value;
	player2Guess.innerText = player2GuessInput.value;
	p1HintMessage();
	p2HintMessage();
	e.preventDefault();
}

function p1HintMessage() {
	if (player1GuessInput.value < randomNumber) {
		player1Hint.innerText = "That's too low!";
	} else if (player1GuessInput.value > randomNumber) {
		player1Hint.innerText = "That's too high!";
	} else if (player1GuessInput.value === "") {
		player1Hint.innerText = "ERROR";
		} else {
		player1Hint.innerText = "Boom!";
		appendCard();
	}
}

function p2HintMessage() {
	if (player2GuessInput.value < randomNumber) {
		player2Hint.innerText = "That's too low";
	} else if (player2GuessInput.value > randomNumber) {
		player2Hint.innerText = "That's too high!";
	} else if (player2GuessInput.value === "") {
		player2Hint.innerText = "ERROR";
	} else {
		player2Hint.innerText = "Boom!";
	}
}

function appendCard() {
	sectionRight.innerHTML =
	 ` <article class="result-card">
		<h4 id="right-card-name1">CHALLENGER 1 NAME</h4>
		<p>vs</p>
		<h4 id="right-card-name2">CHALLENGER 2 NAME</h4>
		<h2 id="winner-name">CHALLENGER 2 NAME</h2>
		<h2 class="right-card-winner">WINNER</h2>
		<p><span class="guess-count">?</span> GUESSES</p>
		<p><span class="minutes">?</span>MINUTES</p>
		<button class="delete-card">X</button>
	   </article>
	` + sectionRight.innerHTML;
}

function resetGame(e) {
	// e.preventDefault();
}

function clearGame(e) {
	console.log("Ok");
	// e.preventDefault();
}
















// Psuedo code for Number Guesser

// Phase 1 Zero state
// 1. Create two inputs for custom range.
// 2. Make a button that will update the input ranges.
// 3. Add input fields for two players, each containing a label. Guess field should only accept numeric values. Name field should only accept alphanumeric values.
// 4. Make a button that submits the players guesses.
// 5. Make a button that will clear the input fields but not reset the random number. And is disabled when nothing is in the input field.
// 6. Make a button that resets the game and generates a new random #. And should be disabled if there is nothing to reset.

// Phase 1 Guess State

// 1. Add global variables for input fields, buttons, and any class selectors that will be changed. 
// 2. Add event listener for Update button. Make a function that creates a random # when the Update button is clicked.
// 3. Add event listener for Submit guess button. Make a function (appendCard) that appends the guess card into right side of the page.
// 4. Change innerText or Html of guesses at bottom (left side) of page. Use inside appendCard function.

// Phase 2

// 1. Create function with a conditional that prevents anything but numerical values for the range and guess inputs.
// 2. Write conditional with previous function that only allows numbers in the defined range to be guessed.
// 3. Write conditional in the same previous function that displays an error message when the guess is outside the max range.
// 4. Same as above but with min-range.
// 5. Write another conditional in previous function that displays an error message if either guess is not a number.
// 6. Use conditional that display an error message if guess is outside of range of possible answers.
// 7. Use conditional that displays an error message if either update or submit buttons are clicked and the input fields have no values entered

// Phase 3
// 1. Use conditional that says when a player wins, the max number increments by 10.
// 2. Same as above but with min-number.
// 3. Use conditional that will change the innerText or Html to display the players names, then specifically just the winner.
// 4. Use a counter to keep track of each guess entered, with conditional that will change innerText or Html to display the updated guess count.
// 5. Make a function that removes the card from the page.

// Phase 4
// 1. Use a timestamp to keep track of how long each guess takes, then change innerText or html to display the time when the guess is displayed.
// 2. In the appendCard function change the style of the append-card class to display a css animation. Do the same for when the delete card function is ran and the card is deleted.
// 3. Write a function that has  conditionals for when certain numbers are entered, secret mp3’s will be played.
// 4. Create a Clear All button. Then create the variable, along with an event listener for when the button is clicked a remeveAllCards function will run, and will change the style of the section class to display none.
// 5. Create a Sort button. Then create a variable for it, then add an event listener to run a function that will sort the game cards by least amount of guesses to greatest. Maybe use data attributes to create an array. Then change innerText or html on left side of page to display the high score.
