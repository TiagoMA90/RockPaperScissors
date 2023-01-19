//-------------Fetch elements for manipulation-------------
// Hand properties
let userInputs = document.getElementById("userHand");
let comInputs = document.getElementById("comHand");
let resultInputs = document.getElementById("result");
let possibleHands = document.querySelectorAll(".press");
let userLogs;
let comLogs;
let result;

// Score and Result properties
let userPointsInputs = document.getElementById("userPoints");
let comPointsInputs = document.getElementById("comPoints");
let userPoints = 0;
let comPoints = 0;

// Modal properties
let modalBackground = document.getElementById("modalBackground");

/**
 * USER hands based on click events
 * (Event Listner based on clicks, that call a possibleHand for the user, accordingly to the ".press" in the HTML)
 * (This function calls the function/decision for the COM, comAI, once the user pressed a button within the DOM)
 */ 
possibleHands.forEach(possibleHand => possibleHand.addEventListener("click", (event) => {
    userLogs = event.target.id;
    userInputs.innerHTML = userLogs;
    comAI();
    resultsByHand();
}));

/**
 * COM AI - raffles a hand within the array
 * (This function rabdombly generates a number with the method Math.random, rounded by Math.ceil times the .length of possibleHands)
 * (Each number corresnponds to a Hand and calls to manipulate the DOMs innerHTML upon call)
 */
function comAI() {
    let randomNumber = Math.ceil(Math.random() * possibleHands.length);
    
    if (randomNumber === 1) {
        comLogs = "rock";
        rockComDisplay();
    }
    if  (randomNumber === 2) {
        comLogs = "paper";
        paperComDisplay();
    }
    if (randomNumber === 3) {
        comLogs = "scissors";
        scissorsComDisplay();
    }
    comInputs.innerHTML = comLogs;
}

/**
 * Rules for the game between USER and COM
 * (Function that sets conditional rules for the game between USER and COM)
 * (It calls the results and determines if a USER or COM won, based on the hands drawn)
 * (Calls Audio, increments the score and displays random text)
 */
function resultsByHand() {
    let userPointsIncrement;
    let comPointsIncrement;

    if (userLogs === comLogs)    {
        result = drawText();
    } else if (userLogs === "rock" && comLogs === "scissors") {
        result = rockText();
        userPointsIncrement = userWins();
        rockAudio.play();
    } else if (userLogs === "paper" && comLogs === "rock") {
        result = paperText();
        userPointsIncrement = userWins();
        paperAudio.play();
    } else if (userLogs === "scissors" && comLogs === "paper") {
        result = scissorsText();
        userPointsIncrement = userWins();
        scissorsAudio.play();
    } else {
        result = lostText();
        comPointsIncrement = comWins();
    }
    resultInputs.innerHTML = result;
    userPoints.inheritText = userPointsIncrement;
    comPoints.inheritText = comPointsIncrement;
}

/**
 * Reset the game back to 0 - 0
 * (Function that resets the score for USER and COM back to zero)
 */



let reset = document.getElementById("reset");

reset.addEventListener("click", (event) => {
   result = "Why did you reset me?";
   resultInputs.innerText = result;
   userPoints = 0;
   comPoints = 0;
   userPointsInputs.innerText = userPoints;
   comPointsInputs.innerText = comPoints;
   resetUserDisplay();
   resetComDisplay();
});

/* Documentation for the DeveloperNOTES: Onclick Function - This is documentation for the Developer

function reset() {
    result = "Why did you reset me?";
    resultInputs.innerText = result;
    userPoints = 0;
    comPoints = 0;
    userPointsInputs.innerText = userPoints;
    comPointsInputs.innerText = comPoints;
    resetUserDisplay();
    resetComDisplay();
 }*/

// Reset USER profile image
function resetUserDisplay()	{
	let userImg = document.getElementById("userHand");
    userImg.src = "assets/images/user.gif";
}

// Reset COM profile image
function resetComDisplay()	{
	let comImg = document.getElementById("comHand");
    comImg.src = "assets/images/com.gif";
}


/**
 * Functions: COM randomly inputs text
 * (Functions with an arrays of strings that randomly selects an index, to be called in the if/else if/else staments)
 */
// Displays the following text if both USERand COM draw
function drawText() {
    let drawInputs = [
        "Looks like we drew the same hands!",
        "It's a tie. Let's continue playing.",
        "Draw. Best out of how many points?",
        "We drew hands to a tie!",
        "Wise hand, but we tied this round.",
        "Draw. Smash that button!"];

    return drawInputs[Math.floor((Math.random() * drawInputs.length))];
}

// Displays the following text if USER wins with Rock hand
function rockText() {
    let rockInputs = [
        "Your Rock broke my Scissors!",
        "Outstanding, you are a natural!",
        "Rock is a strong hand.",
        "You beat me. Let's keep playing!",
        "Impressive. You outmatched me.",
        "Very well, you won this round.",
        "You like playing Rock, I see..."];

    return rockInputs[Math.floor((Math.random() * rockInputs.length))];
}

// Displays the following text if USER wins with Paper hand
function paperText() {
    let paperInputs = [
        "Really, your Paper beats my Rock?!?",
        "Well done, I didn't expect that!",
        "How the heck does Paper beats Rock...",
        "You won with a Paper hand!",
        "You are very good. Let's go again.",
        "Not bad, not bad at all.",
        "You warped your Paper over my Rock!"];

    return paperInputs[Math.floor((Math.random() * paperInputs.length))];
}

// Displays the following text if USER wins with Scissors hand
function scissorsText() {
    let scissorsInputs = [
        "Fair enough, your Scissors cut my Paper!",
        "You won! Are you sure you are not cheating?",
        "You cut my paper into pieces!",
        "Careful with those Scissors! You win.",
        "You beat me with a Sharp hand.",
        "Congratulations, you won.",
        "Scissors cuts Paper, you win!"];

    return scissorsInputs[Math.floor((Math.random() * scissorsInputs.length))];
}

// Displays the following text if COM wins
function lostText() {
    let lostInputs = [
        "Yes! I won!!!",
        "My hand was stronger this time.",
        "I am getting good at this!",
        "I win. I should teach you how to play!",
        "I promisse I am not cheating...",
        "Tiago gave me a fair algorithm.",
        "This is fun. It's easy when you know how!",
        "Nice hand, but I won!"];

    return lostInputs[Math.floor((Math.random() * lostInputs.length))];
}

/** 
 * Increments the Score between USER and COM
 * (Both Functions add to the Score of respective parties +1)
 */
// USER Wins and points are incrememted by 1
function userWins() {
    userPoints = userPoints +1;
    userPointsInputs.innerText = userPoints;
 }

 // COM Wins and points are incrememted by 1
function comWins() {
    comPoints = comPoints +1;
    comPointsInputs.innerText = comPoints;
 }


//--------Functions: USER vs COM profile images--------
// Functions displaying images on userHand

// Display Rock hand for USER
function rockUserDisplay()	{
	let rockImg = document.getElementById("userHand");
    rockImg.src = "assets/images/rockhand.webp";
}

// Display Paper hand USER
function paperUserDisplay()	{
	let paperImg = document.getElementById("userHand");
    paperImg.src = "assets/images/paperhand.webp";
}

// Display Scissors hand for USER
function scissorsUserDisplay()	{
	let scissorsImg = document.getElementById("userHand");
    scissorsImg.src = "assets/images/scissorshand.webp";
}

/**
 * Functions to change USER profile images
 * (Displays images based on the onclick events of the USER, thyt consequently are called by the comAI function)
 */
// Display Rock hand for COM 
function rockComDisplay()	{
	let rockImg = document.getElementById("comHand");
    rockImg.src = "assets/images/rockhand.webp";
}

// Display Paper hand for COM
function paperComDisplay()	{
	let paperImg = document.getElementById("comHand");
    paperImg.src = "assets/images/paperhand.webp";
}

// Display Scissors hand for COM
function scissorsComDisplay()	{
	let scissorsImg = document.getElementById("comHand");
    scissorsImg.src = "assets/images/scissorshand.webp";
}

// Audio sound effects
let rockAudio = new Audio();
rockAudio.src = "assets/audio/rocksfx.mp3";

let paperAudio = new Audio();
paperAudio.src = "assets/audio/papersfx.mp3";

let scissorsAudio = new Audio();
scissorsAudio.src = "assets/audio/scissorssfx.mp3";

let buttonAudio = new Audio();
buttonAudio.src = "assets/audio/buttonsfx.mp3";

let resetAudio = new Audio();
resetAudio.src = "assets/audio/resetsfx.mp3";

// Modal Function closed onclick
function startGame()  {
    modalBackground.remove();
}