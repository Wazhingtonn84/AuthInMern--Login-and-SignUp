const mongoose = require("mongoose");

module.exports = () => {
  const connect = async () => {
    try {
      await mongoose.connect(process.env.DBUrl);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  };

  connect();
};
