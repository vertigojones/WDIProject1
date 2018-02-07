//words created by our Commander-In-Cheif
const words = ['COVFEFE', 'BIGLY', 'OMBRE', 'NAMBIA', 'MISOGYNY', 'COMPLICIT', 'BRAGGADOCIO'];
//randomise a word from array
let randomWord = words[Math.floor(Math.random() * words.length)];

//comments to be returned for wrong guesses
const responses = ["If only you had an IQ as high as me. Dummy. Try again!", "So sad!", "Do you come from a s**thole or something?", "LOSER!!!", "Horrible job!", "Did you graduate last in your class?", "Hokey garbage...", "What a dope!"];
//randomise a word from array
//let selectResponse = responses[Math.floor(Math.random() * responses.length)];
    //let randomResponse = [];
    //for (let i = 0; i )


//turn the word into a series of individual characters
let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {
    //turn the characters into underscores
    randomWord.split('');
    answerArray[i] = "_";
}

//check for remaining letters
let remainingLetters = randomWord.length;


//reveal array in browser
$(`#input`).text("These are the letters that remain in my super smart word:\n " + answerArray.join(" "));

//game begins
//player guesses a letter by clicking letter button
$(`.button`).click(function (guess) {
    let value = guess.target.innerText;
    //check through letters of word
    for (let j = 0; j <= randomWord.length; j++) {
        //wrong guess, return insult
        if (j == randomWord.length) {
            //$(`#comments`).delay(800).text(randomResponse);
        }
        //correct guess, return compliment and reveal letters in array
        else if (randomWord[j] === value) {
            answerArray[j] = value;
            $(`#input`).text("These are the letters that remain in my super smart word:\n" + answerArray.join(" "));
            $(`#comments`).delay(800).text("Bingo!");
            remainingLetters--;
            break;
        }
    }
})
