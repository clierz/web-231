/*
==========================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 17 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use arrays and predicates
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 4.4")); 
console.log("\n");


var header = require('../header.js');

/*-- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program

// Creating a one-dimensional 5 element array

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];


// function
function getValue(x, val) {
    return x=== val;
}
    

// Output
//display the original unsorted array
console.log("-- ORIGINAL ARRAY --\n" + states.join("\n"));



// creating a new line
console.log("");

//sort the array
var statesSorted = states.sort();
console.log("-- SORTED ARRAY --\n" + statesSorted.join ("\n"));

// creating a new line
console.log("");

//return the selected value of Iowa
var filterStates = states.filter(function(x) {return getValue(x, "Iowa")});
console.log("-- SELECTED VALUE -- \n" + filterStates.join("\n"));



// end program
