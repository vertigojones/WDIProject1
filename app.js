
const words = ['COVFEFE', 'BIGLY', 'OMBRE', 'NAMBIA', 'MISOGYNY', 'COMPLICIT', 'BRAGGADOCIO'];
//randomise a word from array
let randomWord = words[Math.floor(Math.random() * words.length)];

//turn the word into a series of individual characters
let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {

    //turn the characters into underscores
    answerArray[i] = "_"
}

//check for remaining letters
let remainingLetters = randomWord.length;

//reveal array in browser
$(`#input`).text("These are the letters that remain in my super smart word:\n" + answerArray.join(" "));

//game begins
//player guesses a letter by clicking letter button
$(`.button`).click(function (guess) {
    let value = guess.target.innerText
    //check through letters of word
    for (let j = 0; j <= randomWord.length; j++) {
        //wrong guess, return insult
        if (j == randomWord.length) {
            $(`#comments`).text("If only you had an IQ as high as me. Dummy. Try again!")
        }
        //correct guess, return compliment and reveal letters in srray
        else if (randomWord[j] === value) {
            answerArray[j] = value;
            $(`#input`).text("These are the letters that remain in my super smart word:\n" + answerArray.join(" "));
            $(`#comments`).text("Bingo!")
            remainingLetters--;
            break;
        }
    }
})
