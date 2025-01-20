function getComputerChoice (){
    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1){
        return "scissors";
    } else if (x == 2){
        return "rock";
    } else if ( x == 3){
        return "paper";
    } else {
        return false
    }
}

//console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("choose your fighter")
    if (choice == "rock"){
        return "rock" 
    } else if ( choice == "paper"){
        return "paper"
    } else if ( choice == "scissors"){
        return "scissors"
    } else {
        return false
    }

}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    let result = "the human choices: " + humanChoice + " vs " + "the computer choices: " + computerChoice;
    console.log(result)

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++
        console.log("human wins")
    } else if( (humanChoice === "rock" && computerChoice === "paper") || ( humanChoice === "paper" && computerChoice === "scissors") || ( humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++
        console.log("computer wins")
    } else {
        console.log("it's a draw");
    }

    let score = `${humanScore} vs ${computerScore}`;

    console.log("score:", score)

    return { humanScore , computerScore};
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection)
let i = 1
function playGame(){
    while(i <= 5){
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice();
    let x = Math.floor(Math.random() * 3) + 1
    computerSelection = getComputerChoice();
    i++
    }

    if( humanScore > computerScore){
        console.log("the humans win")
    } else {
        console.log("the computer wins")
    }
}


playGame()




