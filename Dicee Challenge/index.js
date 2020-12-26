/* This is my first attempt at problem but defintely can use some major fixing
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var diceImage2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
}

else {
    document.querySelector("h1").textContent = "Draw!";
} */

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDice1);
image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
}

else {
    document.querySelector("h1").textContent = "Draw!";
}

