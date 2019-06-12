var gameObject = {
    possibleWords: ['test', 'city', 'kira', 'coding'],
    currentWord: [],
    wrongGuesses: [],
    guessedDisplay: [],
    wins: 0,
    losses: 0,
    remainingGuesses: 0,

    updateDisplay: function() {
        //TODO: write function to update relevant parts of the page once I have HTML set up
        
    },

    newGame: function() {
        this.wrongGuesses = [];
        this.guessedDisplay = [];
        this.remainingGuesses = 6;

        //set the currentWord array to a random element of the possibleWords array split into an array
        this.currentWord = this.possibleWords[Math.floor(Math.random() * this.possibleWords.length)].split('');

        for (var i = 0; i < this.currentWord.length; i++) {
            this.guessedDisplay.push('_');
        }
        this.updateDisplay();
    },

    checkGuess: function(guess) {
        if (this.currentWord.includes(guess)) {

            for (var i = 0; i < this.currentWord.length; i++) {
                if (this.currentWord[i] === guess) {
                    this.guessedDisplay[i] = guess;
                }
            }
        }
        else {
            this.wrongGuesses.push(guess);
            this.remainingGuesses--;
        }

        this.updateDisplay();

        if (!(this.guessedDisplay.includes('_'))) {
            alert('Congrats, you won!');
            this.wins++;
            this.newGame();
        }
        else if (this.remainingGuesses <= 0) {
            alert('Oh no, you lost :(');
            this.losses++;
            this.newGame();
        }

    },

    printValues: function() {
        console.log(this.possibleWords);
        console.log(this.currentWord);
        console.log(this.wrongGuesses);
        console.log(this.guessedDisplay);
        console.log(this.wins, this.losses);
    }
}

var validKeys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

$(document).on('keyup', function(e) {
    if (validKeys.includes(e.key)) {
        gameObject.checkGuess(e.key);
    }
});