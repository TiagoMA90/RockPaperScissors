// Fetch the elements/buttons from the DOM
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let reset = document.getElementById("reset")
let com = document.getElementById("com")

// Actions to print the onClick events into the console.log, by the user
rock.onclick = () => console.log("user played Rock")
paper.onclick = () => console.log("user played Paper")
scissors.onclick = () => console.log("user played Scissors")
reset.onclick = () => console.log("user Reset the game")

//-------------------------------------------------------------------------------------------------------------------
// COM function that displays random numbers between the array [0, 1, 2], based on the variable comHand string array: ["rock", "paper", "scissors"]

/* Method Math.floor() rounds the received decimals numbers into whole numbers, via method Math.random()
which recives the numbers between 0 and 1, times the .length of the strings in the array (in this case, 3). */

// Global Scope for the array
let comHand = ["rock", "paper", "scissors"]
function randomComHand(comHand) {
    // Creates 3 numbers, either 0, 1 and 2 based on the comHand string array
    let randomNumber = Math.floor(Math.random() * comHand.length)

console.log(randomNumber)

// Returns a randomly generated number based on the size of the array
return comHand[randomNumber]
}

document.getElementById("com").innerHTML = comHand();
console.log(randomComHand(comHand))

//-------------------------------------------------------------------------------------------------------------------
// Function for the Player vs COM, Rules of Hands on if/else satements warping scores accordingly

// Function with an argument between both parties 
let playerHand = ["rock", "paper", "scissors"]
function result(playerHand, comHand) {

    //Score is set to 0
    let score;

    // If both the player and COM draw, the score is 0 
    if (playerHand == comHand)  {
    score = 0

    // If the rules below are true, the players score is 1
    } else if (playerHand == "rock" && comHand == "scissors")  {
        score = 1
    } else if (playerHand == "paper" && comHand == "rock")  {
        score = 1
    } else if (playerHand == "scissors" && comHand == "paper") {
        score = 1
    }

    // Else, if all events are opposite to the "if" and "if else" statements, the player score is -1
    else {
        score = -1
    }
    // Returns the score for all evrents
    return score
}
//-------------------------------------------------------------------------------------------------------------------

/*To Do:
Create a Score board
Increment/decremeant the overall score
Create a reset function for the game, for the RESET button
COM imgHand should be revelealed/maipulated based on the random hand
Style the buttons click hover on CSS or DOM manipulation
*/