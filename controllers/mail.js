const nodemailer = require("nodemailer");
const mailer = require("../mailer/mailer");
const sendMail = async (req, res) => {
  const { emailAddress, subject, text } = req.body;
  if (!emailAddress || !subject || !text) {
    return res.json({ msg: "please provide infomation" });
  } else {
    mailer(emailAddress, subject, text);
    return res.status(200).json({ msg: "success" });
  }
};

module.exports = sendMail;
