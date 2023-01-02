exports.handler = async function (event, context, callback) {
  console.log(event.body);
  const body = JSON.parse(event.body);
  const { name, email, message } = body;
  let transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  try {
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
      info: info.messageId,
    };

    console.log(info)
    callback(null, { statusCode: 200, body: JSON.stringify(returnMessage)})
  } catch (error) {
    callback(error);
  }
};
