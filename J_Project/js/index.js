//declaring variables
console.log("working");
const searchButton = document.getElementById(`clickMe`);
const searchInput = document.getElementById(`inputField`);
const results = document.getElementById(`results`);

let inputValue = searchInput.value;

const appendFibonnaci = (value) => {
  console.log("appending");
  console.log(value);
  let elementExists = document.getElementById("fibonnaciContainer");
  const x = document.createElement("div");

  if (elementExists == null) {
    console.log("first of its kind");
    x.setAttribute("id", "fibonnaciContainer");
    x.innerHTML = `<p id='fibonnaci'>${value}</p>`;
    results.append(x);
  } else {
    document.getElementById("fibonnaci").textContent = value;
  }
};

//search function

//make the search term an int

// console.log(n)
//write a function that gets the y of x
function fibonacci(n) {
  // console.log("here is fibonacci");
  // console.log(n);
  if (n === 0) return 0;
  if (n === 1) return 1;

  let n1 = fibonacci(n - 2);
  let n2 = fibonacci(n - 1);
  let total = n1 + n2;

  appendFibonnaci(total);
  return n1 + n2;
}

const getFibonnaci = (value) => {
  if (value === "") {
    return;
  }
  let detectCharacters = /\D/g;
  if (detectCharacters.test(value) === true) {
    alert("Please do not input non-numerical charcters");
    return;
  } else if (value > 50) {
    alert("Please do not pick a number above 50");
  } else {
    let number = parseInt(value);
    fibonacci(number);
  }
};

searchInput.addEventListener("keyup", (e) => {
  inputValue = e.target.value;
});

searchButton.addEventListener(`click`, () => {
  console.log(inputValue);
  getFibonnaci(inputValue);
});

// function fib(n){
//     if (n < 3) return 1;

//     let prev= 1;
//     let curr= 1;
//     for (let i = 2; i < n; i++){
//         const next = prev + curr;
//         prev = curr;
//         curr = next;
//     }
//     return curr;
// }
// var i;
// var fib = []; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 10; i++) {
//   // Next fibonacci number = previous + one before previous
//   // Translated to JavaScript:
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }
