/*
==========================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 7 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of control statements
;==========================================
*/

// Header information 

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 3.3")); 
console.log("\n");

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)

var eventKeyCode = 13;


// switch statement alternative to above if/else statements

switch (eventKeyCode) {
    case 13: 
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32: 
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("the backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press");
        break; 
}



// end program 