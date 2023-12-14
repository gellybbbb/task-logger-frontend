const mongoose = require("mongoose");

const loggerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  todo: { type: String, required: true },
  comments: { type: String, required: true },
});
const LoggerModel = mongoose.model("Logger", loggerSchema);

module.exports = LoggerModel;
