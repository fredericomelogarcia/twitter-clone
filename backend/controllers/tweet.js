const Tweet = require('../models/Tweet');
const asyncHandler = require('../middleware/async');

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
  res.status(200).json({ success: true, data });
});
/**
 * desc: Post a new tweet
 * method: POST
 * route: /api/tweets
 * access: Public
 */
exports.createTweet = asyncHandler(async (req, res, next) => {
  const data = await Tweet.create(req.body);
  res.status(200).json({ success: true, data });
});
/**
 * desc: Delete tweet by its id
 * method: DELETE
 * route: /api/tweets/:id
 * access: Public
 */
exports.deleteTweet = asyncHandler(async (req, res, next) => {
  const data = await Tweet.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: {} });
});