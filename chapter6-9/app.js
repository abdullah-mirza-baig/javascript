// 1
// var a= 10;
// document.write("<p>Result:</p>")
// document.write("<p>-----------------</p>")
// document.write(`<p>The value of a is: ${a}</p>`);
// var a = ++a;
// document.write(`<p></br>The value of ++a is: ${a}</p>`);
// document.write(`<p>Now the value of a is: ${a}</p>`);

// document.write(`<p></br> The value of a++ is: ${a}</p>`);
// var a=a++;
// document.write(`<p>Now the value of a is: ${a}</p>`);

// document.write(`<p></br>The value of --a is: ${a}</p>`);
// var a = --a;
// document.write(`<p>Now the value of a is: ${a}</p>`);

// document.write(`<p></br>The value of a-- is: ${a}</p>`);
// var a = a--;
// document.write(`<p>Now the value of a is: ${a}</p>`);

// 2
// var a = 2, b = 1;

// // Step 1: --a;
// --a;

// // Step 2: --a - --b;
// var step2 = --a - --b;

// // Step 3: --a - --b + ++b;
// var step3 = --a - --b + ++b;

// // Step 4: --a - --b + ++b + b--;
// var result = --a - --b + ++b + b--;

// // Output
// console.log("Value of a after step 1: " + a); 
// console.log("Value of b after step 1: " + b); 
// console.log("Result of step 2: " + step2);
// console.log("Result of step 3: " + step3); 
// console.log("Final result: " + result); 

// 3
// var name = prompt("Enter your name:");

// alert("Hello, " + name + "! Welcome to our website.");

// 5
        // var inputNumber = prompt("Enter a number to display its multiplication table:");

        // var number = parseInt(inputNumber) || 5;

        // document.write("<h2>Multiplication Table of " + number + "</h2>");
        // document.write(number + " x 1 = " + (number * 1) + "<br>");
        // document.write(number + " x 2 = " + (number * 2) + "<br>");
        // document.write(number + " x 3 = " + (number * 3) + "<br>");
        // document.write(number + " x 4 = " + (number * 4) + "<br>");
        // document.write(number + " x 5 = " + (number * 5) + "<br>");
        // document.write(number + " x 6 = " + (number * 6) + "<br>");
        // document.write(number + " x 7 = " + (number * 7) + "<br>");
        // document.write(number + " x 8 = " + (number * 8) + "<br>");
        // document.write(number + " x 9 = " + (number * 9) + "<br>");
        // document.write(number + " x 10 = " + (number * 10) + "<br>");

        // 6
        // var subject1 = prompt("Enter the name of the first subject:");
        // var subject2 = prompt("Enter the name of the second subject:");
        // var subject3 = prompt("Enter the name of the third subject:");

        // var totalMarks1 = parseInt(prompt("Enter total marks for " + subject1 + ":"));
        // var totalMarks2 = parseInt(prompt("Enter total marks for " + subject2 + ":"));
        // var totalMarks3 = parseInt(prompt("Enter total marks for " + subject3 + ":"));

        // var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
        // var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
        // var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

        // var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        // var percentage1 = (obtainedMarks1 / totalMarks1) * 100;
        // var percentage2 = (obtainedMarks2 / totalMarks2) * 100;
        // var percentage3 = (obtainedMarks3 / totalMarks3) * 100;

        // var totalTotalMarks = totalMarks1 + totalMarks2 + totalMarks3;
        // var totalPercentage = (totalObtainedMarks / totalTotalMarks) * 100;

        // document.write("<h2>Marks Sheet</h2>");
        // document.write("<table border='1'>");
        // document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
        // document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks1 + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
        // document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks2 + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
        // document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks3 + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
        // document.write("<tr><td><strong>Total</strong></td><td>" + totalTotalMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
        // document.write("</table>");


