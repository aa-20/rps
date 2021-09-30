

/*
1. the program does not have a user interface. it will be done through the console log
2. the user will enter their inputs through a prompt.
3. the desired output is the correct message being displayed upon the users choice.
4. enter the input, e.g rock, compare it with the users input , if the computer wins add to the computers score, if the user wins add to the user counter.


pseudocode

program RPS(user,computer)
    when user inputs their choice
    initialize the counter to zero
    if users input beats the computers input
        add to the user counter
    END
    elif
        if user ties with computer
            counters do not update
    END
    else
        add to the computer counter.
    END
    
    display a message of who won at the end
    END


*/


// function to generate a random computer choice.


let playerCounter = 0;

let computerCounter= 0;



function computerPlay(){
  let choice =  Math.floor(Math.random()*3) + 1;

    if(choice === 1){
        return "rock";
    }
    else if(choice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }

}



function playRound(playerSelection,computerSelection){
    playerSelection=prompt("Rock, Paper or Scissors?").toLowerCase();
  

    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
   

  
  
    if (playerSelection == computerSelection){
        return `its a tie you both chose ${playerSelection} : score ${playerCounter} to ${computerCounter}` ;
    }

    else if(playerSelection != computerSelection){
        if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || playerSelection == "scissors" && computerSelection == "paper"){
            ++playerCounter;
            return `You won! ${playerSelection} beats ${computerSelection}: score ${playerCounter} to ${computerCounter}`;
        }
    else{
        ++computerCounter;
        return `You lost! ${computerSelection} beats ${playerSelection}: score ${playerCounter} to ${computerCounter}`;
    }
    }

}
else{
    prompt("Invalid input! please enter either rock, paper or scissors.");
    playerCounter = NaN;
    
} 
}




function game(){
for(let i = 0; i < 5; i++){
    console.log(playRound(playerSelection,computerSelection));
}

if (playerCounter > computerCounter){
    return `You won! : final score ${playerCounter} to ${computerCounter}`;
}

else if (playerCounter === computerCounter){
    return `Tie! : final score ${playerCounter} to ${computerCounter}`;
}

else if(playerCounter < computerCounter){
    return `You lost : final score ${playerCounter} to ${computerCounter}`;
}

else{
    return "Invalid input! you score was not calculated";
}


}




 
let playerSelection;

const computerSelection = computerPlay();





console.log(game());

