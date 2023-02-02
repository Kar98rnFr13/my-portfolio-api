const nodemailer = require("nodemailer");

const mailer = (mail, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: mail,
    to: process.env.MAIL,
    subject: subject,
    text: text,
    replyTo: mail,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`${info.response}`);
    }
  });
};

module.exports = mailer;
