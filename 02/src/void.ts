// void.ts

function fn1(): void {}
function fn2(): void {
    return;
}

function fn3(): void {
    return undefined;
}

let none: void = undefined;
function fn4(): void {
    return none;
}
