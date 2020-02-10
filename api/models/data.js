const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    subject: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);