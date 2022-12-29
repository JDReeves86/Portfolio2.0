const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMessage(input) {
  if (input == undefined || null) return;
  const { name, email, message } = input;
  // console.log('message sent!', input)
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: process.env.MY_EMAIL, // list of receivers
    subject: "Portfolio message", // Subject line
    text: `Hello, my name is ${name}, \n ${message} \n I can be contacted at ${email}`, // plain text body
    html: `Hello, my name is ${name}, \n ${message} \n I can be contacted at ${email}`, // html body
  });
  const returnMessage = {
    message: "Message sent: ",
    info: info.messageId
  }

  return {
    statusCode: 200,
    body: JSON.stringify(returnMessage)
  };
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

sendMessage().catch(console.error);

module.exports = sendMessage;
