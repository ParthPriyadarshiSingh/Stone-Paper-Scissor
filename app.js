let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const getUserScore = document.querySelector("#user-score");
const getCompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranI = Math.floor(Math.random()*3); 
    /*we can't generate random string from array
    but we can generate random number. Math.random()
    gives a decimal number between 0 and 1 but we can
    get desired range of random number by using the 
    above trick*/
    return options[ranI];
}

const drawGame = () => {
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Win!  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        getUserScore.innerText = userScore;
    } else {
        msg.innerText = `You Lose!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        getCompScore.innerText = compScore;

    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            /*if compChoice was rock, then game would
            have been draw. This means that it is 
            either paper or scissor*/
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // compChoice = rock/scissor
            userWin = compChoice === "rock" ? true : false;
        } else {
            //compChoice = rock/paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})