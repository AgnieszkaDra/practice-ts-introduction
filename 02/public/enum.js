"use strict";
// enum.ts
const tshirt1 = ['blue', 0 /* SizeIndex.Small */];
console.log(tshirt1); // ['blue', 0];
var SizeLabel;
(function (SizeLabel) {
    SizeLabel["Small"] = "s";
    SizeLabel["Medium"] = "m";
    SizeLabel["Large"] = "l";
})(SizeLabel || (SizeLabel = {}));
const tshirt2 = ['blue', SizeLabel.Small];
console.log(tshirt2); // ['blue', 's'];
var Unit;
(function (Unit) {
    Unit[Unit["B"] = 1] = "B";
    Unit[Unit["KB"] = 2] = "KB";
    Unit[Unit["MB"] = 3] = "MB";
})(Unit || (Unit = {}));
console.log(Unit.KB); // 2
//# sourceMappingURL=enum.js.map