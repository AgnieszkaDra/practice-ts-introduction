"use strict";
let marks = [];
function addMark(mark) {
    if (mark > 6) {
        return;
    }
    marks.push(mark);
}
addMark(6);
addMark(2);
addMark(2);
addMark(4);
function getAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
}
function getMarkFrequency(array) {
    const maxMark = Math.max(...array);
    let frequencyArray = [];
    frequencyArray.length = maxMark + 1;
    frequencyArray.fill(0);
    array.forEach(element => {
        if (element <= maxMark) {
            frequencyArray[element]++;
        }
    });
    return frequencyArray;
}
console.log(getMarkFrequency(marks));
console.log(getAverage(marks));
