/*
==========================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 15 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use arrays
;==========================================
*/

// Header information 

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 4.2")); 
console.log("\n");

var header = require('../header.js'); 
/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

// create an array with a list of fruit 

var fruitList = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}


// Output from the getFruit() function

getFruit(fruitList);



// end program