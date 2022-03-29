const gameOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const score = document.getElementById("results");
score.innerHTML = `Play best out of 5`;

function computerPlay() { //randomly returns Rock, Paper or Scissors
    let computerPick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    score.innerHTML = `
    <p>Computer pick: ${computerPick}<p>
    `
    return computerPick;
}

function playRound(playerSelection, computerSelection) { //plays a single round of RPS and declares the winner
    let result = "";
    
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        result += `Paper beats rock, you lose! ${playerScore}, ${computerScore}`;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        result += `Rock beats scissors, you win! ${playerScore}, ${computerScore}`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        result += `Paper beats rock, you win! ${playerScore}, ${computerScore}`;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        result += `Scissors beat paper, you lose! ${playerScore}, ${computerScore}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        result += `Scissors beat paper, you win! ${playerScore}, ${computerScore}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        result += `Rock beats scissors, you lose! ${playerScore}, ${computerScore}`;
    } else {
        result += `It's a tie! ${playerScore}, ${computerScore}`;
    }

    if (computerScore + playerScore === 5) {
        if (playerScore > computerScore) {
            playerScore = 0;
            computerScore = 0;
            result += `<p>You won! Play again!</p>`
        } else {
            playerScore = 0;
            computerScore = 0;
            result += `<p>You lost! Try again!</p>`
        }
    }

   score.innerHTML += `<p>${result}</p>`;
};

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        let player = button.value;
        let computer = computerPlay();
        playRound(player, computer);
    })
})
