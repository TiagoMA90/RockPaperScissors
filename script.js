// Fetch the elements into the DOM
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let reset = document.getElementById("reset")

rock.onclick = () => console.log("user played Rock")
paper.onclick = () => console.log("user played Paper")
scissors.onclick = () => console.log("user played Scissors")
reset.onclick = () => console.log("user Reset the game")

randomComHand = (comHand) => {
    let randomNumber = Math.floor(Math.random() * comHand.length)

console.log(randomNumber)

return fruits[randomNumber]
}

comHand = ["rock", "paper", "scissors"]
console.log(randomComHand(comHand))