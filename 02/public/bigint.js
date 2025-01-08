"use strict";
// bigint.ts
let realyBig = BigInt(Number.MAX_SAFE_INTEGER + 1); // 2^53
let otherBig = 2n; // 2
let smallInt = 10;
const doubleBig = realyBig + realyBig;
// const middleBig = realyBig * smallInt; // błąd
//# sourceMappingURL=bigint.js.map