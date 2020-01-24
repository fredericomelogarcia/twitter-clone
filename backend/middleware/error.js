const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (error, req, res, next) => {
  let errorData = { ...error };
  errorData.message = error.message;
  // Log to console for dev
  console.log(error);

  // mongoose bad ObjectID
  if (error.name === "CastError") {
    const message = `Resource not found with id of ${error.value}`;
    errorData = new ErrorResponse(message, 404);
  }
  // mongoose duplicate key
  if (error.code === 11000) {
    const message = `Duplicated field value entered`;
    errorData = new ErrorResponse(message, 400);
  }
  // mongoose validation error
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map(val => val.message);
    errorData = new ErrorResponse(message, 400);
  }
  res.status(errorData.statusCode || 500).json({
    success: false,
    error: errorData.message || "Server error!"
  });
};

module.exports = errorHandler;
