const myInput = document.getElementById("myInput");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("inputContainer");
const loader = document.getElementById("loader");
const error = document.getElementById("error");
const errorMessage = document.getElementById("serverErrorText");
const errorMessageContainer = document.getElementById("serverErrorContainer");
const myList = document.getElementById("myList");
const checkBox = document.getElementById("saveCalculation");

let inputValue = myInput.value;
let checkBoxChecked = false;

const appendFibonnaci = (value) => {
  let elementExists = document.getElementById("fibonnaciContainer");
  const newContainer = document.createElement("div");

  if (elementExists == null) {
    console.log("element is being created for the first time");
    newContainer.setAttribute("id", "fibonnaciContainer");
    newContainer.innerHTML = `<p id='fibonnaci'>${value}</p>`;
    container.append(newContainer);
  } else {
    document.getElementById("fibonnaci").textContent = value;
  }
};

const calculateFibonnaci = (n) => {
  const arr = [1];
  let current = 1;
  let previous = 0;
  if (n === 1) {
    console.log(1);
    appendFibonnaci(1);
    return 1;
  } else if (n === 0) {
    console.log(0);
    appendFibonnaci(0);
    return 0;
  } else {
    while (n > 0) {
      current += previous;
      previous = current - previous;
      arr.push(current);
      n -= 1;
    }

    let fibonnaci = arr.at(-2);
    console.log(arr);
    appendFibonnaci(fibonnaci);
    return fibonnaci;
  }
};

const getFibonnaci = async (value) => {
  myInput.classList.remove("error");
  error.classList.add("hidden");
  errorMessageContainer.classList.add("hidden");
  if (value > 50) {
    myInput.classList.add("error");
    error.classList.remove("hidden");
    return;
  }
  loader.classList.remove("hidden");
  if (document.getElementById("fibonnaciContainer")) {
    document.getElementById("fibonnaciContainer").classList.add("hidden");
  }
  console.log(`getFibonnaci called, value is ${value} `);
  if (value === "") {
    console.log("nothing here");
    loader.classList.add("hidden");

    return;
  }
  let detectCharacters = /\D/g;
  if (detectCharacters.test(value) === true) {
    alert("Please do not input non-numerical charcters");
    return;
  } else {
    try {
      loader.classList.remove("hidden");

      const response = await fetch(`http://localhost:5050/fibonacci/${value}`, {
        method: "get",
        mode: "cors",
      });
      console.log(response);
      const data = await response.json();
      if (response.status === 400) {
        console.log(data.message);
        loader.classList.add("hidden");
        errorMessageContainer.classList.remove("hidden");
        errorMessage.textContent = data.message;
        return;
      }
      console.log(data);
      appendFibonnaci(data.result);
      loader.classList.add("hidden");
      if (document.getElementById("fibonnaciContainer")) {
        document
          .getElementById("fibonnaciContainer")
          .classList.remove("hidden");
      }
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

myInput.addEventListener("keyup", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkBoxChecked) {
    getFibonnaci(inputValue);
  } else {
    calculateFibonnaci(inputValue);
  }
});

const getDate = (value) => {
  let date = new Date(value);
  console.log(date);
  return date;
};

checkBox.addEventListener("click", () => {
  checkBoxChecked = checkBox.checked;
  console.log(checkBoxChecked);
});

window.addEventListener("load", async () => {
  const response = await fetch("http://localhost:5050/getFibonacciResults");
  const data = await response.json();
  const { results } = data;
  console.log(results);
  results.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `<p> The fibonnaci of <strong>${
      entry.number
    }</strong> is <strong>${entry.result}</strong>. Calculated at ${getDate(
      entry.createdDate
    )}</p><hr>`;
    myList.append(li);
  });
  console.log(data);
});
