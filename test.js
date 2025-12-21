const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const options = ["rock", "paper", "scissors"]
const statement = document.getElementById("statement")


let humanScore = 0
let computerScore = 0

function playGame(humanChoice) {

    let result = ""
    const computerChoice = options[Math.floor(Math.random() * options.length)]

        if (computerChoice === humanChoice) {
            result = "It was a tie!"
        }
        else{
            switch (humanChoice) {
                case "rock" :
                    result = (computerChoice === "scissors") ? "You Win!" : "You Lose"
                    break;
            
                case "paper":
                    result = (computerChoice === "rock") ? "You Win!" : "You Lose"
                    break;

                case "scissors":
                    result = (computerChoice === "paper") ? "You Win!" : "You Lose"
                    break;
            }
        }

        statement.textContent = result
    }

