// // 1. Declare and initialize an empty multidimensional array.
// let emptyMultiArray = [];

// // 2. Declare and initialize a multidimensional array representing the following matrix:
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // 3. Write a program to print numeric counting from 1 to 10.
// document.write("<h3>Numeric counting from 1 to 10:</h3>");
// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// // 4. Write a program to print multiplication table of any number using for loop.
// let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// document.write("<h3>Multiplication table of " + tableNumber + ":</h3>");
// for (let i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

// // 5. Write a program to print items of the following array using for loop:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h3>Fruits:</h3>");
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// // 6. Generate the following series in your browser.
// document.write("<h3>Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h3>Reverse counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

// // 7. Write a program to enable “search by user input” in an array.
// let searchItem = prompt("Enter an item to search in the array:");
// let itemsArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// let found = false;

// for (let i = 0; i < itemsArray.length; i++) {
//     if (searchItem.toLowerCase() === itemsArray[i]) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, '" + searchItem + "' is found in the list.");
// } else {
//     alert("No, '" + searchItem + "' is not found in the list.");
// }

// // 8. Write a program to identify the largest number in the given array.
// let numbersArray = [24, 53, 78, 91, 12];
// let largestNumber = numbersArray[0];
// for (let i = 1; i < numbersArray.length; i++) {
//     if (numbersArray[i] > largestNumber) {
//         largestNumber = numbersArray[i];
//     }
// }
// document.write("<h3>Largest number in the array:</h3>");
// document.write(largestNumber);

// // 9. Write a program to identify the smallest number in the given array.
// let smallestNumber = numbersArray[0];
// for (let i = 1; i < numbersArray.length; i++) {
//     if (numbersArray[i] < smallestNumber) {
//         smallestNumber = numbersArray[i];
//     }
// }
// document.write("<h3>Smallest number in the array:</h3>");
// document.write(smallestNumber);

// // 10. Write a program to print multiples of 5 ranging 1 to 100.
// document.write("<h3>Multiples of 5 ranging from 1 to 100:</h3>");
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }
