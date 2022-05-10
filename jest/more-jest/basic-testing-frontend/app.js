import { extractEnteredNumbers } from "./src/parser.js";
import { generateResultText } from "./output.js";
import { outputResult } from "./output.js";

import { calculateResult } from "./src/math.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumbers(form);
  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
