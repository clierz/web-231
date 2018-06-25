/*
==========================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 25 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of Exception Handling
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 6.2")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program

// declaring a variable to be used later in the code
var addressState = "PR"

// build my try, catch, finally code.

try {

    if (addressState == "PR") throw "We don't ship to U.S. Territories";

    
} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause reached: End of program!");

}

// end program