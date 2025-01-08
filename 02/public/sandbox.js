"use strict";
// 1
// const mainCharacter = 'mario';
// console.log(mainCharacter);
// const inputElements = document.querySelectorAll('input');
// inputElements.forEach(input => {
//   console.log(input);
// });
//2 
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// character = 'luigi';
// age=40;
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// }
// console.log(circ('hello'));
//3
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// names.push(3);
// names[0] = 3;
// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[1] = 'shaun'
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0]=3;
// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   skills: []
// };
//4
// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age='luigi';
// isLoggedIn = 25;
// // arrays
// let ninjas2: string[];
// ninjas2 = ['yoshi', 'mario'];
// ninjas2.push('sahaun')
// console.log(ninjas2)
// // union types
// let mixed2: (string|number|boolean)[] = [];
// mixed2.push('hello');
// mixed2.push(20);
// mixed2.push(false);
// let uid: string|number;
// uid = '123';
// uid = 123;
// uid = false;
// // objects
// let ninjaOne : object;
// ninjaOne = { name: 'yoshi', age: 30};
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }
// ninjaTwo = {name: 'ken', age: 20, beltColour: 'black'};
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello'
// console.log(age);
// age = {name: 'luigi'};
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
let ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
let greet;
greet = () => {
    console.log('hello, world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
var SizeIndex;
(function (SizeIndex) {
    SizeIndex[SizeIndex["Small"] = 0] = "Small";
    SizeIndex[SizeIndex["Medium"] = 1] = "Medium";
    SizeIndex[SizeIndex["Large"] = 2] = "Large";
})(SizeIndex || (SizeIndex = {}));
const tshirt1 = ['blue', SizeIndex.Small];
console.log(tshirt1); // ['blue', 0];
function showLog() {
    console.log('Very important message!');
}
function throwError() {
    throw new Error('Err!');
}
throwError();
showLog(); // czy ten kod zostanie uruchomiony?!
