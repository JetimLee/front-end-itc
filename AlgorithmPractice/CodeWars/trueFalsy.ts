var multiply = function (num1: string, num2: string) {
  const num1AsNumber = parseFloat(num1);
  console.log(num1AsNumber, "num 1 as number");
  const num2AsNumber = parseFloat(num2);
  console.log(num2AsNumber, "number 2 as number");
  const product = BigInt(num1AsNumber * num2AsNumber);
  console.log(product);
  return product.toString();
};
