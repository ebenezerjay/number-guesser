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
var deleteButton = document.querySelector(".delete-card");
var guessCounter = 1;
var hiddenArticle = document.querySelector(".hidden-article");



minRangeInput.addEventListener("input", function(e) {
	if (minRangeInput.value != "" || null && maxRangeInput.value != "" || null) {
		document.getElementById("update-button").disabled = false;
		updateButton.style.backgroundColor = "#6e6e6e";
	} else if (minRangeInput.value === "" || null && maxRangeInput.value === "" || null) {
		document.getElementById("update-button").disabled = true;
		updateButton.style.backgroundColor = "#d0d2d3";
	}
});

updateButton.addEventListener("click", function(e) {
	generateRandomNumber();
	e.preventDefault();
});

submitButton.addEventListener('click', function(e) {
	var player1GuessInteger = parseInt(player1GuessInput.value);
	var player2GuessInteger = parseInt(player2GuessInput.value);

		if (player1GuessInteger === "" || null || player2GuessInteger === "" || null) {
		alert("Enter a number for both guess fields");
	} else {
		p1UpdateGuess();
		p2UpdateGuess();
		guessCount();
		}
	});

player1GuessInput.addEventListener("input", function(e) {
	if (player1GuessInput.value != "" || null && player2GuessInput.value != "" || null) {
		document.getElementById("clear-game-button").disabled = false;
		clearGameButton.style.backgroundColor = "#6e6e6e";
	} else if (player1GuessInput.value === "" || null && player2GuessInput.value === "" || null) {
		document.getElementById("clear-game-button").disabled = true;
		clearGameButton.style.backgroundColor = "#d0d2d3";
	}
});

player1GuessInput.addEventListener("input", function(e) {
	if (player1GuessInput.value != "" || null && player2GuessInput.value != "" || null) {
		document.getElementById("reset-game-button").disabled = false;
		resetGameButton.style.backgroundColor = "#6e6e6e";
	} else if (player1GuessInput.value === "" || null && player2GuessInput.value === "" || null) {
		document.getElementById("reset-game-button").disabled = true;
		resetGameButton.style.backgroundColor = "#d0d2d3";
	}
});

resetGameButton.addEventListener("click", resetGame);

clearGameButton.addEventListener('click', clearGame);

function generateRandomNumber(e) {
	var minRangeInteger = parseInt(minRangeInput.value);
	var maxRangeInteger = parseInt(maxRangeInput.value);

	if (minRangeInteger > maxRangeInteger || maxRangeInteger < minRangeInteger) {
		minRangeNumber.innerText = "error";
		maxRangeNumber.innerText = "error";
	}  else {
	minRangeNumber.innerText = minRangeInteger;
	maxRangeNumber.innerText = maxRangeInteger;
	randomNumber = random();	
	}
	console.log(randomNumber);
}

function random() {
  var random = Math.floor(Math.random() * (parseInt(maxRangeInput.value) - parseInt(minRangeInput.value) + 1))+ parseInt(minRangeInput.value);
  return random;
}

function dificulty() {
	var minRangeInteger = parseInt(minRangeInput.value);
	var maxRangeInteger = parseInt(maxRangeInput.value);
		minRangeNumber.innerText = minRangeInteger - 10;
		maxRangeNumber.innerText = maxRangeInteger + 10;
	random();
}

function p1UpdateGuess() {
	var player1GuessInteger = parseInt(player1GuessInput.value);
	var minRangeInteger = parseInt(minRangeNumber.value);
	var maxRangeInteger = parseInt(maxRangeNumber.value);

		if (player1GuessInteger < minRangeInteger) {
		player1Guess.innerText = "out of range";
		player1Guess.style.color = "red";
		player1Guess.style.fontSize = "200%";
		} else if (player1GuessInteger > maxRangeInteger) {
		player1Guess.innerText = "out of range";
		player1Guess.style.color = "red";
		player1Guess.style.fontSize = "200%";
		} else {
		challenger1Name.innerText = player1NameInput.value;
		player1Guess.innerText = player1GuessInteger;
		p1HintMessage();
	}
}

function p2UpdateGuess() {
	var player2GuessInteger = parseInt(player2GuessInput.value);
	var minRangeInteger = parseInt(minRangeNumber.value);
	var maxRangeInteger = parseInt(maxRangeNumber.value);

	if (player2GuessInteger < minRangeInteger) {
		player2Guess.innerText = "out of range";
		player2Guess.style.color = "red";
		player2Guess.style.fontSize = "200%";
		} else if (player2GuessInteger > maxRangeInteger) {
		player2Guess.innerText = "out of range";
		player2Guess.style.color = "red";
		player2Guess.style.fontSize = "200%";
		} else {
		challenger2Name.innerText = player2NameInput.value;
		player2Guess.innerText = player2GuessInteger;
		p2HintMessage();
	}
}

function p1HintMessage() {
	var player1GuessInteger = parseInt(player1GuessInput.value);
	var minRangeInteger = parseInt(minRangeInput.value);
	var maxRangeInteger = parseInt(maxRangeInput.value);

	if (player1GuessInteger < randomNumber) {
		player1Hint.innerText = "That's too low!";
	} else if (player1GuessInteger > randomNumber) {
		player1Hint.innerText = "That's too high!";
	} else if (player1GuessInteger === "" || null) {
		player1Hint.innerText = "ERROR";
		} else {
		player1Hint.innerText = "Boom!";
		appendCard();
		theWinner();
		dificulty();
	}
}

function p2HintMessage() {
	var player2GuessInteger = parseInt(player2GuessInput.value);
	var minRangeInteger = parseInt(minRangeInput.value);
	var maxRangeInteger = parseInt(maxRangeInput.value);

	if (player2GuessInteger < randomNumber) {
		player2Hint.innerText = "That's too low!";
	} else if (player2GuessInteger > randomNumber) {
		player2Hint.innerText = "That's too high!";
	} else if (player2GuessInteger === "") {
		player2Hint.innerText = "ERROR";
	} else {
		player2Hint.innerText = "Boom!";
		appendCard();
		theWinner();
		dificulty();
	}
}

function appendCard() {
	var winnerName = document.querySelector("#winner-name");
	var cardCounter = cardCounter + 1;

	sectionRight.innerHTML =
	 ` <article class="result-card" data-card="${cardCounter}">
		<div class="result-card-vs">
		<h5 id="right-card-name1">${player1NameInput.value}</h5>
		<p class="result-card-p-tag">vs</p>
		<h5 id="right-card-name2">${player2NameInput.value}</h5>
		</div>
		<h2 id="winner-name" class"winner-name">Challenger 1 Name</h2>
		<h2 class="right-card-winner">WINNER</h2>
		<div class="result-card-stats">
		<p class="right-card-guess-count" data-card="${cardCounter}">${guessCounter} GUESSES</p>
		<p class="right-card-mins"> MINUTES</p>
		<button class="delete-card" data-card="${cardCounter}">X</button>
		</div>
	   </article>
	` + sectionRight.innerHTML;
	var deleteButtonArray = document.querySelectorAll(".delete-card");
	for (var i = 0; i < deleteButtonArray.length; i++) {
		deleteButtonArray[i].addEventListener('click', removeCard);
	}
}

function theWinner() {
	var winnerName = document.querySelector("#winner-name");
	if (player1GuessInput.value == randomNumber) {
    winnerName.innerText = player1NameInput.value;
  } else {
    winnerName.innerText = player2NameInput.value;
  }
  generateRandomNumber();
}

function resetGame(e) {
	player1NameInput.value = "";
	player2NameInput.value = "";
	player1GuessInput.value = "";
	player2GuessInput.value = "";
	challenger1Name.innerText = "";
	challenger2Name.innerText = "";
	player1Guess.innerText = "?";
	player2Guess.innerText = "?";
	player1Hint.innerText = "";
	player2Hint.innerText = "";
	document.getElementById("reset-game-button").disabled = true;
	resetGameButton.style.backgroundColor = "#d0d2d3";
	generateRandomNumber();
	p1UpdateGuess();
	p2UpdateGuess();
	e.preventDefault();
}

function clearGame(e) {
	player1NameInput.value = "";
	player2NameInput.value = "";
	player1GuessInput.value = "";
	player2GuessInput.value = "";
	document.getElementById("clear-game-button").disabled = true;
	clearGameButton.style.backgroundColor = "#d0d2d3";
	e.preventDefault();
}

function removeCard(e) {
	event.target.parentElement.parentElement.remove();
	e.preventDefault();
}

function guessCount() {
	guessCounter++
	console.log(guessCounter);
	return guessCounter;
}









