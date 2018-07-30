// generate random number at start of each game between 19 - 120

$(document).ready(function() {

var wins = 0;

var losses = 0;

var userScore = 0;

var winDiv = $("<p>'You Won!'</p>");

var lossDiv = $("<p>'You Lost!'</p>");

var scoreDiv = $("<div>");

var newDiv = $("<div>");

var random = Math.floor(Math.random() * (120 - 19 + 1) + 19);

// var random = (Math.floor(19 + Math.random() * 120));
var redRandom = (Math.floor(1 + Math.random() * 12));
var blueRandom = (Math.floor(1 + Math.random() * 12));
var yellowRandom = (Math.floor(1 + Math.random() * 12));
var greenRandom = (Math.floor(1 + Math.random() * 12));

newDiv.text(random);
$("#randomNumber").html(newDiv);

scoreDiv.text(userScore);
$("#scoreNumber").html(scoreDiv);

console.log(random)
console.log(redRandom);
console.log(blueRandom);
console.log(yellowRandom);
console.log(greenRandom);

var reset = function() {
    random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    // random = (Math.floor(19 + Math.random() * 120));
    redRandom = (Math.floor(1 + Math.random() * 12));
    blueRandom = (Math.floor(1 + Math.random() * 12));
    yellowRandom = (Math.floor(1 + Math.random() * 12));
    greenRandom = (Math.floor(1 + Math.random() * 12));
    newDiv = $("<div>");
    userScore = 0;
    newDiv.text(random);
    $("#randomNumber").html(newDiv);
    scoreDiv.text(userScore);
    $("#scoreNumber").html(scoreDiv);
    // $( "#winLoss" ).empty();
    console.log(random);
    console.log(redRandom);
    console.log(blueRandom);
    console.log(yellowRandom);
    console.log(greenRandom);
}

var scoreCheck = function() {
    if (userScore === random) {
        $("#winLoss").html(winDiv);
        wins++;
        $("#wins").text("Wins:" + wins);
        reset();
    }
    else if (userScore > random) {
        $("#winLoss").html(lossDiv);
        losses++;
        $("#losses").text("Losses:" + losses);
        reset();
    }
}

    // if (redRandom === blueRandom || redRandom === yellowRandom || redRandom === greenRandom) {
    //     redRandom = (Math.floor(1 + Math.random() * 12));
    // }
    // if (blueRandom === redRandom || redRandom === yellowRandom || redRandom === greenRandom) {
    //     redRandom = (Math.floor(1 + Math.random() * 12));
    // }
    // if (redRandom === blueRandom || redRandom === yellowRandom || redRandom === greenRandom) {
    //     redRandom = (Math.floor(1 + Math.random() * 12));
    // }
    // if (redRandom === blueRandom || redRandom === yellowRandom || redRandom === greenRandom) {
    //     redRandom = (Math.floor(1 + Math.random() * 12));
    // }

    
    $("#red").on("click", function() {
        // userScore.text(userRandom);
        // userScore = redRandom;
        // totalOfGuesses.push(redRandom);
        // for (i = 0 ;i < totalOfGuesses.length; i++) {
        //     userScore = i + userScore;
        // }
        userScore = redRandom + userScore;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
        $( "#winLoss" ).empty();
        scoreCheck();
    });
    $("#blue").on("click", function() {
        userScore = blueRandom + userScore;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
        $( "#winLoss" ).empty();
        scoreCheck();
    });
    $("#yellow").on("click", function() {
        userScore = yellowRandom + userScore;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
        $( "#winLoss" ).empty();
        scoreCheck();
    });
    $("#green").on("click", function() {
        userScore = greenRandom + userScore;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
        $( "#winLoss" ).empty();
        scoreCheck();
    });

});



// CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
// ...
    

// review lotteryNumbers assignment (jQuery day3)

// display random number to page at start of each game

// each crystal has hidden random value between 1 - 12 (generates new random value each time game begins)

// var wins = 0;

// var losses = 0;

// var userScore = 0;

// game restarts whenever player wins or loses and updates win/losses

// generated new random number when game restarts

// do not refresh page to restart the game
