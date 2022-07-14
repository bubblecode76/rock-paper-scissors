const options=['rock','paper','scissor'];
game();

function computerPlay(){
    const choice=Math.floor(Math.random()*3);
    /*console.log(choice);*/
    const computerChoice=options[choice];
    /*console.log(computerChoice);*/
    return computerChoice;
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if((playerSelection=='rock' && computerSelection=='rock')||(playerSelection=='scissor' && computerSelection=='scissor')||(playerSelection=='paper' && computerSelection=='paper'))
       return "It's a draw!";
    else if((playerSelection=='rock' && computerSelection=='paper'))
       return "You Lose! Paper beats Rock";
    else if((playerSelection=='paper' && computerSelection=='scissor'))
       return "You Lose! Scissor beats Paper";
    else if((playerSelection=='scissor' && computerSelection=='rock'))
       return "You Lose! Rock beats Scissor";
    else if((playerSelection=='paper' && computerSelection=='rock'))
       return "You Win! Paper beats Rock";
    else if((playerSelection=='scissor' && computerSelection=='paper'))
       return "You Win! Scissor beats Paper";
    else if((playerSelection=='rock' && computerSelection=='scissor'))
       return "You Win! Rock beats Scissor";
    else
       return "Invalid Input"
}

function game(){
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Enter your choice");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    
}