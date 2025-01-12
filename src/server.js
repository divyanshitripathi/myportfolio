const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ambudivya1993@gmail.com",
    pass: "nnpy ffty uodf wiof",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying transport:", error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: "ambudivya1993@gmail.com",
    to: email,
    bcc: "it.divyanshi@gmail.com",
    subject: "Thanks For Reaching Out To Divyanshi's - Portfolio",
    html: `  <html>
<head>
   
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f1e7;
        }
        .email-container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 25px;
            font-weight: bold;
            color: #000000;
        }

        .logo span {
            display: inline-block;
            color: #ff7e84;
            font-size: 25px;
            transform: rotate(10deg);
        }

        .heading {
            font-size: 20px;
            color: #000000;
            margin: 20px 0;
        }

        .divider {
            width: 600px;
            height: 2px;
            background-color: #000000;
            margin: 20px auto;
        }

        .message {
            font-size: 14px;
            color: #333333;
            margin-bottom: 30px;
            line-height: 1.5;
          text-align:left;
        }
.email-content{
        color:"red";
      }

      .mailBody{
        text-align:left;
        font-size:14px;
        color: #333333;
        
      }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo">
            Divya<span>/</span>
        </div>
        <div class="heading">I've received your mail.</div>
        <div class="divider"></div>
      <div class="mailBody">
      <p>Hello ${name},</p>
        <br></br>
        <p>Here is a summary of the information you submitted:</p>
          <div class="email-content">
            <p><span>Name:</span> ${name}</p>
            <p><span>Email:</span> ${email}</p>
            <p><span>Phone:</span> ${phone}</p>
            <p><span>Message:</span> ${message}</p>
          </div>
        </div>
  <br></br>
        <div class="message">
            Thanks for reaching out to me with my portfolio.
            I’ll get back to you within 7 days of the mail.
          Thank You!
          <p>Best regards,</p>
          <p>Divyanshi T.</p>
        </div>
         
    </div>
</body>
</html>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ error: "Failed to send email" });
    } else {
      res.status(200).json({ message: "Message Sent" });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running on Port 5000"));
