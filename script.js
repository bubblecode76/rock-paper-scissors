const options=['rock','paper','scissor'];
let playerSelection, computerChoice, playerScore=0, computerScore=0;

const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
const yourScoreUpdate=document.querySelector('#yourRealScore');
const compScoreUpdate=document.querySelector('#compRealScore');
const result=document.querySelector('#result');
result.style.display="none";
const playAgain=document.querySelector('#playAgain');
playAgain.style.display="none";


function computerPlay(){
    const choice=Math.floor(Math.random()*3);
    computerChoice=options[choice];
    return computerChoice;
}

function playRound(playerSelection,computerSelection){
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
         result.style.display="block";
         playAgain.style.display="block";
         result.innerHTML="YAY!YOU WIN!!";
         playAgain.innerHTML="DO YOU WANT TO PLAY AGAIN?";
         const button = document.createElement("button");
         button.innerHTML="TRY AGAIN";
         document.getElementById("replayButton").appendChild(button);
         rock.style.display="none";
         paper.style.display="none";
         scissor.style.display="none";
         button.addEventListener('click',e => {
            button.style.display="none";
            result.style.display="none";
            playAgain.style.display="none";
            rock.style.display="inline";
            paper.style.display="inline";
            scissor.style.display="inline";
            playerScore=0;
            computerScore=0;
            compScoreUpdate.innerHTML=parseInt(compScoreUpdate.innerHTML)*0;
            yourScoreUpdate.innerHTML=parseInt(yourScoreUpdate.innerHTML)*0;
         });
      }
      if(computerScore==5){
         result.style.display="block";
         playAgain.style.display="block";
         result.innerHTML="SORRY!YOU LOST!!";
         playAgain.innerHTML="DO YOU WANT TO PLAY AGAIN?";
         const button = document.createElement("button");
         button.innerHTML="TRY AGAIN";
         document.getElementById("replayButton").appendChild(button);
         rock.style.display="none";
         paper.style.display="none";
         scissor.style.display="none";
         button.addEventListener('click',e => {
            button.style.display="none";
            result.style.display="none";
            playAgain.style.display="none";
            rock.style.display="inline";
            paper.style.display="inline";
            scissor.style.display="inline";
            playerScore=0;
            computerScore=0;
            compScoreUpdate.innerHTML=parseInt(compScoreUpdate.innerHTML)*0;
            yourScoreUpdate.innerHTML=parseInt(yourScoreUpdate.innerHTML)*0;
         });
      }
}

