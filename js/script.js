 'use strict';
 const numberOfFilms = prompt("how long u watch films?", "");
 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     geners: [],
     privat: false
 };

 personalMovieDB.movies[prompt("last film")] = prompt("оцените его");
 console.log(personalMovieDB);