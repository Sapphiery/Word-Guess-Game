var gameObject = {
    // possibleWords: ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wortortle','blastoise'],
    possibleWords: ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree",
                    "weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu",
                    "sandshrew","sandslash","nidoran","nidorina","nidoqueen","nidoran","nidorino","nidoking","clefairy","clefable","vulpix","ninetales",
                    "jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth",
                    "persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam",
                    "machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash",
                    "slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly",
                    "haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee",
                    "hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking",
                    "staryu","starmie","mrmime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon",
                    "jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini",
                    "dragonair","dragonite","mewtwo","mew"],
    currentWord: [],
    wrongGuesses: [],
    guessedDisplay: [],
    wins: 0,
    losses: 0,
    remainingGuesses: 0,
    gameOver: false,

    updateDisplay: function() {
        //TODO: write function to update relevant parts of the page once I have HTML set up
        $('#wins-element').text('Wins: ' + this.wins);
        $('#losses-element').text('Losses: ' + this.losses);
        $('#wrong-guesses-element').text('Wrong guesses: ' + this.wrongGuesses);
        $('#guesses-left-element').text('Guesses remaining: ' + this.remainingGuesses);

        var tempWord = '';
        for (var i = 0; i < this.guessedDisplay.length; i++) {
            tempWord += this.guessedDisplay[i] + " ";
        }
        $('#word-element').text(tempWord);
    },

    newGame: function() {
        this.wrongGuesses = [];
        this.guessedDisplay = [];
        this.remainingGuesses = 6;
        this.gameOver = false;

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
            if (!(this.wrongGuesses.includes(guess))) {
                this.wrongGuesses.push(guess);
                this.remainingGuesses--;
            }
            
        }


        if (!(this.guessedDisplay.includes('_'))) {
            // var tempWord = '';
            // for (var i = 0; i < this.currentWord.length; i++) {
            //     tempWord += this.currentWord[i];
            // }

            alert('Congrats, you won! Press any key to start a new game');
            this.wins++;
            this.gameOver = true;
            // this.newGame();
        }
        else if (this.remainingGuesses <= 0) {
            // var tempWord = '';
            // for (var i = 0; i < this.currentWord.length; i++) {
            //     tempWord += this.currentWord[i];
            // }
            this.guessedDisplay = this.currentWord;

            alert('Oh no, you lost :( Press any key to start a new game');
            this.losses++;
            this.gameOver = true;
            // this.newGame();
        }

        this.updateDisplay();


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

gameObject.newGame();

$(document).on('keyup', function(e) {
    if (gameObject.gameOver === true) {
        gameObject.newGame();
    }

    else if (validKeys.includes(e.key)) {
        gameObject.checkGuess(e.key);
    }
    
});