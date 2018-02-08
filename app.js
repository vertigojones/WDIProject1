//words created by our Commander-In-Cheif
const words = ['COVFEFE', 'BIGLY', 'OMBRE', 'NAMBIA', 'MISOGYNY', 'COMPLICIT', 'BRAGGADOCIO'];
//randomise a word from array
let randomWord = words[Math.floor(Math.random() * words.length)];

//compliments to be returned for correct answer
const compliments = ["You have a smart brain!", "You should work for Fox News!", "Great going!", "Very powerful, very strong. Keep going!", "Just superb!", "Nice. Are you from Russia?"];

//insults to be returned for wrong guesses
const insults = ["If only you had an IQ as high as me. Dummy. Try again!", "So sad!", "Do you come from a s**thole or something?", "LOSER!!!", "Horrible job!", "Did you graduate last in your class?", "Hokey garbage...", "What a dope!"];

//define maximum number of attempts
let lives = 6;

//turn the word into a series of individual characters
let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {
    //turn the characters into underscores
    answerArray[i] = "_";
}

//check for remaining letters
let remainingLetters = randomWord.length;

//reveal array in browser
$(`#input`).text("These are the letters that remain in my super smart word:\n " + answerArray.join(" "));

//create a function for end of game
function endGame(lose) {
    //if player loses
    if (lose) {
        //disable all letter buttons and fire the player
        $(`.button`).off();
        $(`#comments`).text("YOU'RE FIRED!!!").css({ "color": "red" });
        //if player wins
    } else {
        //disable all letter buttons and hire the player
        $(`.button`).off();
        $(`#comments`).text("CONGRATULATIONS! YOU'RE HIRED!!!").css({ "color": "green" });
    }
}

//game begins
//player guesses a letter by clicking letter button
$(`.button`).click(function (guess) {
    let value = guess.target.innerText;
    //disable button 
    $(event.target).off();
    //assign disabled css
    $(event.target).css({ "color": "red", "text-decoration": "line-through" });

    let count = 0;
    //check through letters of word
    for (let j = 0; j <= randomWord.length; j++) {

        //correct guess, return random compliment and update letters in array
        if (randomWord[j] === value) {
            answerArray[j] = value;
            $(`#input`).text("These are the letters that remain in my super smart word:\n" + answerArray.join(" "));
            $(`#comments`).delay(800).text(compliments[Math.floor(Math.random() * compliments.length)]);
            remainingLetters--;
            count++
        }
    //call the end of game for a win
    } if (remainingLetters === 0) {
        endGame(false)
    }

    //wrong guess, return random insult and deduct one life
    if (count === 0) {
        $(`#comments`).delay(800).text(insults[Math.floor(Math.random() * insults.length)]);
        lives--;
    }
    //assign lives to images
    if (lives === 5) {
        $(`#donald`).attr("src", "images/Donald_Trump6.jpg", "alt", "5 lives left");
    } else if (lives === 4) {
        $(`#donald`).attr("src", "images/Donald_Trump5.jpg", "alt", "4 lives left");
    } else if (lives === 3) {
        $(`#donald`).attr("src", "images/Donald_Trump4.jpg", "alt", "3 lives left");
    } else if (lives === 2) {
        $(`#donald`).attr("src", "images/Donald_Trump3.jpg", "alt", "2 lives left");
    } else if (lives === 1) {
        $(`#donald`).attr("src", "images/Donald_Trump2.jpg", "alt", "1 lives left");
    } else if (lives === 0) {
        $(`#donald`).attr("src", "images/Donald_Trump1.jpg", "alt", "Game over");
        //call the end of game for a loss
        endGame(true);
    }
});
