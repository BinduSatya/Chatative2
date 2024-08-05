const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURI, {});
    console.log(`Mongo Conneceted ${conn.connection.host}`);
  } catch (e) {
    console.log("ERROR");
    console.log(e.message);
    process.exit();
  }
};

module.exports = connectDB;
