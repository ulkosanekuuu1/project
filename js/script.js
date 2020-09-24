"use strict";

const personalMovieDB = {
    //   count: prompt("how long u watch films?", ""),
    movies: {},
    actors: {},
    geners: [],
    private: true,

    watchedfilm: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let nameFIlm = "";
            while (nameFIlm == null || nameFIlm.length > 50 || nameFIlm == "") {
                nameFIlm = prompt("vvedite film");
            }
            personalMovieDB.movies[nameFIlm] = prompt("write stars of fiml");
        }
    },

    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        const howGeners = +prompt('сколько у вас любимых жанпрв?');
        let geners = '';

        for (let i = 0; i < howGeners; i++) {
            while (geners == "" || geners == null) {
                geners = prompt("введите один из любимых жанров");
            }
            personalMovieDB.geners[i] = geners;
            geners = "";
        }
    },

    toggleVisibleMyDB: function () {
        this.private ? (this.private = false) : (this.private = true);
    },
};


personalMovieDB.writeYourGenres();
personalMovieDB.geners.forEach(function (item, i) {
    console.log(`любимый жанр #${i+1} это ${item}`);
});