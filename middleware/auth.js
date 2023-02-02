const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  const admin = jwt.verify(token, process.env.JWT_SECRET);

  const isAuthorized = await Admin.findOne({
    _id: admin.userId,
    role: admin.role,
  });

  if (isAuthorized) {
    next();
  } else {
    res.json({ msg: "something went wrong" });
  }
};

module.exports = authentication;
