const express = require("express");
const router = express.Router();

const {Show, Review, ReviewLike, ShowLike} = require("../../db/models");
const {requireAuth} = require("../../utils/auth");

//get all shows
router.get("/", async (req, res) => {
    const shows = await Show.findAll({
        include:[
            {model: Review},
            {model:ShowLike}
        ]
    });

    for(let i = 0; i<shows.length; i++){
        const show = shows[i];

        show.dataValues.showLikes =show.ShowLikes.length;
        show.dataValues.reviewsCount = show.Reviews.length;
    }

    res.status(200).json(shows)
})

//get a single show + reviews for the show
router.get("/:showId", async(req, res)=> {
    const show = await Show.findByPk(req.params.showId);
    const reviews = await Review.findAll({
        where:{
            showId: req.params.showId
        },
        include: ReviewLike
    });

    let sum = 0
    for(let i =0; i<reviews.length; i++){
        const review = reviews[i];
        review.dataValues.likes = review.ReviewLikes.length;

        sum += review.rating;
    }
    const showRating = parseFloat(sum/reviews.length).toFixed(1)
    show.dataValues.showRating = showRating
    res.json({Show: show, Reviews: reviews})
})









module.exports = router;
