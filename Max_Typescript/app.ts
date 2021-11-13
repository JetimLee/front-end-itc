console.log("Time to get started...");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log("yay!");
    //store them separately when adding with a string, otherwise JavaScript will convert everything to a string
    let result = n1 + n2;
    //result stays a number
    console.log(phrase + result);
    //everything here is a string
  } else {
    return n1 + n2;
  }
}

let number1 = 2;
let number2 = 7;
const printResult = true;
const saySomething = "my phrase ";
let result = add(number1, number2, printResult, saySomething);
// console.log(result);
