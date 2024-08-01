const getHumanInput = () => {
    let humanResponse;
    do {
        humanResponse = prompt("Rock, Paper, or Scissors?").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(humanResponse));
    return humanResponse;
};

const getComputerInput = () => {
    const computerResponse = Math.floor(Math.random() * 3) + 1;
    switch (computerResponse) {
        case 1:
            return "rock";  // Use lowercase
        case 2:
            return "paper"; // Use lowercase
        case 3:
            return "scissors"; // Use lowercase
    }
};

const game = () => {
    let humanPoints = 0;
    let computerPoints = 0;

    while (humanPoints < 3 && computerPoints < 3) {
        const humanResponse = getHumanInput();
        const computerResponse = getComputerInput();

        console.log("Human chooses: " + humanResponse.charAt(0).toUpperCase() + humanResponse.slice(1));
        console.log("Computer chooses: " + computerResponse.charAt(0).toUpperCase() + computerResponse.slice(1));

        if ((humanResponse === "rock" && computerResponse === "scissors") ||
            (humanResponse === "paper" && computerResponse === "rock") ||
            (humanResponse === "scissors" && computerResponse === "paper")) {
            console.log("You win this round!");
            humanPoints += 1;
        } else if ((computerResponse === "rock" && humanResponse === "scissors") ||
                   (computerResponse === "paper" && humanResponse === "rock") ||
                   (computerResponse === "scissors" && humanResponse === "paper")) {
            console.log("Computer wins this round!");
            computerPoints += 1;
        } else {
            console.log("It's a tie!");
        }

        console.log("Score - Human: " + humanPoints + " Computer: " + computerPoints);
    }

    if (humanPoints === 3) {
        console.log("You Win!");
    } else {
        console.log("You Lose.");
    }
};

game();

// /Users/luissaravia/VSCode/Odin Project/Odin Exercises - JavaScript/repos/rps.js