const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

const password = process.env.EMAIL_PASSWORD;
const account = process.env.EMAIL_ACCOUNT;

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/formData", (req, resp) => {
  console.log("form data got hit!");
  const data = req.body;
  console.log("data in form data", data);
  const { inputtedEmail, inputtedName } = data;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: account,
      pass: password,
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    //need to change this to the email i was using
    from: account,
    to: inputtedEmail,
    subject: `Confirmation of Form Submission`,
    html: `<h3>Hi ${inputtedName},</h3>
    
      <p>Thanks for this test, it was fun. </p>`,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      resp.sendStatus(500).send("Error occurred while sending the mail");
    } else {
      resp.sendStatus(200).send("OK");
    }
  });
  smtpTransport.close();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
