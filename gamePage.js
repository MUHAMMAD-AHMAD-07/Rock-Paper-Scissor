let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rockBtn');
rockButton.addEventListener("click",() => {player_move('rock')});

const paperButton = document.querySelector('.paperBtn');
paperButton.addEventListener("click", () => {player_move('paper')});

const scissorButton = document.querySelector('.scissorBtn');
scissorButton.addEventListener("click", () => {player_move('scissor')});

const scoreDisplay = document.getElementById('scoreDisplay');

function player_move(selected_Move){
    
    let playerMove = selected_Move;
    let compMove = computer_move();
    main(playerMove,compMove);
}

function computer_move(){
    let moves  = ['rock','paper','scissor'];
    let choice = Math.floor(Math.random()*3);
    return moves[choice]; 
}

function main(player,enemy){

    let playerMove = player;
    let computerMove = enemy;
     
    addEffect(computerMove);
   
    if(playerMove === computerMove){
        showResultImage('tie')
    }
    else if((playerMove === 'rock' && computerMove === 'scissor') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissor' && computerMove === 'paper')){       
        playerScore++;
        updateScore();
        showResultImage('win')

    }
    else{
        computerScore++
        updateScore();
        showResultImage('lose')
    }
}

function addEffect(computerMove){

    if (computerMove === 'rock') {
        const rockButton= document.querySelector('.enemyButtons .rockBtn');
        rockButton.classList.add('onClickAnimation');
        
        setTimeout(() => {
            rockButton.classList.remove('onClickAnimation');
        }, 1000);
        
    } 
    else if (computerMove === 'paper') {
        const paperButton = document.querySelector('.enemyButtons .paperBtn');
        paperButton.classList.add('onClickAnimation');

        setTimeout(() => {
            paperButton.classList.remove('onClickAnimation');
        }, 1000);
        
    } 
    else if (computerMove === 'scissor') {
        const scissorButton = document.querySelector('.enemyButtons .scissorBtn');
        scissorButton.classList.add('onClickAnimation');

        setTimeout(() => {
            scissorButton.classList.remove('onClickAnimation');
        }, 1000);
    }
}

function showResultImage(result) {
    const img = document.getElementById('resultImage');

    if (result === 'win') {
        img.src = './images/win.png';

    } else if (result === 'lose') {
        img.src = './images/lose.png';

    } else if (result === 'tie') {
        img.src = './images/tie.png';
    }
}

function updateScore() {
    scoreDisplay.textContent = `${playerScore}:${computerScore}`;
}


  