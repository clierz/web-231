/*
==========================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 17 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use arrays and predicates
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 5.2")); 
console.log("\n");


var header = require('../header.js');


/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

// Creating a one-dimensional 5 element array

var food = ["Mexican", "Chinese", "Indian", "Vietnamese", "American"];

// Using the forEach() method, iterate over the array and output the results

food.forEach(function(element) {
    console.log(element);
});









// end program