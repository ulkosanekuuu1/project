"use strict";
const numberOfFilms = prompt("how long u watch films?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

function watchedfilm() {
  for (let i = 0; i < personalMovieDB.count; i++) {
    let nameFIlm = "";

    while (nameFIlm == null || nameFIlm.length > 50 || nameFIlm == "") {
      nameFIlm = prompt("vvedite film");
    }

    personalMovieDB.movies[nameFIlm] = prompt("write stars of fiml");
  }
  console.log(personalMovieDB);
  personalMovieDB.count < 2 ? alert("любитель") : personalMovieDB.count < 4 ? alert("средний") : alert("профант");
}

function showMyDB() {

  if (!personalMovieDB.privat) {
    console.log(personalMovieDB)
  }

}

function writeYourGenres() {

  for (let i = 0; i < 3; i++) {
    personalMovieDB.geners[i] = prompt(`ваш любимы жанр под номером ${i+1}`, '');
  }

}

