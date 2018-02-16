

//-------------------------------V-A-R-I-A-B-L-E-S------------------------------
// Word array
var wordArr = ["surfboard", "rocker", "wave", "tube", "reef", "ocean", "water", "rocky", "stingray", "pier", "jetty", "bathymetry", "shark", "leash", "wax", "wetsuit", "floater", "cutback", "barrel", "drop", "pearl", "snake", "burn", "duckdive", "swim", "paddle"]

// Game variables
var wins = 0
var losses = 0
var guessed = []
var currentWord = selectWord()
var maxGuesses = 7
var guessLeft = maxGuesses
console.log("Current Word=" + currentWord)
var hiddenWord = []
hint()


//-------------------------------F-U-N-C-T-I-O-N-S------------------------------

//When invoked, the selectWord function chooses a random word from wordArr. 
//That word gets assigned to the currentWord variable. 
function selectWord() {
    return wordArr[Math.floor(Math.random() * wordArr.length)]
}

// old code, dont delete. 
// for (var i = 0; i < currentWord.length; i++) {
// document.getElementById("word").innerHTML = document.getElementById("word").innerHTML + '_ '
// }


function resetGame() {
    guessed = []
    guessLeft = maxGuesses
    currentWord = selectWord()
    hint()
}

//Loop that displays the first set of blanks after computer guessses initial word. 
function hint() {
    for (var i = 0; i < currentWord.length; i++) {
        hiddenWord[i] = ("_")
        console.log(hiddenWord)
        document.getElementById("word").innerHTML = hiddenWord.join(" ")

    }
}


//This function runs whenever the user presses a key. 
document.onkeyup = function (event) {

    //logs the player's choice
    var userGuess = event.key
    guessed.push(userGuess)
    console.log(guessed)
    var storeNum = 0

    // console.log("so far you've guessed:" + guessed)
    // console.log("players choice is equal to:" + userGuess)

   
    for (var j = 0; j < currentWord.length; j++) {

        if (currentWord[j] === userGuess) {
            hiddenWord[j] = userGuess
            document.getElementById("word").innerHTML = hiddenWord
        }


        if (currentWord[j] != userGuess) {
            storeNum++
            if (storeNum === currentWord.length) {
                guessLeft--
            }
            console.log("guesses left:" + guessLeft)
        }

        // (currentWord[j] != guessed[i] && guessLeft > 0)


        if (guessLeft === 0) {
            alert("Game Over! ")
            resetGame()
        }

    }

}


    var html =
    //     "<p>Wins: " + wins + "</p>" +
    //     "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your Guesses so far: " + guessed + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#stats").innerHTML = html;


























//----------------------------------CORE LOGIC-------------------------------------









