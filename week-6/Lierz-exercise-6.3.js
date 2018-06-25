/*
==========================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 25 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of Object Literals
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 6.2")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

// create an object literal that has 3 fields and default values

var ticket = {
    id: 143,
    name: "Fred Rogers",
    requestor: "Caren Lierz"
};

// display each of the fields in one concatenated string

console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requestor: " 
+ ticket.requestor + "}");

// end program