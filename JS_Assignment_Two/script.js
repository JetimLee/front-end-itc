const myInput = document.getElementById("myInput");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("inputContainer");

let inputValue = myInput.value;

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

// const calculateFibonnaci = (n) => {
//   const arr = [1];
//   let current = 1;
//   let previous = 0;
//   if (n === 1) {
//     console.log(1);
//     appendFibonnaci(1);
//     return 1;
//   } else if (n === 0) {
//     console.log(0);
//     appendFibonnaci(0);
//     return 0;
//   } else {
//     while (n > 0) {
//       current += previous;
//       previous = current - previous;
//       arr.push(current);
//       n -= 1;
//     }

//     let fibonnaci = arr.at(-1);
//     appendFibonnaci(fibonnaci);
//     return fibonnaci;
//   }
// };

const getFibonnaci = async (value) => {
  console.log(`getFibonnaci called, value is ${value} `);
  if (value === "") {
    console.log("nothing here");
    return;
  }
  let detectCharacters = /\D/g;
  if (detectCharacters.test(value) === true) {
    alert("Please do not input non-numerical charcters");
    return;
  } else {
    try {
      const response = await fetch(`http://localhost:5050/fibonacci/${value}`, {
        method: "get",
        mode: "cors",
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      appendFibonnaci(data.result);
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
  console.log("clicked");
  getFibonnaci(inputValue);
  return false;
});
