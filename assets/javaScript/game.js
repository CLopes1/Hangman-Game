
//-------------------------------V-A-R-I-A-B-L-E-S------------------------------
// Word array
var wordArr = ["surfboard", "rocker", "wave", "tube", "reef", "ocean", "water", "rocky", "stingray", "pier", "jetty", "bathymetry", "shark", "leash", "wax", "wetsuit", "floater", "cutback", "barrel", "drop", "pearl", "snake", "burn", "duckdive", "swim", "paddle"]

// Game variables
var wins = 0
var losses = 0
var wins = 0
var losses = 0
var wrongGuess = 0
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
    console.log("players choice is equal to:" + userGuess)

    guessed.push(userGuess)
    console.log("letters guessed:" + guessed)

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === userGuess) {
            hiddenWord[i] = userGuess
            document.getElementById("word").innerHTML = hiddenWord
        }







        // // for (var i = 0; i < currentWord.length; i++) {
        // if (currentWord[i] === userGuess) {

        //     // hiddenword[i] = userGuess;

        //     // remainingLetters--



    }

}

















//----------------------------------CORE LOGIC-------------------------------------









