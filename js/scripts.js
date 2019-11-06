//Business Logic
// 1. Random number generator to create a number between 1 and 6: Variable to hold that current result.
// 2. Variable to contain the result of the first roll and all addtitional rolls provided the user doesn't roll a 1. if they roll a 1 this number goes to zero.
//
// 3. Hold button to allow the current user to switch players and bank their "total score" for that round.
// 4. Roll button to allow the user to roll another number. (connected to 1 and 2).
// 5. Alert or HTML change when a player hits 100 first.
//Toggle correct player between Zero and One to indicate current player

var randomNumber;
var currentResult = 0;
// var currentPlayerTotal;
var currentPlayer = 0;

//need variable to old whichever object total we are currently focused on




function updateCurrentResult(){
  randomNumber = Math.floor((Math.random() * 6) + 1);
  console.log(randomNumber);

  if(randomNumber === 1){
    currentResult = 0;

    if(currentPlayer === 0){currentPlayer = 1;     randomNumber = 0;} //this is new
    else{currentPlayer = 0;    randomNumber = 0;} //this is new
    //statement here switching from Player1 to Player2;

    //add code here to switch to other player
  }else{
    currentResult += randomNumber;
    randomNumber = 0; //this is new
  }
};



Player = function(name){

this.name = name,
this.playerTotal = 0

}
GameManager = function(){

this.players = [];

}

GameManager.prototype.addPlayer = function (player){

//need variable called "newPlayer"
this.players.push(player);

}
//this works
// var newPlayer = new Player("juan");
var gameManager = new GameManager();
//
//
// gameManager.addPlayer(newPlayer);
// console.log(gameManager.players);

//this works ^

// gameManager.addPlayer()

function hold(){

gameManager.players[currentPlayer].playerTotal = gameManager.players[currentPlayer].playerTotal + currentResult;
if(currentPlayer === 0){ currentPlayer = 1; currentResult = 0;}else{currentPlayer = 0; currentResult = 0;}

randomNumber = 0; //this is new
console.log("hold");
winner();
}

function winner(){
  if(gameManager.players[0].playerTotal > 20){
    console.log("Player one wins");
  }else if(gameManager.players[1].playerTotal > 20)

    console.log("Player 2 wins");
}








// addPlayer(newPlayer);
//
// console.log(GameManager.players);




// var player1 = new Player("Juan");

// console.log(player1);


//UI

// 1. Form field when a user starts the game. The form submission will create 2 new objects and push them into an array. We will use this array to switch between the first and second players.
// 2. Hide the form and show the game when the player submits.

$(document).ready(function(){

  $("#roll").click(function() {
    // console.log(gameManager.players[0].playerTotal, gameManager.players[1].playerTotal);
    updateCurrentResult();
    console.log(gameManager.players[0].playerTotal, gameManager.players[1].playerTotal);


  });


  $("#hold").click(function() {
    // console.log(gameManager.players[currentPlayer].playerTotal);
    hold();
    // console.log(gameManager.players[1-currentPlayer].playerTotal);
    // console.log(currentPlayer);

  });
  $(".form-input").submit(function(event){
    event.preventDefault();
    var newPlayer1 = $("#addPlayer1").val();
    var newPlayer2 = $("#addPlayer2").val();



    var newPlayer1 = new Player(newPlayer1);
    gameManager.addPlayer(newPlayer1);
    var newPlayer2 = new Player(newPlayer2);
    gameManager.addPlayer(newPlayer2);
    console.log(gameManager.players);

    // winner();

  });




});
