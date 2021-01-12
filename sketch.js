//.ref = refers to the data
//.on = creates a listener that keeps on listening to the changes in the database
//.set = used to set/write the value of the database

var database, playerCount, form, player, game, backgroundImage;
var gameState = 0;
var allPlayers;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4) {
   game.update(1);
    }
    if(gameState === 1) {
   clear();
   game.play();
    }
}

