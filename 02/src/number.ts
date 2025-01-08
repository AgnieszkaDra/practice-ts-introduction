// number.ts

let int1: number = 100000;
let int2: number = 100_000; // numeric separators
let hex: number = 0xff; // 255
let binary: number = 0b1001; // 9
let isEqual: boolean;

if(int1 === int2) {
    isEqual = true;
} else {
    isEqual = false;
}

console.log(isEqual); // true