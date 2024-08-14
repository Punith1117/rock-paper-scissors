function getCompChoice() {
    const choices = ['r', 'p', 's'];
    let n = Math.floor(Math.random()*choices.length);
    return choices[n];
}

function compareChoices(c, h) { //c: computer h: human
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
alert("Refresh the page first and then open the console using ctrl+shift+C to view the results");
alert('There will be three rounds with three attempts each');
alert("Enter only the first letter of each word, that is r/R for Rock and similarly for Paper and Scissor")
let hround = cround = 0; //set set human and computer round points to be 0
for(let i = 1; i <= 3; i++) {
    let cpoints = hpoints = 0; //set human and computer each round points to be 0
    console.log(`Round: ${i}`)
    for(let a = 1; a <= 3; a++) {
        let hChoice = prompt(`Attempt: ${a} Enter your choice`); //get human choice
        if (hChoice.toLowerCase() == 'r' || hChoice.toLowerCase() == 'p' || hChoice.toLowerCase() == 's') { //check if human choice is valid
            console.log(`Your choice: ${hChoice}`);
            let compChoice = getCompChoice(); //get computer choice
            console.log(`Computer's choice: ${compChoice}`);
            let result = compareChoices(compChoice, hChoice.toLowerCase());
            if (result == 1) { //point to human
                console.log(`You: ${++hpoints}`);
                console.log(`Computer: ${cpoints}`);
            } else if (result == -1) {
                console.log(`You: ${hpoints}`); // point to computer
                console.log(`Computer: ${++cpoints}`);
            } else if (result == 0) { //tie
                console.log(`You: ${hpoints}`);
                console.log(`Computer: ${cpoints}`);
            }
        }
        else {
            alert('Invalid input. Only r,R,p,P,s,S is allowed.');
        }
    }

    (cpoints > hpoints) ? (console.log(`Computer won Round ${i} :(`), cround++) : (cpoints < hpoints) ? (console.log(`You won Round ${i} :)`), hround++) : (console.log(`Round ${i} ends with a tie;)`));
}

(cround > hround) ? (console.log('Final result: Computer won :(')) : (cround < hround) ? (console.log('Final result: You won :)')) : (console.log("Final result: It's a tie :|"));
console.log('Refresh the page to play again.');