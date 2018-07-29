// generate random number at start of each game between 19 - 120
var wins = 0;

var losses = 0;

var userScore = 0;

$(document).ready(function() {
    
    var newDiv = $("<div>");
    var random = (Math.floor(19 + Math.random() * 120));
    newDiv.text(random);
    $("#randomNumber").append(newDiv);
    console.log(random)
    var redRandom = (Math.floor(1 + Math.random() * 12));
    var blueRandom = (Math.floor(1 + Math.random() * 12));
    var yellowRandom = (Math.floor(1 + Math.random() * 12));
    var greenRandom = (Math.floor(1 + Math.random() * 12));

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

    console.log(redRandom);
    console.log(blueRandom);
    console.log(yellowRandom);
    console.log(greenRandom);

    var scoreDiv = $("<div>");

    $("#red").on("click", function() {
        // userScore.text(userRandom);
        userScore = redRandom;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
    });
    $("#blue").on("click", function() {
        // userScore.text(userRandom);
        userScore = blueRandom;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
    });
    $("#yellow").on("click", function() {
        // userScore.text(userRandom);
        userScore = yellowRandom;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
    });
    $("#green").on("click", function() {
        // userScore.text(userRandom);
        userScore = greenRandom;
        scoreDiv.text(userScore);
        $("#scoreNumber").html(scoreDiv);
        console.log(userScore);
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

// make user score an array ... then use a for loop to add the numbers
// if numbers > than random # player loses = to player wins

// $(document).ready(function() {

// $(".userChoice").on("click", function() {
    
//     var userRandom = (Math.floor(1 + Math.random() * 12));
//     // userScore.text(userRandom);
//     userScore = userRandom;
//     console.log(userScore);
//   });

// });
// crystal will generate random value each time it is clicked

// game restarts whenever player wins or loses and updates win/losses

// generated new random number when game restarts

// do not refresh page to restart the game
