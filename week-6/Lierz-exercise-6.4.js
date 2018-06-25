/*
==========================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 25 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of nested object literals
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 6.4")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

// Create an object literal ticket with a nested object literal person.
var ticket = {
    id: 143,
    name: "Caren Lierz",
    dateCreated: "February 21, 1979",
    priority: "VIP",
    personID: "21",

    person: {
        id: 100,
        firstName: "Fred",
        lastName: "Rogers",
        jobTitle: "TV Star"
    }
};

// Log out the syntax as per the starter code:

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee "
    + ticket.person.firstName + " " + ticket.person.lastName + " " + "(" + ticket.person.jobTitle + ").");

// end program