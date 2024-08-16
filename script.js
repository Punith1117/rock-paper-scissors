let cpoints = 0; //computer points
let hpoints = 0; //human points
let roundNumContent = 1;
let humanScore = document.querySelector('#human');
humanScore.textContent = 'You: ' + hpoints;
let computerScore = document.querySelector('#computer');
computerScore.textContent = 'Computer: ' + cpoints;
let roundNum = document.querySelector('.round-num-content');
roundNum.textContent = 'Round: ' + roundNumContent + '/5';
let resultText = document.querySelector('.final-result-content');
console.log(resultText);

let noOfClicks = 0;
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    let n = Math.floor(Math.random()*choices.length);
    return choices[n];
}

function compareChoices(h, c) { //c: computer h: human
    if (h == 'r') {//rock beats scissor
        return (c =='s') ? 1 : (c == h) ? 0 : -1;
    }
    if (h == 'p') {//paper beats rock
        return (c =='r') ? 1 : (c == h) ? 0 : -1;
    }
    if (h == 's') {//scissor beats paper
        return (c =='p') ? 1 : (c == h) ? 0 : -1;
    }

}

function display(result) {
    if (result == 1) { //point to human
        humanScore.textContent = `You: ${++hpoints}`;
        computerScore.textContent = `Computer: ${cpoints}`;
        resultText.textContent = '+1 for you :)';
        resultText.classList.add('final-result-content-text');
        setTimeout(() => {
            resultText.classList.remove('final-result-content-text')}, 3000);
    } else if (result == -1) { //point to computer
        humanScore.textContent = `You: ${hpoints}`;
        computerScore.textContent = `Computer: ${++cpoints}`;
        resultText.textContent = '+1 for computer :(';
        resultText.classList.add('final-result-content-text');
        setTimeout(() => {
            resultText.classList.remove('final-result-content-text')}, 3000);
    } else if (result == 0) { //tie
        humanScore.textContent = `You: ${++hpoints}`;
        computerScore.textContent = `Computer: ${++cpoints}`;
        resultText.textContent = '+1 for both :|';
        resultText.classList.add('final-result-content-text');
        setTimeout(() => {
            resultText.classList.remove('final-result-content-text') }, 3000);
    }
    ++roundNumContent;
    if (checkForLastRound()) {
        return;
    };
    setTimeout(() => { roundNum.textContent = 'Round: ' + roundNumContent + '/5'}, 2000) 
}

function checkForLastRound() {
    if (roundNumContent == 6) {
        if (hpoints == cpoints) {
            resultText.innerHTML = 'The game ends with a tie :| <br> press F5 to play again';
        } else if (hpoints > cpoints) {
            resultText.innerHTML = 'You WON the game :) <br> press F5 to play again';
        } else {
            resultText.innerHTML = 'You LOSE the game :( <br> press F5 to play again';
        }
 
        resultText.classList.add('final-result-content-text');
        setTimeout(() => {
            resultText.classList.remove('final-result-content-text') }, 6000);
        return true;
    } else {
        console.log('not a last round');
    }
}
function addcompcolor(compChoice) {
    if (compChoice == 'p') {
        paper.classList.add('computercolor');

    setTimeout(() => { //remove the class
        paper.classList.remove('computercolor');
    }, 1000);
    }
    if (compChoice == 'r') {
        rock.classList.add('computercolor');

    setTimeout(() => { //remove the class
        rock.classList.remove('computercolor');
    }, 1000);
    }
    if (compChoice == 's') {
        scissor.classList.add('computercolor');

    setTimeout(() => { //remove the class
        scissor.classList.remove('computercolor');
    }, 1000);
    }
}
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    noOfClicks++;
    console.log(noOfClicks);
    // Add the class to start the animation
    if (noOfClicks == 5) {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    } else {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    setTimeout(() => {
        paper.disabled = false;
        rock.disabled = false;
        scissor.disabled = false;
    }, 4000);
    }
    paper.classList.add('clickcolor');
    let compChoice = getCompChoice();
    setTimeout(() => { //remove the class
        paper.classList.remove('clickcolor');
        addcompcolor(compChoice);
    }, 1000);

    let result = compareChoices('p', compChoice);
    console.log(result);
    setTimeout(() => display(result), 2000);
});
const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () =>{
    noOfClicks++;
    console.log(noOfClicks);
    // Add the class to start the animation
    if (noOfClicks == 5) {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    } else {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    setTimeout(() => {
        paper.disabled = false;
        rock.disabled = false;
        scissor.disabled = false;
    }, 4000);
    }
    // Add the class to start the animation
    scissor.classList.add('clickcolor');
    let compChoice = getCompChoice();
    setTimeout(() => {
        scissor.classList.remove('clickcolor');
        addcompcolor(compChoice);
    }, 1000);

    let result = compareChoices('s', compChoice);
    console.log(result);
    setTimeout(() => display(result), 2000);
});
const rock = document.querySelector('.rock');
rock.addEventListener('click', () =>{
    noOfClicks++;
    console.log(noOfClicks);
    // Add the class to start the animation
    if (noOfClicks == 5) {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    } else {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
    setTimeout(() => {
        paper.disabled = false;
        rock.disabled = false;
        scissor.disabled = false;
    }, 4000);
    }
    // Add the class to start the animation
    rock.classList.add('clickcolor');
    let compChoice = getCompChoice();
    setTimeout(() => {
        rock.classList.remove('clickcolor');
        addcompcolor(compChoice);
    }, 1000);

    let result = compareChoices('r', compChoice);
    console.log(result);
    setTimeout(() => display(result), 2000);
});
