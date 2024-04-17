//This is the server file that should be deployed on your server to receive the webhook data from the form.
//additional config from your dev may be needed to send the data to the Scidentify backend for processing and storage.

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 80;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint to handle incoming POST requests
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body); // Log the received data

  // Destructuring the necessary fields from the payload
  const { name, siteId, data, submittedAt, id, formId } = req.body.payload;

  // Further destructuring to extract form fields
  const {
    "First Name 2": firstName,
    "Last Name 2": lastName,
    "Job Title 2": jobTitle,
    "Phone Number 2": phoneNumber,
    "Email 2": email,
    "Country Region 2": countryRegion,
    "Company 2": company,
    "Company Size 2": companySize,
    "Expertise 2": expertise,
  } = data;

  // Construct a structured object for processing
  const structuredData = {
    formName: name,
    siteId,
    formData: {
      firstName,
      lastName,
      jobTitle,
      phoneNumber,
      email,
      countryRegion,
      company,
      companySize,
      expertise,
    },
    submittedAt,
    submissionId: id,
    formId,
  };

  console.log("Structured data:", structuredData); // Log the structured data

  // You can now process structuredData as needed for Scidentify backend

  // Responding to the webhook source to acknowledge receipt
  res.status(200).send("Webhook data received and processed");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
