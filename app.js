
let userScore =0;
let compScore =0;

const msg = document.querySelector("#msg");
const msg2 = document.querySelector("#sec-msg");
const containers = document.querySelectorAll(".container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let indexes = ["rock", "paper", "scissors"];
    let rndmIdx = Math.floor(Math.random() * 3);
    return indexes[rndmIdx];
}


const checkWinner =(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win.your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#EEA243";
        msg.style.color ="black";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       msg.innerText = `You Lose.  ${compChoice} beat your ${userChoice}`;
       msg.style.backgroundColor ="#514B23";
       msg.style.color ="#ffff";

    }
}

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
  
    let userwin = true;

    if (compChoice === userChoice) {
        msg.innerText = `Game is drow. Both chooses ${compChoice}`;
        msg.style.backgroundColor =" #081b31";
        msg.style.color ="#ffff";
    } else{
        if(userChoice ==="rock"){
            //paper scissors
            userwin = compChoice=="paper" ? false:true;
        }
        else if(userChoice ==="paper"){
            //rock scissors
            userwin = compChoice === "scissors"? false:true;
        }
        else{
            //paper rock
            userwin = compChoice==="rock"? false:true;
        }
        checkWinner(userwin,userChoice,compChoice);
    }


}



containers.forEach((container) => {
    container.addEventListener("click", () => {
        const userChoice = container.getAttribute("id");
        playGame(userChoice);
    });
});