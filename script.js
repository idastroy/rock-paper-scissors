const gameOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const playerPoints = document.getElementById("playerPoints");
const computerPoints = document.getElementById("computerPoints")
const subheading = document.getElementById("subheading");
subheading.textContent = "Can you beat me at a game of Rock Paper Scissors? The first to 5 wins!"


function computerPlay() { //randomly returns Rock, Paper or Scissors
    let computerPick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection) { //plays and declares the winner of a single round of RPS
    let result = "";
    const roundResults = document.getElementById("results");
    const computerIcon = document.getElementById("computerPlay");
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Paper beats rock, you lose!`;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand-scissors"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Rock beats scissors, you win!`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand-back-fist"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Paper beats rock, you win!`;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand-scissors"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Scissors beat paper, you lose!`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Scissors beat paper, you win!`;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        computerIcon.innerHTML = `I played <i class="fa-regular fa-hand-back-fist"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `Rock beats scissors, you lose!`;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        computerIcon.innerHTML = `We both played <i class="fa-regular fa-hand-back-fist"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `It's a tie!`;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        computerIcon.innerHTML = `We both played <i class="fa-regular fa-hand"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `It's a tie!`;
    } else {
        computerIcon.innerHTML = `We both played <i class="fa-regular fa-hand-scissors"></i>`
        playerPoints.innerHTML = `${playerScore}`;
        computerPoints.innerHTML = `${computerScore}`;
        subheading.textContent = `${playerSelection}`;
        result += `It's a tie!`;
    } 

    if (computerScore === 5 || playerScore === 5) {
        if (playerScore > computerScore) {
            playerScore = 0;
            computerScore = 0;
            subheading.innerHTML = `You won <i class="fa-regular fa-face-angry"></i> I'll beat you next time!`
        } else {
            playerScore = 0;
            computerScore = 0;
            subheading.innerHTML = `You lost! <i class="fa-regular fa-face-grin-tongue-squint"></i> Better luck next time!`
        }

    }
   roundResults.innerHTML = `<p>${result}</p>`;
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        let player = button.value;
        let computer = computerPlay();
        playRound(player, computer);
    })
})
