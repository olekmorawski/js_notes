// Tworzenie zmiennej
// var, let, const
// Redeklaracaja (var)

// let i const sie nie da
// let x = 42;
// let x = 123;
// console.log(x);

// Reinicjalizacja (var)
// var x = 42;
// x = 2137;
// console.log(x);

// let x = 42;
// x = 2137;
// console.log(x);

// const sie nie da
// const x = 42;
// x = 2137;
// console.log(x);

// Boolean
// Number
// String
// Null
// Undefined
// Bigint
// Symbol
// Object

// Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas w gore, aktualnie przetwarzaniego zasiegu.
// (var, let (TDZ), const(TDZ))
// TDZ- temporary dead zone

// console.log(x);
// x = 42;

// var y;
// console.log(x);
// x = 42;

// console.log(add(1,2));
// function add(a, b){
//     return a + b;
// }

// Zasieg (Scope) - widocznosc, dostepnosc identyfikatorow (nazwy zmiennych, funkcji i klas), tzn. gdzie co mozna uzywac

// funkcyjny - ograniczony przez cialo funkcji (var)
//  blokowy - ograniczony przez pare klamerek (let const)

//funkcje
function addDigits(digit1, digit2) {
  return digit1 + digit2;
}
addDigits(1, 2);

//anonymous function
//classic
// fucntion expressuib (wyrazenie funkcyjne ) przypisanie dejklaracji fn do zmiennej
//
const addDigits2 = function (digit1, digit2) {
  return digit1 + digit2;
};
addDigits2(1, 2);

// arrow function - funkcja strzalkowa, fat arrow fucntion (niema this ani arguments)

const addDigits3 = (digit1, digit2) => {
  return digit1 + digit2;
};

addDigits3(1, 2);

// warjacje arrow function
const add = () => {
  return 42;
};
//
const add1 = (a) => {
  return a + 42;
}; // nie pisac tak zawsze pisac okragle nawiasy
//
const add2 = (a, b) => {
  return a + b;
};
const add3 = (a, b) => {
  a + b;
}; // implicit return, haj bue na klamerek to automatycznie zwraca wynik wyrazenia

const magic = (a) => a <= 0; // (a) => (a <= 0), (a) => { return a <= 0 }

const magic2 = () => {
  return { a: 42 };
};
// to samo co wyzej
const magic3 = () => ({ a: 42 });

// Control flow
// if (condition){
//     // true
// } else if (condition2) {
//     // true if condition false and condition 2 true
// } else {
//     // default
// }

//loops
const x = [1, 2, 3];
const y = [];

// for (let i = 0; i < x.length; i++) {
//     y.push(x[i] * 2);
// }
// console.log(y);

// for of
// for (const item of x){
//     y.push(item * 2 );
// }

// while  jezeli nie wiemy ile iteracji, for jezeli nie wiemy
// while(condition) {
//     // logic
// }

// let index = 0;

// while (index < 3) {
//   y.push(x[index] * 2);
//   index++;
// }

// do {} while (condition)

// zadania

// napisz funkcje ktora zwraca z tablicy najwyzsza wartosc

// function max(collection){
//     let maxValue = collection[0];

//     for (const digit of collection){
//         if (digit > maxValue){
//             maxValue = digit;
//         }
//     }
//     return maxValue;
// }

// const getDayName = (dayIndex) => {
//   switch (dayIndex) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//   default:
//     throw new Error('invalid index dat');
//     };
// }



// function calcAvg(tablica) {
//     let suma = 0;
//     for (let i = 0; i < tablica.length; i++) {
//       suma += tablica[i];
//     }
//     return suma / tablica.length;
//   }