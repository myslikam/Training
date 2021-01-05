/* 'use strict'; */

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* let a = prompt('Один из последних просмотренных фильмов?');
let b = prompt('На сколько оцените его?');

let c = prompt('Один из последних просмотренных фильмов?');
let d = prompt('На сколько оцените его?'); */

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

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы классический зритель");
} else {
    console.log("Ошибка");
}







/* for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('ok');         
    } else {
        console.log('err');  
        i--;
    }
} */

/* let i = 0;
let a = prompt('Один из последних просмотренных фильмов?', '');
let b = prompt('На сколько оцените его?', '');
 while (a != '' && b != '' && a != null && b != null && a.length < 50 && i <= 2) {
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
    console.log('ok');
    i++; 
 }  i--; */


/* 
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Киноман");
} else {
    console.log("Ошибка");
} */

 
