const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
