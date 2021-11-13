console.log("Time to get started...");
function add(n1, n2, showResult) {
    if (showResult) {
        console.log("yay!");
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 2;
var number2 = 7;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
