
const buttons = document.querySelectorAll('.humanChoice button')

//function getHumanChoice(){
//buttons.forEach(button => button.addEventListener('click', () => {
//    let target = .target
//        switch(target.id){
//            case 'rock':
//                return 'rock'
//                break;
//            case 'paper':
//                return 'paper'
//                break;
//            case 'scissors':
//                return 'scissors'
//                break;
//        }
//    }))
                
    //let choice = prompt("choose your fighter")
    //if (choice == "rock"){
    //    return "rock" 
    //} else if ( choice == "paper"){
    //    return "paper"
    //} else if ( choice == "scissors"){
    //    return "scissors"
    //} else {
    //    return false
    //}
            
//}
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
    
        
const result = document.querySelector('.result')
result.style.display ='none'
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;        

function playRound(humanChoice, computerChoice){

    let gameResultText = "The Human choices: " + humanChoice + " vs " + "The Computer choices: " + computerChoice;
    const gameResult = document.querySelector('.gameResult') || document.createElement('div')
    gameResult.className = 'gameResult'
    gameResult.textContent = gameResultText
    result.appendChild(gameResult)
const howWins = document.querySelector('.howWins') || document.createElement('div') 
howWins.className = 'howWins'
howWins.textContent = ''
result.appendChild(howWins)
if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
    humanScore++
    howWins.textContent = 'Humans wins'
} else if( (humanChoice === "rock" && computerChoice === "paper") || ( humanChoice === "paper" && computerChoice === "scissors") || ( humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++
    howWins.textContent = 'Computers wins'
    
    
} else {
    howWins.textContent = "it's a draw"
}
let score = `${humanScore} vs ${computerScore}`;
let finalScore = document.querySelector('.finalScore') || document.createElement('div')
finalScore.className = 'finalScore'
finalScore.textContent = `score: ${score}`
result.appendChild(finalScore)

if(roundCounter === 4){
    buttons.forEach(button => button.disabled = true)
    const finalResult = document.createElement('div');
    finalResult.className = 'finalResult';
        if (humanScore > computerScore) {
            finalResult.textContent = `Game Over! Human wins the game with a score of ${humanScore} to ${computerScore}.`;
        } else if (humanScore < computerScore) {
            finalResult.textContent = `Game Over! Computer wins the game with a score of ${computerScore} to ${humanScore}.`;
        } else {
            finalResult.textContent = `Game Over! It's a tie with a score of ${humanScore} to ${computerScore}.`;
        }
        result.appendChild(finalResult);
    }
 return { humanScore , computerScore};
}

buttons.forEach((button => {
    button.addEventListener ('click', (event) => {
        if (roundCounter < 5){
        result.style.display = 'block'
        const humanChoice = event.target.id
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        roundCounter++;
}})
}))

//playRound()
//let humanSelection = getHumanChoice();
//let computerSelection = getComputerChoice();
//
//playRound(humanSelection, computerSelection)
//let i = 1
//function playGame(){
//    while(i <= 5){
//    playRound(humanSelection, computerSelection)
//    humanSelection = getHumanChoice();
//    let x = Math.floor(Math.random() * 3) + 1
//    computerSelection = getComputerChoice();
//    i++
//    }
//
//    if( humanScore > computerScore){
//        console.log("the humans win")
//    } else {
//        console.log("the computer wins")
//    }
//}


//playGame()




