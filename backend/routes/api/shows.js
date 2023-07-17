const express = require("express");
const router = express.Router();

const { Show, Review, ReviewLike, ShowLike, User } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

//get all shows
router.get("/", async (req, res) => {
  const shows = await Show.findAll({
    include: [{ model: Review }, { model: ShowLike }],
  });

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    show.dataValues.showLikes = show.ShowLikes.length;
    show.dataValues.reviewsCount = show.Reviews.length;
  }

  res.status(200).json(shows);
});

//get a single show + reviews for the show
router.get("/:showId", async (req, res) => {
  const show = await Show.findByPk(req.params.showId, {
    include: { model: User, attributes: ["username", "id"] },
  });
  const reviews = await Review.findAll({
    where: {
      showId: req.params.showId,
    },
    include: ReviewLike,
  });

  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    review.dataValues.likes = review.ReviewLikes.length;

    sum += review.rating;
  }
  const showRating = parseFloat(sum / reviews.length).toFixed(1);
  show.dataValues.showRating = showRating;
  res.status(200).json({ Show: show, Reviews: reviews });
});

//post a show
router.post("/", requireAuth, async (req, res) => {
  const { name, director, synopsis, startYear, endYear, genre, image, banner, userId} = req.body;

  const error = { message: "Bad Request", errors: {} };

  if (synopsis.length > 600) error.errors.synopsis = "Synopsis must be less than 600 characters.";
  if (endYear && (startYear > endYear)) error.errors.endYear = "Start year must come before the end year.";

  if (Object.keys(error.errors).length) {
    res.status(400);
    return res.json(error);
  }

  const newShow = await Show.create({
    name,
    director,
    synopsis,
    startYear,
    endYear,
    genre,
    image,
    banner,
    userId
  });

  res.status(201);
  res.json(newShow);
});

//edit a show
router.put("/:showId", requireAuth, async(req, res)=>{
  const show = await Show.findByPk(req.params.showId);

  if(!show){
    return res.status(404).json({
      message: "Show couldn't be found",
    });
  }

  if(show.dataValues.userId !== req.user.id){
    res.status(403);
    return res.json({ message: "Forbidden" });
  }

  const { name, director, synopsis, startYear, endYear, genre, image, banner, userId} = req.body;
  const error = { message: "Bad Request", errors: {} };

  if (synopsis.length > 600) error.errors.synopsis = "Synopsis must be less than 600 characters.";
  if (endYear && (startYear > endYear)) error.errors.endYear = "Start year must come before the end year.";

  if (Object.keys(error.errors).length) {
    res.status(400);
    return res.json(error);
  }
  show.set({
    name,
    director,
    synopsis,
    startYear,
    endYear,
    genre,
    image,
    banner,
    userId
  });
  await show.save();
  return res.json(show);
})




//delete a show
router.delete('/:showId', requireAuth, async(req,res)=>{
  const show = await Show.findByPk(req.params.showId);

  if(!show){
   return res.status(404).json({message:"Show couldn't be found."});
  }
  if(show.dataValues.userId !== req.user.id){
    return res.status(403).json({message:"Forbidden."});
  }

  await show.destroy();
  return res.json({message: "Successfully deleted."})
})

module.exports = router;
