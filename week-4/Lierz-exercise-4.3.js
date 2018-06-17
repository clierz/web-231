/*
==========================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 15 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use arrays and filtering
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 4.3")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program


// creating a one-dimensional array with 5 vehicles

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


// function
//Create a function called getValue that accepts two arguments: a one-dimensional array and a value 
//to filter against.  The getValue function should iterate over the one-dimensional array and use an "if" clause to compare each iterated element against the
//parameterized value
  

function getValue(arr, val) {
    for (var k =0; k < arr.length; k++) {
        if (arr[k] === val)
            console.log(arr[k]);
    }

}

// Output
// returning the list of array items
console.log("-- DISPLAYING ARRAY ITEMS --");
    for (var x = 0; x < vehicles.length; x++) {
        console.log(vehicles[x]);
    }

// creating a new line
console.log("");

// returning Motorcycle as per the assignment
console.log("--SELECTED VALUE--");
getValue(vehicles, "Motorcycle");

//returning Bus as per the assignment

console.log("");
console.log("--SELECTED VALUE--");
getValue(vehicles, "Bus");

// end program