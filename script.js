// Fetch the elements/buttons from the DOM
let rock = document.getElementById("rockButton")
let paper = document.getElementById("paperButton")
let scissors = document.getElementById("scissorsButton")
let reset = document.getElementById("resetButton")
let com = document.getElementById("com")

// Actions to print the onClick events into the console.log, by the user
rock.onclick = () => console.log("user played Rock")
paper.onclick = () => console.log("user played Paper")
scissors.onclick = () => console.log("user played Scissors")
reset.onclick = () => console.log("user Reset the game")
com.onclick = () => console.log("user teased the opponent")

//COM function randomly choose a hand
function comChoice() {
    let comHand = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * comHand.length)
    return comHand[randomNumber]
}
comChoice()

// Hand function between user and com

function getResult(userHand, comHand)   {
    if (userHand == comHand)    {
        score = score +0
    } else if (userHand == "rock" && comHand == "scissors") {
        score = score +1
    } else if (userHand == "paper" && comHand == "rock") {
        score = score +1
    } else if (userHand == "scissors" && comHand == "paper") {
        score = score +1
    } else {
        score = score -1
    }
    return score
}

//Correct? document.getElementById("score").innerHTML = getResult(#score);