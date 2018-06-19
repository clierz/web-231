/*
==========================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 17 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use arrays object collections
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 5.3")); 
console.log("\n");


var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

//Create an Array-Like Object of 5 famous composers with the following fields: firstName, lastName, genre, rating
var Composer = [

    {
    
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: '8',

    
    },
    
    {
    
    lastName: 'Mozart',
    genre: 'Classical',
    rating: '10',
    
    },
    
    {
    
    lastName: 'Bach',
    genre: 'Classical',
    rating: '9',
    
    },
    
    {
    
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '6',
    
    },
    
    {
    
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '5',
    
    },
    
];

//Iterate over the Array-Like Object using the built-in forEach() method and output the results
console.log("-- COMPOSERS --")

Composer.forEach(function(composer) {console.log("Last Name:" + " " + composer.lastName + ", " + "Genre:" + " " + composer.genre + ", " + "Rating:" + " " + composer.rating)
});


// end program