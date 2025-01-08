"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["M\u0119\u017Cczyzna"] = 0] = "M\u0119\u017Cczyzna";
    Gender[Gender["Kobieta"] = 1] = "Kobieta";
    Gender[Gender["Inne"] = 2] = "Inne";
})(Gender || (Gender = {}));
let user = [
    "Agnieszka",
    "Dragańczyk",
    36,
    Gender.Kobieta
];
// Function with Proper Type Annotation
function printUserInfo(user) {
    const [name, surname, age, gender] = user;
    return `${name} ${surname} - ${Gender[gender]}, lat ${age}`;
}
// Output the user information
console.log(printUserInfo(user));
