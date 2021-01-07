/*  'use strict';  */

let numberOfFilms; 
/* console.log(numberOfFilms); */

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();


var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let c = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = c;
    }
}
writeYourGenres();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = +prompt('На сколько оцените его?', '');
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log('Ok');
        } else {
            console.log('err');
            i--;
        }
     }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Ошибка");
    }
} 

detectPersonalLevel(); 

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(); 

/* function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);  */




 
