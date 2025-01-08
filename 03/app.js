"use strict";
let firstName = "Agnieszka";
let age = 36;
let isStudent = true;
let empty = null;
let notDefined = undefined;
function getBasicTypes() {
    return {
        firstName,
        age,
        isStudent,
        empty,
        notDefined,
    };
}
console.log(getBasicTypes());
