let score = Number(prompt("Please enter your score between 1 and 100"));
if (score >= 90 && score <= 100) {
    window.console.log("You received an A");
} else if (score >= 80 && score <= 89) {
    window.console.log("You received a B");
} else if (score >= 70 && score <= 79) {
    window.console.log("You received a C");
} else if (score >= 60 && score <= 69) {
    window.console.log("You received a D");
} else if (score < 60) {
    window.console.log("You received a F");
}