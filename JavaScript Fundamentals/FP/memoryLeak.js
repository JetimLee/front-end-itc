//creates a memory leak and will crash the browser
let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}
