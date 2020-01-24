const express = require('express');
const router = express.Router();

const { getTweet, getTweets, createTweet, deleteTweet } = require('../controllers/tweet');

router
  .route('/')
  .get(getTweets)
  .post(createTweet);
router
  .route('/:id')
  .get(getTweet)
  .delete(deleteTweet);

module.exports = router;