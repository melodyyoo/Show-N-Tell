const express = require("express");
const router = express.Router();

const { Review, Show, ReviewLike, User, Comment } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

//get most popular reviews for home page
router.get("/popular", async (req, res) => {
  const reviews = await Review.findAll({
    include: [
      { model: ReviewLike },
      { model: Show, attributes: ["name", "startYear", "endYear", "image"] },
      { model: User, attributes: ["username"] },
    ],
  });

  let newArray = [];
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    review.dataValues.likes = review?.ReviewLikes?.length;

    newArray.push(review.toJSON());
  }
  const sorted = newArray.sort((a, b) => b.likes - a.likes);
  const popularReviews = sorted.slice(0, 2);
  res.json(popularReviews);
});

//get single review
router.get("/:reviewId", async (req, res) => {
  const review = await Review.findByPk(req.params.reviewId, {
    include: [
      { model: Show, attributes: ["name", "startYear", "endYear", "image"] },
      { model: Comment },
      { model: ReviewLike },
      {model: User, attributes:["username"]}
    ],
  });

  res.json(review);
});

//create a review for a show
router.post("/", requireAuth, async (req, res) => {
  const { body, rating, showId, userId} = req.body;
  
  const error = { message: "Bad Request", errors: {} };

  if(body.length > 600)error.errors.body = "Review must be less than 600 characters."
  if (!rating || typeof rating !== "number" || rating < 1 || rating > 5) {
    error.errors.rating = "Rating must be an integer from 1 to 5";
  }

  if (Object.keys(error.errors).length) {
    res.status(400);
    res.json(error);
  }

  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();

  const newReview = await Review.create({
    userId,
    showId,
    body,
    rating,
    watchedDate: year + "-" + month + "-" + date
  });

  res.status(201).json(newReview)
});

module.exports = router;
