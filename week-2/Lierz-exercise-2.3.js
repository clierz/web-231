/*
==========================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 30 May 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of 
;JavaScript function properties
;==========================================
*/


var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 2.3")); 
console.log("\n");

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.CarenLierz = 'Caren Lierz'

// function 
function myName() {
    return myName.CarenLierz
    
}

// output 
console.log(myName());
console.log('\n'); 




// end program 