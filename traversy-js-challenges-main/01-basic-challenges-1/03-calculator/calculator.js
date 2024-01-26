function calculator(num1, num2, operator) {
  let validOperators = ["/", "+", "*", "-"];
  if (!validOperators.includes(operator)) {
    throw new Error("Invalid operator was passed!");
  }
  if (operator === "/") {
    return num1 / num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
}

module.exports = calculator;
