function computer_move(){
    let moves  = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*3);
    return moves[choice]; 
}

function player_move(){
    let moves  = ['rock','paper','scissors'];
    var move = parseInt(prompt("Enter your move (0 for rock, 1 for paper, 2 for scissors): "));
    if(move != 0 && move != 1 && move != 2){
        alert("Invalid move. Please try again.");
        return player_move();
    }
    return moves[move];
}
function number_of_rounds(){
    let rounds = parseInt(prompt("How many rounds would you like to play? (1 - 10) "));
    if(rounds < 1 || rounds > 10 || isNaN(rounds)){
        alert("Invalid number of rounds. Please try again.");
        return number_of_rounds();
    }
    return rounds;
}

function main(){

    alert("Welcome to Rock-Paper-Scissors!");
    let rounds= number_of_rounds();
    
    let player_score = 0;
    let computer_score = 0;

    for(let i=0; i<rounds; i++){

        let player = player_move();
        let computer = computer_move();
        

        alert("Player move: " + player);
        alert("Computer move: " + computer);
        if(player === computer){
            alert("It's a tie!");
        }
        else if((player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')){
            alert("Player wins!");
            player_score++;
        }
        else{
            alert("Computer wins!");
            computer_score++;
        }
    }    
    alert("Final Score: Player " + player_score + " - Computer " + computer_score);
    if(player_score > computer_score){
        alert("Player is the overall winner!");
    }
    else if(computer_score > player_score){
        alert("Computer is the overall winner!");
    }
    else{
        alert("It's an overall tie!");
    }
    alert("Thanks for playing!");
}

main();