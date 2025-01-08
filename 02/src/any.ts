// any.ts

let everything: any;

let number = 20;
let str = 'devmentor.pl';
let arr: number[] = [];

everything = true;

number = everything;
console.log(number); // true

str = everything;
console.log(number); // true

arr = everything;
console.log(arr); // true

console.log(everything.works); // undefined
/*
function fn(param1) { // any
    return param1;
}
*/