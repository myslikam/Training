/* 'use strict'; */

/* let number = 5;
const MuyNumber = 25;
number = 25;
console.log(number);

number = MuyNumber - 25;
console.log(number);
 
const age = {
    name: "Sasha",
    higHt: 176,
    family: "myslik"
};

console.log(age.higHt);

const arr = ["barsik", "tosha"];

console.log(arr[1]); */

/* alert("Hello"); */

/* const newChips = confirm("Будешь чипсы");
console.log(newChips); */
/* 
let ear = +prompt('Сколько тебе лет', 'напиши');
console.log(typeof(ear)); */

/* const arr = [];

/* arr[0] = prompt('Имя','');
arr[1] = prompt('Фамилия','');
arr[2] = prompt('Год рождения',''); 
/* document.write(arr); */

/* console.log(typeof(arr));  */

/* let collInfo = [];

collInfo[0] = +prompt('Расход сараем','Гкал');
collInfo[1] = +prompt('Расход сараем2','Гкал');

let summa = collInfo[0] + collInfo[1];

document.write(`потребление ${summa} Гкал`); */

/* let nameLoh = prompt('Введите имя','имя');
alert(`Привет ${nameLoh}`); */

/* let a = +prompt('Введите вес','');
let b = +prompt('Введите толщину','');
let c = a + b;
document.write(`Вы получили ${c} кг метров`);
 */

/*  let incr = 10,
     decr = 10; */

/*  ++incr;
 --decr;
 console.log(incr);
 console.log(decr); */

 /* --incr;
 ++decr; */
/*  console.log(incr++);
 console.log(decr--);
 console.log(incr);
 console.log(decr); */

/*  console.log(11%4); */

/* console.log(5*2 === '10'); */

/* const a = true,
      b = false; */
    
/* console.log(5 !== '5'); */
/* 
let a = 10;
let b = 15;

if (a > b) {
    console.log("Ok");
} else {
    console.log("No Ok");
}
 */

 
/*  let yearInput = prompt("Сколько мне лет");
 let yearMy = 45; */

 /* if (yearInput == yearMy) {
     document.write('Все верно');
 } else if (yearInput > yearMy) {
    document.write('Много');
 } else {
    document.write('Мало');
 }
 */


/* 
 let yearMy = 45;

 while (yearMy <= 50) {
     console.log (yearMy);
     yearMy++;
 } */

 /* let yearMy = 1;

 for (let i=1; i<=5; i++) {
    console.log (yearMy);
    yearMy++;
 } */

 /* let num = 20; 
 
function showFirstMesseng(text) {
    console.log(text);
    let num = 30;
    console.log(num);    
}

showFirstMesseng('Привет');
console.log(num);


console.log(calc(2, 4));
console.log(calc(3, 6));
console.log(calc(5, 2));

function calc(a, b) {
    return(a + b);
}




function ret() {
    let num = 50;
    return num;
}

let NewNum = ret();
console.log(NewNum); */

/* let tex = "text";

console.log(tex.length); */

let arr = [1, 2, 4];
console.log(arr.length);

let tex = "teXt";

console.log(tex.toUpperCase());
console.log(tex);
console.log(tex.toLowerCase());



const fruet = "Привет мир";
console.log(fruet.substr(5, 3));


console.log(fruet.slice(-10, -4));

console.log(fruet.indexOf('мирf'));
console.log(fruet.slice(7, 10));

let a = 10.5;
console.log(Math.round(a));

let b = '10.5px';
console.log(parseInt(b));
console.log(parseFloat(b));