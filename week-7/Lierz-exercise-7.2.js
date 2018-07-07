/*
==========================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 7 July 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of constructor functions
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 7.2")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

// create an employee constructor object with four parameters (id, firstName, lastName, and title)

function Employee(id, firstName, lastName, title){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

// populate an array with five employee objects

let employees = [
    new Employee("1", "Thomas", "Edison", "Software Engineer"),
    new Employee("2", "Benjamin", "Franklin", "Programmer"),
    new Employee("3", "Nikola", "Tesla", "Project Manager"),
    new Employee("4", "Chalres", "Babbage", "Product Manager"),
    new Employee("5", "Alexander", "Bell", "Business Analyst"),
];

// iterate over the array and output the results 

for(let emp of employees){
    console.log(`${emp.id} ${emp.firstName} ${emp.lastName} ${emp.title}`);
}

// end program
