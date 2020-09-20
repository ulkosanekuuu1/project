"use strict";
const numberOfFilms = prompt("how long u watch films?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};
for (let i = 0; i < personalMovieDB.count; i++) {
  let nameFIlm = "";

  while (nameFIlm == null || nameFIlm.length > 50 || nameFIlm == "") {
    nameFIlm = prompt("vvedite film");
  }

  personalMovieDB.movies[nameFIlm] = prompt("write stars of fiml");
}
console.log(personalMovieDB);
personalMovieDB.count < 2
  ? alert("любитель")
  : personalMovieDB.count < 4
  ? alert("средний")
  : alert("профант");
