require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");

// database
const { connectDatabase } = require("./database");
connectDatabase();

// middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json()); // body parser

// routes
app.use("/api/tweets", require("./routes/tweet"));
app.use(errorHandler); // error handling middleware

// express server
const server = app.listen(PORT, () =>
  console.log(`> Ready on http://localhost:${PORT}`.yellow.bold)
);

// handle unhandled promise rejections

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red.bold);
  // shutdown server app failure
  server.close(() => process.exit(1));
});
