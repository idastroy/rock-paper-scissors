/* Create a Rock Paper Scissors game that a player will play against the computer 5 times */

const gameOptions = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

/* Create a function called computerPlay to randomly return either Rock, Paper, or Scissors */

function computerPlay() {
    const randomOption = Math.floor(Math.random() * gameOptions.length);
    return (gameOptions[randomOption]);
}

//console.log(computerPlay());

/* Create a function called playRound that plays a single round of RPS
    playRound will take 2 parameters (playerSelection, computerSelection)
    return a string that declares the winner of the round with every possible outcome like "You Lose! Paper beats Rock"    
    make playerSelection parameter case-insensitive */

function playRound(playerSelection, computerSelection) {
    let userOutput = playerSelection.toString().toLowerCase();
    if (userOutput === "rock" && computerSelection === "Paper") {
        computerScore += 1;
        return "Paper beats rock, you lose!";
    } else if (userOutput === "rock" && computerSelection === "Scissors") {
        userScore += 1;
        return "Rock beats scissors, you win!";
    } else if (userOutput === "paper" && computerSelection === "Rock") {
        userScore += 1;
        return "Paper beats rock, you win!";
    } else if (userOutput === "paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return "Scissors beat paper, you lose!";
    } else if (userOutput === "scissors" && computerSelection === "Paper") {
        userScore += 1;
        return "Scissors best paper, you win!";
    } else if (userOutput === "scissors" && computerSelection === "Rock") {
        computerScore += 1;
        return "Rock beats scissors, you lose!";
    } else {
        userScore += 1;
        computerScore += 1;
        return "It's a tie!";
    }
    
}

/* Return the results of the playRound function call (you'll use this later on, test with console.log()) */

//console.log(playRound("Paper", computerPlay()));


/* Create a new function called game() that plays through the playRound function 5 times
    Steps: 
        call the playRound function inside of this function
        play through a 5 round game that
        keeps score
        and reports a winner or loser at the end
        use console.log() to display the results of each round and winner at the end */

function game() {
    console.log(playRound("rock", computerPlay()));
    console.log(playRound("paper", computerPlay()));
    console.log(playRound("rock", computerPlay()));
    console.log(playRound("scissors", computerPlay()));
    console.log(playRound("paper", computerPlay()));
    if (userScore > computerScore) {
        return "You won!"
    } if (userScore < computerScore) {
        return "You lost!"
    } else {
        return "You tied with the computer!"
    }
}

console.log(game());

let score = `${userScore}, ${computerScore}`;
console.log(score);


/* Use prompt() to get input from the user */ 

let playerSelection = window.prompt("Rock, paper, or scissors?");
alert(game()); 
