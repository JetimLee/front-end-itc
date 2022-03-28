const userName = document.getElementById("user_name");
const userEmail = document.getElementById("user_email");
const submissionForm = document.getElementById("submission_form");
const submissionButton = document.getElementById("submission_button");
const alertBox = document.getElementById("alert_box");
const errorList = document.getElementById("error_list");

let inputtedName = "";
let inputtedEmail = "";
const formDataURL = "http://localhost:2000/formData";

const checkButton = (input1, input2) => {
  console.log("checking button");
  console.log(input1, input2);
  console.log(input1.trim() | (input2.trim() === "") ? true : false);
  return input1.trim() | (input2.trim() === "") ? true : false;
};

userEmail.addEventListener("keyup", (e) => {
  inputtedEmail = e.target.value;
  if (!checkButton(inputtedName, inputtedEmail)) {
    submissionButton.classList.remove("disabled");
    submissionButton.disabled = false;
    return;
  }
  //this is here to re-add the disabled class in the event it has been removed
  submissionButton.classList.add("disabled");
  submissionButton.disabled = true;
});
userName.addEventListener("keyup", (e) => {
  inputtedName = e.target.value;
  if (!checkButton(inputtedName, inputtedEmail)) {
    submissionButton.classList.remove("disabled-button");
    submissionButton.disabled = false;
    return;
  }
  //this is here to re-add the disabled class in the event it has been removed
  submissionButton.classList.add("disabled");
  submissionButton.disabled = true;
});

const handleSubmission = async (url) => {
  //takes care of changing input colors based on their value, useful for form validation on client side
  userEmail.classList.remove("incorrect-input");
  userName.classList.remove("incorrect-input");
  if (inputtedEmail.trim() === "") {
    userEmail.classList.add("incorrect-input");
    return;
  }
  if (inputtedName.trim() === "") {
    userName.classList.add("incorrect-input");
    return;
  }

  const user = { inputtedEmail, inputtedName };
  //using try-catch here in case there's an issue with communicating with the server
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    console.log(response);
    userName.value = "";
    userEmail.value = "";
    submissionButton.innerText = "Submitted";
  } catch (error) {
    console.log("error when submitting data", error);
  }
};

submissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmission(formDataURL);
});
