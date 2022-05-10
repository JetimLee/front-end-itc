import { cleanNumbers } from "./util/numbers";

export function add(numbers) {
  if (!numbers) {
    throw new Error("something went wrong");
  }
  let sum = 0;
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberValues) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberValues);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
