const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("> MongoDB connected successfully".yellow.bold);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};