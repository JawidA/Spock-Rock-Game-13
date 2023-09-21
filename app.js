import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";
// The confetti effect is not working and I don't know the reason.
// The problem is that when confetti s started it makes it background disappear.

const playerChoiceEl = document.getElementById("playerChoice");
const playerScoreEl = document.getElementById('playerScore');
const computerChoiceEl = document.getElementById("computerChoice");
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');

const playerIcons = document.querySelectorAll('.player-contaner .icons i');
const computerIcons = document.querySelectorAll('.computer-contaner .icons i');

let playerScore = 0;
let computerScore = 0;
let computerChoice = "";
let playerChoice = "";

const choices = {
    rock : {name: 'Rock', defeats : ['scissors', 'lizard']},
    paper : {name: 'Paper', defeats : ['rock', 'spock']},
    scissors : {name: 'Scissors', defeats : ['paper', 'lizard']},
    lizard : {name: 'Lizard', defeats : ['paper', 'spock']},
    spock : {name: 'Spock', defeats : ['scissors', 'rock']},
};

function resetSelected () {
    playerIcons.forEach(icon => icon.classList.remove("selected"));
    computerIcons.forEach(icon => icon.classList.remove("selected"));
    // stopConfetti(); 
    // removeConfetti();
};
// window.resetSelected = resetSelected;

// Reseting everything (we are using onclick in html. so, no need for event listener)
function resetAll() {
    resetSelected();
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    playerChoiceEl.textContent =  '';
    computerChoiceEl.textContent =  '';
    resultText.textContent = "Make a Choice";
};
window.resetAll = resetAll;

function computerAction () {
    const randomNumber = Math.floor(Math.random() * 5);
    computerIcons[randomNumber].classList.add('selected');
    computerChoice = computerIcons[randomNumber].getAttribute('title').toLowerCase();
    computerChoiceEl.textContent = ` --- ${computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase())}`;   
};


function checkWinner () {
    if (playerChoice === computerChoice){
        resultText.textContent = "it's a tie."
    } else {
        const choice = choices[playerChoice];
        // console.log(choice.defeats.indexOf(computerChoice))
        if (choice.defeats.indexOf(computerChoice) > -1){
            resultText.textContent = 'You Won!';
            playerScore++;
            playerScoreEl.textContent = playerScore;
            // startConfetti();
        } else {
            resultText.textContent = "You Lost!"
            computerScore++;
            computerScoreEl.textContent = computerScore;
        }
    }
};
// window.checkWinner = checkWinner;

document.querySelector('.player-contaner').addEventListener('click', function (e) {
    const clickTarget = e.target;

    if (clickTarget.classList.contains("far")){
        resetSelected();
        clickTarget.classList.add('selected');
        playerChoiceEl.textContent = ` --- ${clickTarget.getAttribute('title')}`;
        playerChoice = clickTarget.getAttribute('title').toLowerCase();
        computerAction();
        checkWinner();
    };
});
