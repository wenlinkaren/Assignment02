let coinFlip, choice, randomNum = Math.round(Math.random());
coinFlip = randomNum;
choice = prompt("Please Selet Heads or Tails");
if (choice === "Heads" || choice === "heads") {
    if (coinFlip < 10) {
        window.console.log("Head");  
        alert("The flip was heads and you chose heads...you win!"); 
    } else if (coinFlip > 10) {
        window.console.log("Tail");
        alert("The flip was tails and you chose heads...you lose!");
    } else {
        alert("The flip was not valid.");
    }
} else if (choice === "Tails" || choice === "tails") {
    if (coinFlip < 10) {
        window.console.log("Heads");
        alert("The flip was heads and you chose tails...you lose!");
    } else if (coinFlip > 10) {
        window.console.log("Tails");  
        alert("The flip was tails and you chose tails...you win!"); 
    } else {
        alert("The flip was not valid.");
    }
} else {
    alert("The flip was not valid.");
}