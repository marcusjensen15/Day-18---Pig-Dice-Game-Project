//Business Logic
// 1. Random number generator to create a number between 1 and 6: Variable to hold that current result.
// 2. Variable to contain the result of the first roll and all addtitional rolls provided the user doesn't roll a 1. if they roll a 1 this number goes to zero.
//
// 3. Hold button to allow the current user to switch players and bank their "total score" for that round.
// 4. Roll button to allow the user to roll another number. (connected to 1 and 2).
// 5. Alert or HTML change when a player hits 100 first.
//Toggle correct player between Zero and One to indicate current player

//Tasks for Thursday:
// 1. Hide the player form after the user submits Done
// 2. Build user interface so both scores, and the current result are displaying on the DOM.
// 3. Incorporate a second dice into the game.
// 4. Show and display actual dice rolling after each roll.



//Business Logic

var randomNumber;
var currentResult = 0;
// var currentPlayerTotal;
var currentPlayer = 0;



Player = function(name) {
  this.name = name,
    this.playerTotal = 0
}

GameManager = function() {
  this.players = [];
}

GameManager.prototype.addPlayer = function(player) {
  this.players.push(player);
}

var gameManager = new GameManager();

function updateCurrentResult() {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  console.log(randomNumber);
  $("#rollHolder").text(randomNumber); //this is new
  $("#roundScore").text(currentResult); //this is new

  if (randomNumber === 1) {
    currentResult = 0;

    if (currentPlayer === 0) {
      currentPlayer = 1;
      randomNumber = 0;
    } //this is new
    else {
      currentPlayer = 0;
      randomNumber = 0;
    } //this is new
    //statement here switching from Player1 to Player2;

    //add code here to switch to other player
  } else {
    currentResult += randomNumber;
    randomNumber = 0; //this is new
  }
};

function winner() {
  if (gameManager.players[0].playerTotal > 20) {
    alert("Player one wins");
  } else if (gameManager.players[1].playerTotal > 20)

    alert("Player 2 wins");
}

function hold() {
  gameManager.players[currentPlayer].playerTotal = gameManager.players[currentPlayer].playerTotal + currentResult;
  if (currentPlayer === 0) {
    currentPlayer = 1;
    currentResult = 0;
  } else {
    currentPlayer = 0;
    currentResult = 0;
  }

  randomNumber = 0; //this is new
  console.log("hold");
  winner();
}



//UI Logic

// 1. Form field when a user starts the game. The form submission will create 2 new objects and push them into an array. We will use this array to switch between the first and second players.
// 2. Hide the form and show the game when the player submits.

$(document).ready(function() {

  $("#roll").click(function() {

    updateCurrentResult();
    console.log(gameManager.players[0].playerTotal, gameManager.players[1].playerTotal);

    $("#playerScore").text(gameManager.players[0].playerTotal); //this is new
    $("#playerScore2").text(gameManager.players[1].playerTotal); //this is new


  });


  $("#hold").click(function() {

    hold();


  });
  $(".form-input").submit(function(event) {
    event.preventDefault();
    var newPlayer1 = $("#addPlayer1").val();
    var newPlayer2 = $("#addPlayer2").val();

    var newPlayer1 = new Player(newPlayer1);
    gameManager.addPlayer(newPlayer1);
    var newPlayer2 = new Player(newPlayer2);
    gameManager.addPlayer(newPlayer2);
    console.log(gameManager.players);



    $(".form-input").hide();

  });
});
