function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);

    if (computerChoice === 0) {
        return 'Rock';
    } 
    else if(computerChoice=== 1) {
        return 'Paper';
    } 
    else {
        return 'Scissor'
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Your input ('Rock', 'Paper', 'Scissor')");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        return 'Rock';
    }
    else if (humanChoice === "paper") {
        return 'Paper';
    }
    else if (humanChoice === "scissor") {
        return 'Scissor';
    }
}


function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Oh! It's a draw");
        return 0;
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose,'Paper beats Rock'");
        return -1;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("You Win,'Rock beats Scissor'");
        return 1;      
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win,'Paper beats Rock'");
        return 1;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Oh!, It's a draw");
        return 0;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("You lose,'Scissor beats Paper'");
        return -1;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("You lose,'Rock beats Scissor'");
        return -1;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("You Win,'Scissor beats Paper'");
        return 1;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        console.log("Oh! It's a draw");
        return 0;  
    }
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    // Round 1 
    let result1 = playRound(getHumanChoice(), getComputerChoice());
    if (result1 === 1)  humanScore++;
    else if (result1 === -1) computerScore++;


    // Round 2
    let result2 = playRound(getHumanChoice(), getComputerChoice());
    if (result2 === 1) humanScore++;
    else if (result2 === -1) computerScore++;

    // Round 3
    let result3 = playRound(getHumanChoice(), getComputerChoice());
    if (result3 === 1) humanScore++;
    else if (result3 === -1) computerScore++;

    // Round 4
    let result4 = playRound(getHumanChoice(), getComputerChoice());
    if (result4 === 1) humanScore++;
    else if (result4 === -1) computerScore++;

    // Round 5
    let result5 = playRound(getHumanChoice(), getComputerChoice());
    if (result5 === 1) humanScore++;
    else if (result5 === -1) computerScore++;

    
    // Final
    console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a draw");
    }

}

playGame();