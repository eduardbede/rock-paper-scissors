function computerPlay() {
    let aleatoriu = [ "rock", "paper", "scissors" ];
    return aleatoriu [ Math.floor(Math.random() * aleatoriu.length ) ];
    
}

    let userScore = parseInt(0);
    let computerScore = parseInt(0);

    //asta e ala bun

  /*  function playRound ( playerSelection, computerSelection ) {
        if ( playerSelection.toLowerCase() === 'rock' ){
            if ( computerSelection === "scissors") {
                userScore++;
                return "Ai castigat!";
            } else if ( computerSelection === "paper"){
                computerScore++;
                return "Ai pierdut!"
            } else{
                return "Remiza"
            }
        }

        if ( playerSelection.toLowerCase() === 'paper' ){
            if ( computerSelection === 'rock'){
                userScore++;
                return "Ai castigat!"
            } else if( computerSelection === 'scissors'){
                computerScore++;
                return "Ai pierdut!"
            } else{
                return "Remiza!"
            }
        }
        if ( playerSelection.toLowerCase() === 'scissors'){
            if ( computerSelection === 'paper'){
                userScore++;
                return "Ai castigat!";
            } else if ( computerSelection === 'rock'){
                computerScore++;
                return "Ai pierdut";
            } else{
                return "Remiza!";
            }
        }

        }
    
*/
        // merge si asta 
        
 function playRound ( playerSelection, computerSelection ) {
        if ( playerSelection.toLowerCase() === computerSelection ) {
            return "Egal";
        } 
        else if ( playerSelection.toLowerCase() === "rock" ) {
            if ( computerSelection === "scissors") {
                userScore++;
                return "Ai castigat!";
            } else {
                computerScore++;
                return "Ai pierdut!";
            }
        }
        else if ( playerSelection.toLowerCase() === "paper" ) {
            if ( computerSelection === "rock") {
                    userScore++;
                    return "Ai castigat!";
            } else {
                    computerScore++;
                    return "Ai pierdut!";
            }
        }
        else if ( playerSelection.toLowerCase() === "scissors" ) {
            if ( computerSelection === "paper") {
                        userScore++;
                        return "Ai castigat!";
            } else {
                        computerScore++;
                        return "Ai pierdut!";
             }
        }
    }




function game() {
  
    
    for ( let i=0; i<5; i++ ) {
        let playerSelection = prompt("Alege :");
            if (playerSelection !== "" ) {
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Scorul tau = " + userScore);
        console.log("Scorul calculatorului = " + computerScore);
    } else {
        break;
    }
}
}

game()
