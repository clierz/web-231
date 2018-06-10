/*
==========================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 8 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of loops
;==========================================
*/

// Header information 

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 3.4")); 
console.log("\n");

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable

var testVar = 8;



// for loop
console.log("-- Displaying for loop --");
for(var x = 0; x < 10; x++) {
    //creates a random number on every iteration
    var randNumber = randomNumber();


//compare random number to test case
    if(randNumber === testVar) {
        logMatch(randNumber, testVar);
    }
    else {
        logMismatch(randNumber, testVar);
    }
}



// while loop
console.log("\n-- Displaying while loop --"); 
var x = 0;
while (x < 10) {
    x++

    //creates a random number on every iteration
    var randNumber = randomNumber();

    //compare random number to test case
    if(randNumber === testVar) {
        logMatch(randNumber, testVar);
    }
    else {
        logMismatch(randNumber, testVar);
    }
}


// Reused functions from exercise-3.2.js

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



// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}
