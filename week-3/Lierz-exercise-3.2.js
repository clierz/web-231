/*
==========================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 4 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of if/else
;JavaScript functions
;==========================================
*/

// Header information 

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 3.2")); 
console.log("\n");

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// Six test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";



// functions 
function match(arg1, arg2) {
    // returns a boolean response (True/False) whether or not arg 1 and arg2 are equal
    if (arg1 === arg2)
        return true
    else 
        return false
} 

function logMismatch(arg1, arg2) {
    // logs that the two arguments do not match in the console
   console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
    // logs that the two arguments match in the console
    console.log(arg1 + " and " + arg2 + " do match!");
}


 
// Output from the match() function... 
console.log(match("F", "C"));
console.log(match(5, 5));




// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}


if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}



// end program 