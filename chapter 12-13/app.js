// 1
//  function checkInputType() {
//     const input = prompt("Enter a character:");

//     if (input === null || input === "") {
//         console.log("No input provided.");
//     }

//     const charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log("Number");
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log("Uppercase Letter");
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log("Lowercase Letter");
//     } else {
//         console.log("Unknown Character");
//     }
// }
// checkInputType();

// 2
// function compareIntegers() {
//     const num1 = parseInt(prompt("Enter the first integer:"));
//     const num2 = parseInt(prompt("Enter the second integer:"));

//     if (num1 && num2) {
//         if (num1 > num2) {
//             console.log(`${num1} is larger than ${num2}`);
//         } else if (num1 < num2) {
//             console.log(`${num2} is larger than ${num1}`);
//         } else {
//             console.log("Both integers are equal.");
//         }
//     } else {
//         console.log("Please enter valid integers.");
//     }
// }
// compareIntegers();


// 3
// const number = parseInt(prompt("Enter a number:"));

// if (!isNaN(number)) {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

// 4
// let vowel = prompt("ENTER A VOWEL").toLowerCase();
// if(vowel ==="a" || vowel ==="e" || vowel ==="i" || vowel ==="o" || vowel ==="u"){
//     console.log(`${vowel} is Vowel`);
// }
// else{
//     console.log(`${vowel} is Not Vowel`);
// }

// 5
// const correctPassword = "password123";
// const userInput = prompt("Enter your password:");

// if (userInput === null || userInput === "") {
//     console.log("Please enter your password.");
// } else if (userInput === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// 7


// var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));


// if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
//     console.log("Invalid input. Please enter a valid time in 24-hour format.");
// } else {

//     var hours = Math.floor(time / 100);
//     var minutes = time % 100;


//     var period;
//     if (hours >= 12) {
//         period = "PM";
//         if (hours > 12) {
//             hours -= 12;
//         }
//     } else {
//         period = "AM";
//         if (hours === 0) {
//             hours = 12;
//         }
//     }


//     console.log("The time is: " + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + period);
// }

