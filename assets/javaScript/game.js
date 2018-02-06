
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
// var blanks =[]


//-------------------------------F-U-N-C-T-I-O-N-S------------------------------

//When invoked, the selectWord function chooses a random word from wordArr. 
//That word gets assigned to the currentWord variable. 
function selectWord() {
    return wordArr[Math.floor(Math.random() * wordArr.length)]
}


//Loop that iterates through each letter of currentWord. 


for (var i = 0; i < currentWord.length; i++) {
    document.getElementById("word").innerHTML = document.getElementById("word").innerHTML + '_'
}


function resetGame() {
    guessed = []
    guessLeft = maxGuesses
    currentWord = selectWord()
}



//This function runs whenever the user presses a key. 
document.onkeyup = function (event) {

    //logs the player's choice
    var userGuess = event.key
    console.log("players choice is equal to:" + userGuess)

    guessed.push(userGuess)
    console.log(guessed)

    for (var i = 0; i < currentWord.length; i++) {
        if (userGuess === currentWord[i]) {
          

    }

}


//----------------------------------CORE LOGIC-------------------------------------


 // html for scores






