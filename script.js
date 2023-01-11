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


function comAI() {
    let randomNumber = Math.floor(Math.random() * possibleHands.length)
    
    if (randomNumber === 1) {
        comLogs = "rock"
    }
    if  (randomNumber === 2) {
        comLogs = "scissors"
    }
    if (randomNumber === 3) {
        comLogs = "paper"
    }
    comInputs.innerHTML = comLogs
}


/*// COM AI - raffles a hand within the array (function is not on parallel with the resultsByHands result)
function comAI() {
    let comLogs = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * possibleHands.length)
    comInputs.innerHTML = comLogs[randomNumber]
}*/

// Rules for the game between USER and COM
function resultsByHand() {
    if (userLogs == comLogs)    {
        result = "Looks like we drew the same hands!"
    } else if (userLogs === "rock" && comLogs === "scissors") {
        result = rockText()
    } else if (userLogs === "paper" && comLogs === "rock") {
        result = paperText()
    } else if (userLogs === "scissors" && comLogs === "paper") {
        result = scissorsText()
    } else {
        result = lostText()
    }
    resultInputs.innerHTML = result
}

// Reset game
function reset() {
    result = "Why did you reset me?"
    resultInputs.innerText = result
 }

 // COM random text
document.getElementById("result").innerHTML = rockText();
document.getElementById("result").innerHTML = paperText();
document.getElementById("result").innerHTML = scissorsText();
document.getElementById("result").innerHTML = lostText();

function rockText() {
    let rockInputs = [
        "Your Rock broke my Scissors!",
        "Outstanding, you are a natural!",
        "Rock is a strong hand.",
        "You beat me. Let's keep playing!",
        "Impressive. You outmatched me.",
        "You like playing Rock, I see..."];

    return rockInputs[Math.floor((Math.random() * rockInputs.length))];
}

 function paperText() {
    let paperInputs = [
        "Really, your Paper beats my Rock?!?",
        "Well done, I didn't expect that!",
        "Still trying to understand how Paper beats Rock...",
        "You are very good. Let's go again.",
        "Not bad, not bad at all. I'll get you next time",
        "You warped your Paper over my Rock!"];

    return paperInputs[Math.floor((Math.random() * paperInputs.length))];
}

function scissorsText() {
    let scissorsInputs = [
        "Fair enough, your Scissors cut my Paper!",
        "Very well then, you won this time.",
        "You won! Are you sure you are not cheating?",
        "You beat me to that! Sharp hand.",
        "Congratulations, you won.",
        "Scissors beats Paper, No question about that!"];

    return scissorsInputs[Math.floor((Math.random() * scissorsInputs.length))];
}

function lostText() {
    let lostInputs = [
        "Yes! I won!!!",
        "I am getting good at this!",
        "My dude. I should teach you how to play!",
        "I promisse I am not cheating. Tiago gave me a fair algorithm.",
        "This is fun. It's easy when you know how!",
        "Nice hand, but I won!"];

    return lostInputs[Math.floor((Math.random() * lostInputs.length))];
}