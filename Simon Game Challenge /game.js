var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0
var gameStarted = 0

$(document).keydown(function() {
    if (gameStarted === 0) {
        gameStarted = 1;
        $("h1").text("Level " + level);
        nextSequence();
    }
});

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    buttonSounds(userChosenColor);
    buttonAnimation(userChosenColor);

    checkAnswer(userClickedPattern.length -1);
});

// displays the next sequence in the simon says game
function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);

    buttonAnimation(randomColor);
    buttonSounds(randomColor);

    level++;
    $("h1").text("Level " + level);
}

// flashes button when pressed or as part of the nextSequence
function buttonAnimation (name) {
    var button = $("#" + name);
    button.addClass("pressed");
    setTimeout(function() {
        button.removeClass("pressed")
    }, 100);
}

// plays the game sound associated with each button
function buttonSounds (name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

// check players answer against current game pattern
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      buttonSounds("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// Starts the game over if the user gets any of the sequence wrong
function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = 0;  
}