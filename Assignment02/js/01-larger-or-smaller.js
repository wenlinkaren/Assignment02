let integer1 = prompt("Please put the first integer"), integer2 = prompt("Please put the second integer");
if (integer1 > integer2) {
    document.write(integer1 + " is larger.");
} else if (integer1 < integer2) {
    document.write(integer2 + " is larger.");
} else { 
    document.write("They are equal.");
}