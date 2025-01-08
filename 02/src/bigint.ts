// bigint.ts

let realyBig: bigint = BigInt(Number.MAX_SAFE_INTEGER + 1); // 2^53
let otherBig: bigint = 2n; // 2
let smallInt: number = 10;

const doubleBig = realyBig + realyBig;
// const middleBig = realyBig * smallInt; // błąd