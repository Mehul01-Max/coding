// for (let evenNum = 1; !(evenNum % 2 == 0)  && evenNum <= 20 ; evenNum+=2) {
//     console.log(evenNum);
// }
// let password = "xyz"

// let id = prompt("please enter a password")

// while (id !== password){
//     id = prompt("please enter a correct password")

// }
// console.log("congrats!")

// let input = prompt("please enter any thing")
// while(true) {
//     input = prompt(input)
//     if (input === "know") {
//         break;
//     }

// }



let maximum =parseInt(prompt("enter your max number"));

while (!maximum) {
    maximum = parseInt(prompt("enter a valid number"));
}
const targetGuess  = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("enter your guess");
let attempt = 1
while ( parseInt(guess) !== targetGuess) {
    if (guess === "q") {
        break;
    }
    attempt ++ ;
    if (guess > targetGuess) {
        guess = prompt("TOO HIGH");
    } 

    else {
        guess = prompt("TOO LOW");
    }
    
    }




if (guess === "q") {
    console.log("You quit");
}
else {
    console.log("Congrats")
    console.log(`you guessed it in ${attempt} attempts`)
}





