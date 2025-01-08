// enum.ts

// PascalCase
const enum SizeIndex { Small, Medium, Large }

const tshirt1: [color: string, size: SizeIndex] = ['blue', SizeIndex.Small];
console.log(tshirt1); // ['blue', 0];

enum SizeLabel { Small = 's', Medium = 'm', Large = 'l'}
const tshirt2: [color: string, size: SizeLabel] = ['blue', SizeLabel.Small];
console.log(tshirt2); // ['blue', 's'];

enum Unit { B = 1, KB, MB }
console.log(Unit.KB); // 2