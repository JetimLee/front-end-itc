//MongoDB was chosen for the database since all that is being saved is user emails and names that are incoming from a form. There isn't really anything that can relate to the received data and as such a relational database isn't more advtangeous than a non-SQL one.

const express = require("express");
const cors = require("cors");
const app = express();
//bringing in mongoose for its schema tools
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const DB_ACCOUNT = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbConnect = `mongodb+srv://${DB_ACCOUNT}:${DB_PASSWORD}@cluster0.e9mni.mongodb.net/forms-received`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(
  dbConnect,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//schema is put here due to small size of app, if there were many schemas I would put them in a models folder.
const userDataSchema = { name: String, email: String };
const userData = mongoose.model("userData", userDataSchema);

//Could put all routes in a routes folder if the app was much larger.

app.post("/formData", (req, resp) => {
  console.log("form data got hit!");
  const data = req.body;
  console.log("data in form data", data);
  //deconstructing for ease of access
  const { inputtedEmail, inputtedName } = data;
  if (typeof inputtedEmail !== "string" || typeof inputtedName !== "string") {
    resp
      .status(400)
      .send(
        "An incorrect data type was received on the server side from client side."
      );
  }

  //here userData schema is used on the received data from the client side
  let newUserData = new userData({ name: inputtedName, email: inputtedEmail });
  try {
    //newUserData is wrapped in a try/catch block in case there are issues with saving the user's information.
    newUserData.save();
    resp.status(200).send("ok");
  } catch (error) {
    //500 error is given to indicate a server-side issue, client side could use this to create the appropriate client-side error box so user wasn't left in the dark.
    console.log(error);
    resp
      .status(500)
      .send("an error occurred on the server side when saving user data");
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
