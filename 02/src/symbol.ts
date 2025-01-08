// symbol.ts

const sym1:symbol = Symbol('label'); // etykieta jest opcjonalna
const sym2:symbol = Symbol('label'); // to nadal inny symbol
const obj:object = {
    login: 'mateusz',
    pass: '12345',
    [sym1]: true,
    [sym2]: false,
}

if(sym1 !== sym2) { // symbole są rózne
    console.log(Object.keys(obj)); // ['login', 'pass']
}