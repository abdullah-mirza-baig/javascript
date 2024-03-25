// 1
// let city = prompt("Enter the name of your city:");
// if (city.toLowerCase() === "karachi") {
//     console.log("Welcome to the city of lights!");
// } else {
//     console.log("Welcome to " + city + "!");
// }

// 2
// const gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//     console.log("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     console.log("Good Morning Ma'am.");
// } else {
//     console.log("Invalid gender entered.");
// }

// 3
// let color = prompt("Enter the color of the traffic signal (red/yellow/green):");

// if (color.toLowerCase() === "red") {
//     console.log("Must Stop");
// } else if (color.toLowerCase() === "yellow") {
//     console.log("Ready to move");
// } else if (color.toLowerCase() === "green") {
//     console.log("Move now");
// } else {
//     console.log("Invalid color entered.");
// }

// 4
// const remainingFuel = parseInt(prompt("Enter the remaining fuel in your car (in litres):"));
// if (remainingFuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// } else {
//     console.log("You have enough fuel in your car.");
// }

// 5
// a:The alert message "given condition for variable a is true" will be displayed
// b:No alert message will be displayed because the condition b++ === 83 evaluates to false. 
// c:condition 2 is true / condition 4 is true
// d:  The alert message "The cost equals"
// e: Only the alert message "True" will be displayed
// f: The alert message "car is smaller than cat" will be displayed because the comparison is made lexicographically

// 6
// const subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
// const subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
// const subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
// const totalMarks = parseFloat(prompt("Enter total marks:"));

// const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// const percentage = (totalObtainedMarks / totalMarks) * 100;

// let grade, remarks;

// if (percentage >= 80) {
//     grade = 'A-one';
//     remarks = 'Excellent';
// } else if (percentage >= 70) {
//     grade = 'A';
//     remarks = 'Good';
// } else if (percentage >= 60) {
//     grade = 'B';
//     remarks = 'You need to improve';
// } else {
//     grade = 'Fail';
//     remarks = 'Sorry';
// }
// document.write("<h2>Marks Sheet:</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

// 7

// 8
// const number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else {
//     console.log("The number is not divisible by 3.");
// }

// 9
// const number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// 10
// const temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("Temperature is below 10°C.");
// }

// 11
// const firstNumber = parseFloat(prompt("Enter the first number:"));
// const secondNumber = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     result = firstNumber / secondNumber;
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     console.log("Invalid operation.");
// }
// console.log("Result:", result);

