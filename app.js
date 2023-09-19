
const playerChoiceEl = document.getElementById("playerChoice");
const playerScoreEl = document.getElementById('playerScore');
const computerChoiceEl = document.getElementById("computerChoice");
const computerScoreEl = document.getElementById('computerScore');

const playerIcons = document.querySelectorAll('.player-contaner .icons i');
const computerIcons = document.querySelectorAll('.computer-contaner .icons i');


const playerEarnedScored = 0;
const computerEarnedScored = 0;
let computerChoice = "";


function resetSelected () {
    playerIcons.forEach(icon => icon.classList.remove("selected"));
    computerIcons.forEach(icon => icon.classList.remove("selected"))
};


function computerAction () {
    const randomNumber = Math.floor(Math.random() * 5);
    computerIcons[randomNumber].classList.add('selected');
    computerChoice = computerIcons[randomNumber].getAttribute('title');
    computerChoiceEl.textContent = ` --- ${computerChoice}`;   
};

const choices = {
    rock : {name: 'Rock', defeats : ['scissors', 'lizard']},
    paper : {name: 'Paper', defeats : ['rock', 'spock']},
    scissors : {name: 'Scissors', defeats : ['paper', 'lizard']},
    lizard : {name: 'Lizard', defeats : ['paper', 'spock']},
    spock : {name: 'Spock', defeats : ['scissors', 'rock']},
};






document.querySelector('.player-contaner').addEventListener('click', function (e) {
    const clickTarget = e.target;

    if (clickTarget.classList.contains("far")){
        resetSelected();
        clickTarget.classList.add('selected');
        playerChoiceEl.textContent = ` --- ${clickTarget.getAttribute('title')}`;
        computerAction();

    };
});