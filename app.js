//assign letters as 

window.onload = function() {
    let a = document.querySelector('#a');
    let b = document.querySelector('#b');
    let c = document.querySelector('#c');
    let d = document.querySelector('#d');
    let e = document.querySelector('#e');
    let f = document.querySelector('#f');
    let g = document.querySelector('#g');
    let h = document.querySelector('#h');
    let i = document.querySelector('#i');
    let j = document.querySelector('#j');
    let k = document.querySelector('#k');
    let l = document.querySelector('#l');
    let m = document.querySelector('#n');
    let o = document.querySelector('#o');
    let p = document.querySelector('#p');
    let q = document.querySelector('#q');
    let r = document.querySelector('#r');
    let s = document.querySelector('#s');
    let t = document.querySelector('#t');
    let u = document.querySelector('#u');
    let v = document.querySelector('#v');
    let w = document.querySelector('#w');
    let x = document.querySelector('#x');
    let y = document.querySelector('#y');
    let z = document.querySelector('#z');
}

//Pseudocode for the game "Trumpisms"

//an array of words to be used
const words = ['covfefe', 'bigly', 'ombre', 'Nambia', 'misogyny', 'complicit', 'braggadocio'];
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
while (remainingLetters > 0) {
    alert("This is how many letters remain in my super smart word:\n" + answerArray.join(" "));

    //game begins
    //ask player to input a letter
    let guess = prompt("I have a very good brain. Bet you can't guess one of the smart words I have used in the past! Enter a letter and find out.");

    //player enters no letters
    if (prompt === null) {
        //end game
        break;
        //player enters too many letters
    } else if (guess.length !== 1) {
        alert("Please enter one single letter. Dummy!");
    } else {
        //Update match with guess
        for (var j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("You're hired! You guessed that my super-duper smart word is " + randomWord + "!");


