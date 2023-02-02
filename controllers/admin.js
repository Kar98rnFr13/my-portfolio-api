const Admin = require("../models/admin");
const { StatusCodes } = require("http-status-codes");
const createAdmin = async (req, res) => {
  const { name } = req.body;
  if (name) {
    const admin = await Admin.create(req.body);
    if (admin) {
      const token = admin.createJWT();
      return res.status(200).json({ name: admin.name, token });
    }
  }

  return res.status(200).json({ msg: "an error occured" });
};

const getAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (email) {
    const admin = await Admin.findOne({ email });
    const isPasswordCorrect = await admin.comparePassword(password);
    if (isPasswordCorrect) {
      const token = admin.createJWT();
      return res
        .status(StatusCodes.OK)
        .json({ name: admin.name, token, msg: "success" });
    }
  }
  // could not find admin
  else {
    return res.status(StatusCodes.OK).json({ msg: "access denied" });
  }
};
module.exports = { createAdmin, getAdmin };
