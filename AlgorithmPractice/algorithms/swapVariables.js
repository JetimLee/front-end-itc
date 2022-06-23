let a = 3;
let b = 5;

let temp = a;

a = b;
b = temp;
console.log(a, b);

//best way

let c = 5;
let d = 6;

[c, d] = [d, c];

console.log(c, d);
