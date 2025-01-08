// tuple.js

let distance: [number, string] = [30, 'km'];
console.log(distance[0], distance[1]);
// distance[3] = 'ddd'; // błąd
// distance[0] = 'm'; // błąd

let size: [value: number, unit: string] = [10, 'MB'];
console.log(size[0]); // 10
size[0] = 20;
console.log(size[0]); // 20

// let feature: [number, string] = [];