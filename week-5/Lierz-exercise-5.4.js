/*
==========================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 24 June 2018
; Modified By: Caren Lierz
; Description: This program demonstrates the use of Filtering/Reducing Complex Data Structures
;==========================================
*/

var header = require('../header.js');

console.log(header.display("Caren", "Lierz", "Exercise 5.4")); 
console.log("\n");


var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

// Build an array-like object with composers, genre, and rating

var famousComposers = [
    {
        composer: 'Beethoven',
        genre: 'Classical',
        rating: '8',

    },
    
    {
        composer: 'Mozart',
        genre: 'Classical',
        rating: '10',

    },
    {
        composer: 'Bach',
        genre: 'Classical',
        rating: '9',

    },
    {
        composer: 'Haydn',
        genre: 'Classical',
        rating: '6',

    },
    {
        composer: 'Schubert',
        genre: 'Classical',
        rating: '5',

    }
];

// Creating a new variable that's a filtered list of composers by rating

var composersByRating = famousComposers.map(function(composer) {
    return {
        rating: composer.rating,
        composer: composer.composer,
    }

});

// Creating a new variable that's a filtered list of composers by genre

var composersByGenre = famousComposers.map(function(composer) {
    return {
        genre: composer.genre,
        composer: composer.composer,
    }

});

// Log the list of composers by rating using the for each method on the new variable.

console.log("-- COMPOSER BY RATING --");
composersByRating.forEach(function(composer) {
    console.log("Rating: " + composer.rating + "\nComposer: " + composer.composer + '\n');
});


// Log the list of composers by genre using the for each methd on the new variable. 

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(composer) {
    console.log("Genre: " + composer.genre +"\nComposer: " + composer.composer + '\n');
})



// end program