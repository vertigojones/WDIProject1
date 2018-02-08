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
        $(`#comments`).text("YOU'RE FIRED!!!").css({"color": "red"});
        //if player wins
    } else {
        //disable all letter buttons and hire the player
        $(`.button`).off();
        $(`#comments`).text("CONGRATULATIONS! YOU'RE HIRED!!!").css({"color": "green"});
    }
}

//game begins
//player guesses a letter by clicking letter button
$(`.button`).click(function (guess) {
    let value = guess.target.innerText;
    //disable button 
    $(event.target).off();
    //assign disabled css
    $(event.target).css({"color": "red", "text-decoration": "line-through"});

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
    } if (remainingLetters === 0) {
        endGame(false)
    }

    //wrong guess, return random insult and deduct one life
    if (count === 0) {
        $(`#comments`).delay(800).text(insults[Math.floor(Math.random() * insults.length)]);
        lives--;
        console.log(lives)
    }
    //assign lives to images
    if (lives === 5) {
        $(`#noose`).attr("src", "https://i.imgur.com/9OxHKuWm.jpg");
    } else if (lives === 4) {
        $(`#noose`).attr("src", "https://i.imgur.com/ELc7qBNm.jpg");
    } else if (lives === 3) {
        $(`#noose`).attr("src", "https://i.imgur.com/zmz6xfRm.jpg");
    } else if (lives === 2) {
        $(`#noose`).attr("src", "https://i.imgur.com/ALBQgzHm.jpg");
    } else if (lives === 1) {
        $(`#noose`).attr("src", "https://i.imgur.com/ZdTKiSmm.jpg");
    } else if (lives === 0) {
        $(`#noose`).attr("src", "https://i.imgur.com/cYh7sVvm.jpg");
        endGame(true);
    }
});
