"use strict";
// array.ts
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers.filter(num => num > 3));
// [4];
const technologies = ['js', 'python'];
technologies.push('react');
console.log(technologies.map(item => item.toUpperCase()));
// ['JS', 'PYTHON', 'REACT']
const list = []; // any - unikamy
list.push(1);
list.push('str'); // brak błędu
//# sourceMappingURL=array.js.map