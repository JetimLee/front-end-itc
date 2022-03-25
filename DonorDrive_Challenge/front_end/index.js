const userName = document.getElementById("user_name");
const userEmail = document.getElementById("user_email");
const submissionForm = document.getElementById("submission_form");

let inputtedName = "";
let inputtedEmail = "";
const formDataURL = "http://localhost:4000/formData";

userEmail.addEventListener("keyup", (e) => {
  inputtedEmail = e.target.value;
});
userName.addEventListener("keyup", (e) => {
  inputtedName = e.target.value;
});

const handleSubmission = async (url) => {
  const user = { inputtedEmail, inputtedName };
  //need logic here for validating the form and appending relevant classes to the input box when incorrect input is given
  //also need to disable the submit button till the form is filled?
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
  } catch (error) {
    console.log("error when submitting data", error);
  }
};

submissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmission(formDataURL);
});
