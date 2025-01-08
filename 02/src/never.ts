// never.ts

function showLog() {
    console.log('Very important message!');
}

function throwError(): never {
    throw new Error('Err!');
}

throwError();
// showLog(); // czy ten kod zostanie uruchomiony?!