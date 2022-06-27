// object pentru stocare scor
const score = {
    //stocare scor
    userScore : 0,
    computerScore : 0,
    equal : 0,
    //afisare scor
    playerDisplay : document.querySelector(".playerDisplay"),
    computerDisplay : document.querySelector(".computerDisplay")
}

//obiect pentru butoane
const buttons = {
    rock : document.querySelector('.rock'),
    paper : document.querySelector('.paper'),
    scissors : document.querySelector('.scissors')
}

//obj pentru afisare ce aleg jucaotrii
const displayChoose ={
    divChooseOne : document.querySelector(".divChooseOne"),
    divChooseTwo : document.querySelector(".divChooseTwo"),
    winner : document.querySelector(".winner"),
    imgPlayer : document.querySelector("#imgPlayer"),
    imgComputer : document.querySelector("#imgComputer"),
    imgWinner : document.querySelector("#imgWinner"),
    paraWinner : document.querySelector('#paraWinner')
}

//functie calculator
function computerPlay(){
    let random =["rock", "paper", "scissors"];
    return random[Math.floor(Math.random()*random.length )];
    
}

///functie apasare butoane
function buttonsPress(){
            buttons.rock.addEventListener('click', () =>{
            playRound("rock", computerPlay());
            score.playerDisplay.innerText = score.userScore;
            score.computerDisplay.innerText = score.computerScore;
        });

            buttons.paper.addEventListener('click', () =>{
            playRound("paper", computerPlay());
            score.playerDisplay.innerText = score.userScore;
            score.computerDisplay.innerText = score.computerScore;
        });

            buttons.scissors.addEventListener('click', () =>{
            playRound("scissors", computerPlay());
            score.playerDisplay.innerText = score.userScore;
            score.computerDisplay.innerText = score.computerScore;
        });
}
buttonsPress()


 // functie selectie care care a castigat si afisare cine a castigat 
 function playRound(playerSelection, computerSelection){
    visibleChoose()
    if(playerSelection === "rock"){
        displayChoose.imgPlayer.src = "img/rock.png";
    } else if(playerSelection === "paper"){
        displayChoose.imgPlayer.src = "img/paper.png";
    } else if(playerSelection === "scissors"){
        displayChoose.imgPlayer.src = "img/scissors.png";
    }

    if(computerSelection === "rock"){
        displayChoose.imgComputer.src = "img/rock.png";
    } else if(computerSelection === "paper"){
        displayChoose.imgComputer.src = "img/paper.png";
    } else if(computerSelection === "scissors"){
        displayChoose.imgComputer.src = "img/scissors.png";
    }

    if(playerSelection.toLowerCase() === computerSelection){
        score.equal++;
        displayChoose.paraWinner.innerHTML = "Equal!";
        displayChoose.imgWinner.src = '';
    } 
    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "scissors"){
            score.userScore++;
            displayChoose.paraWinner.innerHTML = "Winner is:";
            displayChoose.imgWinner.src = "img/rock.png";
        }else{
            displayChoose.paraWinner.innerHTML = "Winner is:";
            if(computerSelection === "rock"){
                displayChoose.imgWinner.src = "img/rock.png";
            } else if(computerSelection === "paper"){
                displayChoose.imgWinner.src = "img/paper.png";
            } else if(computerSelection === "scissors"){
                displayChoose.imgWinner.src = "img/scissors.png";
            }
            score.computerScore++;
        }
    } else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "rock"){
            displayChoose.paraWinner.innerHTML = "Winner is:";
            displayChoose.imgWinner.src = "img/paper.png";
            score.userScore++;
        }else{
            displayChoose.paraWinner.innerHTML = "Winner is:";
            if(computerSelection === "rock"){
                displayChoose.imgWinner.src = "img/rock.png";
            } else if(computerSelection === "paper"){
                displayChoose.imgWinner.src = "img/paper.png";
            } else if(computerSelection === "scissors"){
                displayChoose.imgWinner.src = "img/scissors.png";
            }
            score.computerScore++;
        }
    } else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "paper"){
            displayChoose.paraWinner.innerHTML = "Winner is:";
            displayChoose.imgWinner.src = "img/scissors.png";
            score.userScore++;
        }else{
            displayChoose.paraWinner.innerHTML = "Winner is:";
            if(computerSelection === "rock"){
                displayChoose.imgWinner.src = "img/rock.png";
            } else if(computerSelection === "paper"){
                displayChoose.imgWinner.src = "img/paper.png";
            } else if(computerSelection === "scissors"){
                displayChoose.imgWinner.src = "img/scissors.png";
            }
            score.computerScore++;
        };
    };
};

// functie ascundere ce au ales jucatorii cand se incarca pagina
function hiddenChoose(){
    displayChoose.divChooseOne.style.visibility = "hidden";
    displayChoose.divChooseTwo.style.visibility = "hidden";
    displayChoose.winner.style.visibility = "hidden";
}
//functie pentru a face vizibil ce aleg jucatorii
function visibleChoose(){
    displayChoose.divChooseOne.style.visibility = 'visible';
    displayChoose.divChooseTwo.style.visibility = 'visible';
    displayChoose.winner.style.visibility = 'visible';
}
// cand se incarca pagina, sa apelam functia aleasa
window.onload = hiddenChoose();


//afisare data footer
const date = new Date();
let year = date.getFullYear();
const an = (document.getElementById("an").textContent = year + " @eduardbede ");
