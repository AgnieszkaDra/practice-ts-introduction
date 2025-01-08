// string.ts

const userName: string = 'devmentor';
const domainName: string = `${userName}.pl`;
let port: string = 'https';
let url = port + '://' + domainName + '/rozmowa';

console.log(url); // https://devmentor.pl/rozmowa
