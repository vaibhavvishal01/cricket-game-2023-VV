let scoreStr = localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
    Wins: 0,
    Lose: 0,
    Tie: 0,
}

score.displayScore = function (){
    return (`wins: ${score.Wins}. Lose: ${score.Lose}. Tie: ${score.Tie}`);
}


function generateComputerchoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1){
        return 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat'){
        if (computerMove === 'Ball'){
            score.Wins++;
            return 'You Won';
        } else if(computerMove === 'Stump') {
            score.Lose++;
            return 'You Lose';
        }
        else if (computerMove === 'Bat') {
            score.Tie++;
            return `It's tie`
        }

    }else if (userMove === 'Ball') {
        if(computerMove === 'Bat') {
            score.Lose++;
            return 'You Lose'
        }
        else if(computerMove === 'Ball') {
            score.Tie++;
            return `It's tie`;
        } else if (computerMove === 'Stump'){
            score.Wins++;
            return 'You Won';
        }
    } else {
        if(computerMove === 'Bat'){
            score.Lose++;
            return 'You Lose';
        }
        else if(computerMove === 'Ball'){
            score.Wins++;
            return 'You Won';
        }else if(computerMove === 'Stump'){
            score.Tie++;
            return `It's Tie`;
        }
    }

}

function showResult(userMove, computerMove, result) {
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('#user-move').innerText = `You have Chosen ${userMove}.`;
    document.querySelector('#computer-move').innerText = `Computer Chosen ${computerMove}.`;
    document.querySelector('#result-move').innerText = `${result}.`;
    document.querySelector('#score-move').innerText = ` ${score.displayScore()}.`;
}
 
document.querySelector('#reset-btn').onclick.innerText= 'Wins 0';

