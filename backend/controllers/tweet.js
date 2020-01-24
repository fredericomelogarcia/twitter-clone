const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Tweet = require('../models/Tweet');
/**
 * desc: Get all tweets
 * method: GET
 * route: /api/tweets
 * access: Public
 */

exports.getTweets = asyncHandler(async (req, res, next) => {
  const data = await Tweet.find();
  res.status(200).json({ success: true, count: data.length, data });
});
/**
 * desc: Get a tweet by its id
 * method: GET
 * route: /api/tweets/:id
 * access: Public
 */
exports.getTweet = asyncHandler(async (req, res, next) => {
  const data = await Tweet.findById(req.params.id);
  if (!data) {
    return next(
      new ErrorResponse(`Tweet not found.`, 404)
    );
  }
  res.status(200).json({ success: true, data });
});
/**
 * desc: Post a new tweet
 * method: POST
 * route: /api/tweets
 * access: Private
 */
exports.createTweet = asyncHandler(async (req, res, next) => {
  const data = await Tweet.create(req.body);
  res.status(200).json({ success: true, data });
});
/**
 * desc: Delete tweet by its id
 * method: DELETE
 * route: /api/tweets/:id
 * access: Private
 */
exports.deleteTweet = asyncHandler(async (req, res, next) => {
  const data = await Tweet.findByIdAndDelete(req.params.id);
  if (!data) {
    return next(
      new ErrorResponse(`Tweet not found.`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});