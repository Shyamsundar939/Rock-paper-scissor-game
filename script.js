let userScore = 0;
let computerScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara= document.querySelector("#user-score");
const computerscorePara= document.querySelector("#computer-score");

const userChoicePara = document.querySelector("#user-choice");
const computerChoicePara = document.querySelector("#computer-choice");

const resetBtn = document.querySelector("#reset-btn");

const computerChoices = () => {
    const comChoices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * comChoices.length);
    let computerChoice = choices[randomIndex];
    let comchoice = computerChoice.getAttribute("id");
    return comchoice;
}

const showWinner = (userWin,userChoice,comchoice) => {
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = `You wins! Your ${userChoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerscorePara.innerText = computerScore;
        msg.innerText = `Computer wins! ${comchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
}

const draw = () => {
    msg.innerText = "It's a draw! play again?";
    msg.style.backgroundColor = "#081b31";
}

choices.forEach((choice) => 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const comchoices = computerChoices();

        userChoicePara.innerText = `You choose: ${userChoice}`;
        computerChoicePara.innerText = `Computer chooses: ${comchoices}`;

        if (userChoice === comchoices) {
            draw();
        }
        else {
        let userWin=true;
        
        if (userChoice === "rock") {
            userWin = comchoices === "scissors" ? true : false;
        }
        else if (userChoice === "paper") {
            userWin = comchoices === "rock" ? true : false;
        }
        else if (userChoice === "scissors") {
            userWin = comchoices === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, comchoices);
        }
}));

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;

    userscorePara.innerText = 0;
    computerscorePara.innerText = 0;

    userChoicePara.innerText = "You choose: -";
    computerChoicePara.innerText = "Computer chooses: -";

    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#081b31";
});