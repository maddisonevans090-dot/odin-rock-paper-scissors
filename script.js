function getComputerChoice(computerChoice) {
    const options = ["rock", "paper", "scissors"];
    computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

function getHumanChoice() {
    let choice = prompt ("Rock, Paper, or Scissors?")
    return choice.toLowerCase()
}


let humanScore = 0
let computerScore = 0

function playGame(rounds) {
    for (let round = 0; round < rounds; round++) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == null) {
                return console.log("I think you forgot to type something. Try again.")
            }

            if (computerChoice == humanChoice) {
                return console.log("It's a Tie!")
            }
            else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
                computerScore = ++computerScore;
                return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            }
            else if ((humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "scissors")) {
                humanScore = ++humanScore;
                return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            }
            }
        
        playRound(humanSelection, computerSelection);
    }



        if (computerScore > humanScore) {
            return console.log ("Computer wins the game!")
        }
        else if (humanScore > computerScore) {
            return console.log("You win the game!")
        }
        else {
            return console.log("IT's a tie!")
        }

}

playGame(5)