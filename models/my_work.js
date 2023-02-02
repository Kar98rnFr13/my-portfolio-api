const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide name"],
      maxlength: 50,
    },
    image: {
      type: String,
      required: [true, "please provide image url"],
      maxlength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Work", WorkSchema);
