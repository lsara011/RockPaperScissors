const getHumanInput = () => {
    let humanResponse;
    humanResponse = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanResponse;
};

const getComputerInput = () => {
    const computerResponse = Math.floor(Math.random() * 3) + 1;
    switch (computerResponse) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
};

let human = 0;
let robot = 0;

function playRound(humanInput) {
    let humanText = document.getElementById("humanScore");
    let robotText = document.getElementById("robotScore");
    let text = getComputerInput();
    const rText = document.getElementById("robotText");
    const promptText = document.getElementById("Prompt");

    rText.textContent = text;

    const humanChoice = humanInput.toLowerCase();
    const computerChoice = text.toLowerCase();

    if (humanChoice === computerChoice) {
        promptText.textContent = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        promptText.textContent = "Human wins!";
        human += 1;
    } else {
        promptText.textContent = "Computer wins!";
        robot += 1;
    }

    humanText.textContent = human;
    robotText.textContent = robot;
    if (human == 5) {
        alert("Human Wins This Round! :D")
        resetGame()
    }
    else if(robot == 5){
        alert("Computer Wins :(")
        resetGame() 
    }
}

function resetGame(){
    human = 0
    robot = 0   

    let humanText = document.getElementById("humanScore");
    let robotText = document.getElementById("robotScore");
    const rText = document.getElementById("robotText");
    const promptText = document.getElementById("Prompt");
    humanText.textContent = 0
    robotText.textContent = 0
    rText.textContent = "Select a button to play against a robot!"    
}
