const express = require("express");
const router = express.Router();
const { createAdmin, getAdmin } = require("../controllers/admin");

router.route("/").get(getAdmin);
router.route("/create").post(createAdmin);

module.exports = router;
