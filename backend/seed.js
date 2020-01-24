require("dotenv").config({ path: "./config/.env" });
const colors = require("colors");
const fs = require("fs");
const Tweet = require("./models/Tweet");

const { connectDatabase } = require("./database");

connectDatabase();

const tweets = JSON.parse(
  fs.readFileSync(`${__dirname}/database/_data/tweets.json`, "utf-8")
);


const seed = async () => {
  try {
    await Tweet.create(tweets);
    console.log(`Data imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error.message.red.inverse);
    process.exit();
  }
};

const deleteAllData = async () => {
  try {
    await Tweet.deleteMany();
    console.log(`Data destroyed...`.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error.message.red.inverse);
    process.exit();
  }
};

if (process.argv[2] === "-s") seed();
if (process.argv[2] === "-d") deleteAllData();
