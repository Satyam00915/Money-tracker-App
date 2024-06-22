const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI; // Use environment variable

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transactionSchema = mongoose.Schema({
  money: Number,
  description: String,
  date: String,
});

const Tncs = mongoose.model("Tncs", transactionSchema);

module.exports = {
  Tncs,
};
