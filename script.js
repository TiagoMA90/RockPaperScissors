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


// COM function that displays random numbers between the array [0, 1, 2], based on the variable comHand string array: ["rock", "paper", "scissors"]

/* Method Math.floor() rounds the received decimals numbers into whole numbers, via method Math.random()
which recives the numbers between 0 and 1, times the .length of the strings in the array (in this case, 3). */

randomComHand = (comHand) => {
    // Creates 3 numbers, either 0, 1 and 2 based on the comHand string array
    let randomNumber = Math.floor(Math.random() * comHand.length)

console.log(randomNumber)

//returns a randomly generated number based on the size of the array
return comHand[randomNumber]
}

comHand = ["rock", "paper", "scissors"]
console.log(randomComHand(comHand))