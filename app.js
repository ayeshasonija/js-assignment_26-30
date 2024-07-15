// ======================= 01 =========================
// var userInput = +prompt("Enter the positive integer");

// var roundValue = Math.round(userInput);
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);

// document.write("<h3>Number Operations</h3>" + "<br>" + "Number: " + userInput + "<br>" + "Round off value: " + roundValue + "<br>" + "Floor value: " + floorValue + "<br>" + "Ceil value: " + ceilValue);

// ======================= 02 =========================
// var userInput = parseFloat(prompt("Enter a negative floating-point number:"));

// var roundValue = Math.round(userInput);
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);

// document.write("<h3>Number Operations</h3>");
// document.write("<p>a. Number: " + userInput + "</p>");
// document.write("<p>b. Round off value: " + roundValue + "</p>");
// document.write("<p>c. Floor value: " + floorValue + "</p>");
// document.write("<p>d. Ceil value: " + ceilValue + "</p>");


// ======================= 03 =========================
// var userInput = +prompt("Enter a number:");

// var absoluteValue = Math.abs(+userInput);

// alert("The absolute value of " + userInput + " is " + absoluteValue);


// ======================= 04 =========================
// function rollDice() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;

//     document.getElementById('diceResult').textContent = "The dice rolled: " + diceValue;
// }


// ======================= 05 =========================
// function tossCoin() {
//     var coinValue = Math.floor(Math.random() * 2) + 1;

//     var resultText = "";
//     if (coinValue === 1) {
//         resultText = "Head";
//     } else {
//         resultText = "Tail";
//     }

//     document.getElementById('coinResult').textContent = "Coin value: " + coinValue + " (" + resultText + ")";
// }


// ======================= 06 =========================
// document.write( "Randon number between 1 and 100: " + Math.floor(Math.random() * 100));


// ======================= 07 =========================
// function convertWeight() {
//     var userInput = prompt("Enter your weight:");

//     var weightInKilograms = parseWeight(userInput);

//     if (!isNaN(weightInKilograms)) {
//         document.write("<p>Your weight in kilograms is: " + weightInKilograms.toFixed(2) + " kg</p>");
//     } else {
//         document.write("<p>Invalid input. Please enter a valid weight.</p>");
//     }
// }

// function parseWeight(input) {
//     var regex = /^(\d+(\.\d+)?)$/;

//     var cleanedInput = input.replace(/[^\d.]/g, '').toLowerCase();

//     if (regex.test(cleanedInput)) {
//         return parseFloat(cleanedInput); 
//     } else if (cleanedInput.endsWith("kgs") || cleanedInput.endsWith("kilograms")) {
//         var numericPart = cleanedInput.substring(0, cleanedInput.length - 3).trim();
//         return parseFloat(numericPart);
//     } else {
//         return NaN; 
//     }
// }

// convertWeight();

// ======================= 08 =========================
var secretNumber = Math.floor(Math.random() * 10) + 1;

var userInput = prompt("Guess the secret number (between 1 and 10):");

var userNumber = parseInt(userInput);

if (userNumber === secretNumber) {
    alert("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    alert("Sorry, the secret number was: " + secretNumber + ". Try again!");
}