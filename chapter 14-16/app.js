// // 1. Declare an empty array using JS literal notation to store student names in future.
// let studentNamesliteralNotation = [];

// // 2. Declare an empty array using JS object notation to store student names in future.
// let studentNamesobjectNotation = new Array();

// // 3. Declare and initialize a strings array.
// let stringsArray = ["abdi", "saad", "ali"];

// // 4. Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4,];

// // 5. Declare and initialize a boolean array.s
// let booleanArray = [true, true, false];

// // 6. Declare and initialize a mixed array.
// let mixedArray = ["abdi", 23, true];


// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Show the listed qualifications in your browser vertically with counting.
// document.write("<h1>Educational Qualifications:</h1>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write((i+1) + ") " + educationQualifications[i] + "<br>");
// }



// 8. Write a program to store 3 student names in an array. Take another array to store score of these three students.
// let studentNames = ["John", "Alice", "Bob"];
// let scores = [400, 450, 480];
// let totalMarks = 500;

// document.write("<h1>Student Scores and Percentages:</h1>");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write("Student: " + studentNames[i] + ", Score: " + scores[i] + ", Percentage: " + percentage.toFixed(2) + "%<br>");
// }



// // 9. Initialize an array with color names.
// let colorNames = ["Black", "White", "Yellow"];

// // a. Add color to the beginning of the array.
// let userColorBeginning = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(userColorBeginning);

// // b. Add color to the end of the array.
// let userColorEnd = prompt("Enter a color to add to the end:");
// colorNames.push(userColorEnd);

// // c. Add two more colors to the beginning of the array.
// colorNames.unshift("Cyan", "Purple");

// // d. Delete the first color in the array.
// colorNames.shift();

// // e. Delete the last color in the array.
// colorNames.pop();

// // f. Add color to a specific index.
// let userIndex = prompt("Enter the index where you want to add a color:");
// let userColor = prompt("Enter the color to add:");
// colorNames.splice(userIndex, 0, userColor);

// // g. Delete colors from a specific index.
// let deleteIndex = prompt("Enter the index from which you want to delete color(s):");
// let deleteCount = prompt("Enter how many colors you want to delete:");
// colorNames.splice(deleteIndex, deleteCount);

// // Display updated array.
// document.write("<h1>Updated Array</h1>");
// document.write(colorNames);


// 10. Sort student scores in ascending order.
// let studentScores = [70, 80, 60, 90, 85];
// studentScores.sort(function(a, b) {
//     return a - b;
// });



// 11. Initialize an array with city names. Copy 3 array elements to another array.
// let cityNames = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
// document.write("<h1> City Names  </h1> " + cityNames + "<br/> <hr/>");
// let selectedCities = cityNames.slice(1, 4);
// document.write("<h1> Copy City Names</h1> " + selectedCities );


// 12. Create a single string from array elements.
// let arr = ["This", "is", "my", "cat"];
// let singleString = arr.join(" ");
// document.write(singleString);


// 13. Create a FIFO (First In First Out) array.
// let fifoArray = [];
// fifoArray.push("First");
// fifoArray.push("Second");
// fifoArray.push("Third");
// let firstItem = fifoArray.shift();
// document.write(firstItem);

// 14. Create a LIFO (Last In First Out) array.
// let lifoArray = [];
// lifoArray.push("First");
// lifoArray.push("Second");
// lifoArray.push("Third");
// let lastItem = lifoArray.pop();
// document.write(lastItem);


// 15. Store phone manufacturers in an array
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Display dropdown/select menu
// document.write("<select>");
// document.write("<option>Select Manufacturer</option>");

// // Loop through the array to create options
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
