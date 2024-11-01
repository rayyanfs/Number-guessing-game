"use strict";
/*
console.log(document.querySelector('.message').textContent); // to select a class, use # for id, . for class
// textcontent allows to access element's message/text content
// dom is document object model, allows js to access html and css.
// change css and html stuff using js code, DOM
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // value to get value property
*/
// HANDLING THE CLICK OF A BUTTON

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let attempts = 0;
console.log(number);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//addEventlistenor adds event, then add the event in bracket
// second arguemnt is the function that needs to be run.

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (attempts === 20) {
    document.querySelector(".attempts").textContent = "no more";
  } else {
    attempts++;
    document.querySelector(".attempts").textContent = attempts;
  }

  if (!guess) {
    // 0 is falsy so guess is false so !guess is true
    displayMessage("❌No number entered");

    // when win
  } else if (guess === number) {
    displayMessage("☑️Correct!!");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // to change styles using DOM manipulation.

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").style.width = "30rem"; //always string in style!!

    //when too high high
  } else if (guess > 20) {
    displayMessage("dawg can u read");
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(`wrong, too ${guess > number ? "high" : "low"}`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  number = Math.trunc(Math.random() * 20) + 1;
  attempts = 0;
  document.querySelector(".attempts").textContent = attempts;
});
