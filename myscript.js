/* I certify that the HTML file I am submitting is all my own work.
 None of it is copied from any source or any person.
 Signed: Bryce Beeskow
 Date: 2/16/2025
*/
/*
 Author: Bryce Beeskow
 Date: 2/16/2025
 Class: CSC135
 Project: Assignment 6
 File Name: myscript.js
 Description: JavaScript for calculator
*/
/* Add references here, if applicable*/


// Select the display and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Variable to store the current expression
let currentExpression = "";

// Add event listener for each button click
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.textContent;

        // If the button is the clear button, reset the display
        if (buttonValue === "C") {
            currentExpression = "";
            display.textContent = "";
        } 
        // If the button is equals, evaluate the expression
        else if (buttonValue === "=") {
            try {
                // Use eval() to evaluate the expression and display the result
                currentExpression = eval(currentExpression).toString();
                display.textContent = currentExpression;
            } catch (error) {
                // In case of an error, display "Error"
                display.textContent = "Error";
                currentExpression = "";
            }
        } 
        // Otherwise, append the digit/operator to the expression
        else {
            currentExpression += buttonValue;
            display.textContent = currentExpression;
        }
    });
});
