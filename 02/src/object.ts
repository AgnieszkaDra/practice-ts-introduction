// object.ts

const user: object = {login: 'mateusz', pass: '12345'}
const friends: object = ['Irek', 'Magda', 'Gosia'];
// friends.push(2);
(friends as number[]).push(2);

const level: object = new Number(2.22);
// level.toFixed(2); 
