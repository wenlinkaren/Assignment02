let step1 = prompt("Are you ready to play the game?"), step2, step3;
if (step1 === "Yes" || step1 === "yes") {
    window.console.log("Continue");
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.")
    step2 = prompt("Which direction would you like to head (please enter forward, left, or right).");
    switch (step2) {
        case "forward":
            alert("You walk 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
            break;
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }
    step3 = Number(prompt("The game is over. Please rate the game between 1 and 10."));
    if (step3 >= 6 && step3 <= 10) {
       alert("Thank you! Do you want to replay now?");
    } else if (step3 >= 1 && step3 <= 5 ) {
        alert("Thank you for playing! We are working hard to improve the game.");
    } else {
        alert("Thank you for playing!");
    }
} else {
    alert("Thank you! We are expecting you to play next time.");
}
