let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.onclick = () => console.log("user played Rock")
paper.onclick = () => console.log("user played Paper")
scissors.onclick = () => console.log("user played Scissors")
reset.onclick = () => console.log("user Reset the game")

alert("Greetings player. Welcome to Rock Paper Scissors, click the buttons displayed below to . The Rules ar simple. Rock > Scissor > Paper...")