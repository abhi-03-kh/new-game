document.getElementById("rock").addEventListener("click", () => handleChoice("Rock"));
document.getElementById("paper").addEventListener("click", () => handleChoice("Paper"));
document.getElementById("scissor").addEventListener("click", () => handleChoice("Scissor"));




let humanScore = 0;
let computerScore = 0;



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




function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        return "Oh! It's a draw";
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return "You lose, 'Paper beats Rock'";
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        return "You Win, 'Rock beats Scissor'";
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You Win, 'Paper beats Rock'";
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        return "Oh! It's a draw";
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        return "You lose, 'Scissor beats Paper'";
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        return "You lose, 'Rock beats Scissor'";
    }
    else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        return "You Win, 'Scissor beats Paper'";
    }
    else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        return "Oh! It's a draw";
    }
}



function updateDisplay(message) {
    document.getElementById("results").textContent = message;
    document.getElementById("score").textContent = 
        `Score → You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore === 5 ? "🎉 You win the game!" : "💻 Computer wins the game!";
        document.getElementById("results").textContent = winner;
        disableButtons();
    }
}



function handleChoice(choice) {
    let computerChoice = getComputerChoice();
    let message = playRound(choice, computerChoice);

    // Update scores
    if (message.includes("You Win")) {
        humanScore++;
    } else if (message.includes("You lose")) {
        computerScore++;
    }

    updateDisplay(message);
}



function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}



    
