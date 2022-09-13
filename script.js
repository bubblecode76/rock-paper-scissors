const options=['rock','paper','scissor'];
let playerSelection, computerChoice, playerScore=0, computerScore=0;

const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
const yourScoreUpdate=document.querySelector('#yourRealScore');
const compScoreUpdate=document.querySelector('#compRealScore');


function computerPlay(){
    const choice=Math.floor(Math.random()*3);
    //console.log(choice);
    computerChoice=options[choice];
    //console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection,computerSelection){
    //playerSelection=playerSelection.toLowerCase();
    if((playerSelection=='rock' && computerSelection=='rock')||(playerSelection=='scissor' && computerSelection=='scissor')||(playerSelection=='paper' && computerSelection=='paper'))
       return 0;
    else if((playerSelection=='rock' && computerSelection=='paper'))
       return -1;
    else if((playerSelection=='paper' && computerSelection=='scissor'))
       return -1;
    else if((playerSelection=='scissor' && computerSelection=='rock'))
       return -1;
    else if((playerSelection=='paper' && computerSelection=='rock'))
       return 1;
    else if((playerSelection=='scissor' && computerSelection=='paper'))
       return 1;
    else if((playerSelection=='rock' && computerSelection=='scissor'))
       return 1;
    else
       return "Invalid Input"
}

/*function game(){
    for(let i=0;i<5;i++){
        //playerSelection = prompt("Enter your choice");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    
}*/


rock.addEventListener('click', e => {
    playerSelection='rock';
    console.log('ROCK IS SELECTED');
    playGame();
});

paper.addEventListener('click', e => {
   playerSelection='paper';
   console.log('PAPER IS SELECTED');
   playGame();
});

scissor.addEventListener('click', e => {
   playerSelection='scissor';
   console.log('SCISSOR IS SELECTED');
   playGame();
});


function playGame(){
      const computerSelection = computerPlay();
      console.log(playerSelection);
      console.log(computerSelection);
      let score=playRound(playerSelection,computerSelection);
      if(score== -1){
          computerScore+=1;
          compScoreUpdate.innerHTML=parseInt(compScoreUpdate.innerHTML)+1;
      }
      else if(score== 1){
          playerScore+=1;
          yourScoreUpdate.innerHTML=parseInt(yourScoreUpdate.innerHTML)+1;
      }
      console.log("Player's Score="+playerScore+" Computer's Score="+computerScore);

      if(playerScore==5){
         console.log("YAY!YOU WIN!!");
      }
      if(computerScore==5){
         console.log("SORRY!YOU LOST!!");
      }
}

