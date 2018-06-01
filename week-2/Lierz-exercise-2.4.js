/*
==========================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 1 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of 
;JavaScript functions
;==========================================
*/


var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 2.4")); 
console.log("\n");

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

//function properties

firstName = 'Caren'
lastName = 'Lierz'
year = '2018'
month = 'June'
day = '1'





// function(s) go here...
function fullName() {
    return firstName + " " + lastName
    
}

function dateWriter() {
    return month + " " + day + "," + " " + year

}

function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition);

}

function convertToInt(string) {
    return parseInt(string);

}

function convertToFloat(string) {
    return parseFloat(string);

}

// output 

console.log('\n'); 


console.log("Hello my name is " + fullName() + "!" +  
"\n\n" + "Today's date is" + " " + dateWriter() + " " + "and the current temperature is" + " " + formatNumber(95, 1) + "." +
"\n\n" + "I am" + " " + convertToInt("39") + " " + "years old and my savings account goal is" + " " + convertToFloat("100000.00") + " " + "dollars.");

// end program 

