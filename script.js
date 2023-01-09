/*// Fetch the elements/buttons from the DOM
let rock = document.getElementById("rockButton")
let paper = document.getElementById("paperButton")
let scissors = document.getElementById("scissorsButton")
let reset = document.getElementById("resetButton")
let com = document.getElementById("com")/

// Actions to print the onClick events into the console.log, by the user
rock.onclick = () => console.log("user played Rock")
paper.onclick = () => console.log("user played Paper")
scissors.onclick = () => console.log("user played Scissors")
reset.onclick = () => console.log("user Reset the game")
com.onclick = () => console.log("user teased the opponent")*/

// Fetch elements for manipulation
let userInputs = document.getElementById("userHand")
let comInputs = document.getElementById("comHand")
let resultInputs = document.getElementById("result")
let possibleHands = document.querySelectorAll(".press")
let userLogs

// USER hands based on click events 
possibleHands.forEach(possibleHand => possibleHand.addEventListener("click", (event) => {
    userLogs = event.target.id
    userInputs.innerHTML = userLogs
    comAI()
    resultsByHand()
}))

// COM AI - raffles a hand within the array (Fix: "undefined" hand in the DOM???)
function comAI() {
    let comLogs = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * possibleHands.length)
    comInputs.innerHTML = comLogs[randomNumber]
}

// Rules for the game between USER and COM
function resultsByHand() {
    if (userLogs == comLogs)    {
        result = " Looks like we drew the same hands!"
    } else if (userLogs === "rock" && comLogs === "scissors") {
        result = " Darn, you broke my scissors!"
    } else if (userLogs === "paper" && comLogs === "rock") {
        result = " Really, your paper beats my rock?!"
    } else if (userLogs === "scissors" && comLogs === "paper") {
        result = " Fair enough, you cut my paper!"
    } else {
        result = " You lost, Better luck next time."
    }
    resultInputs.innerHTML = result
}

// Reset game
function reset() {
    result = "Why did you reset me?"
    resultInputs.innerText = result
 }