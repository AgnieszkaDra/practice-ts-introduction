"use strict";
// symbol.ts
const sym1 = Symbol('label'); // etykieta jest opcjonalna
const sym2 = Symbol('label'); // to nadal inny symbol
const obj = {
    login: 'mateusz',
    pass: '12345',
    [sym1]: true,
    [sym2]: false,
};
if (sym1 !== sym2) { // symbole są rózne
    console.log(Object.keys(obj)); // ['login', 'pass']
}
//# sourceMappingURL=symbol.js.map