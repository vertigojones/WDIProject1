
//Pseudocode for the game "Trumpisms"

//an array of words to be used
const words = ['COVFEFE', 'BIGLY', 'OMBRE', 'NAMBIA', 'MISOGYNY', 'COMPLICIT', 'BRAGGADOCIO'];
//randomise a word from array
let randomWord = words[Math.floor(Math.random() * words.length)];

//turn word to uppercase 

//turn the word into a series of individual characters
let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {

    //turn the characters into underscores
    answerArray[i] = "_"
}

//check for remaining letters
let remainingLetters = randomWord.length;

//if there are remining letters
//while (remainingLetters > 0) {
    $(`#input`).append("These are the letters that remain in my super smart word:\n" + answerArray.join(" "));

    //game begins
    //ask player to input a letter
    //let guess = prompt("I have a very good brain. Bet you can't guess one of the smart words I have used in the past! Enter a letter and find out.");
    $(`.button`).click(function (guess) {
        let value = guess.target.innerText
        console.log(value)
        //player enters no letters
        //if (prompt === null) {
        //end game
        //break;
        //player enters too many letters
        //} else if (guess.length !== 1) {
        //    alert("Please enter one single letter. Dummy!");
        //} else {
        //Update match with guess
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === value) {
                answerArray[j] = value;
                remainingLetters--;
            }
        }
        //}
    })
//}
console.log(answerArray.join(" "))
//$(`#input`).append("You're hired! You guessed that my super-duper smart word is " + randomWord + "!");
/*
$(`.button`).click((target)=> {
    let value = target.target.id
    
})
*/