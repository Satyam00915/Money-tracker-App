const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
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
