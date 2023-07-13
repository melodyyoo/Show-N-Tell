const express = require("express");
const router = express.Router();

const {Review, Show, ReviewLike} = require("../../db/models");
const {requireAuth} = require("../../utils/auth");

//get most popular reviews for home page
router.get('/popular', async(req,res) =>{
    const reviews = await Review.findAll({
        include: ReviewLike
    });

    let newArray = []
    for(let i = 0; i<reviews.length; i++){
        const review = reviews[i]
        review.dataValues.likes = review.ReviewLikes.length;

        newArray.push(review.toJSON())
    }
    const sorted = newArray.sort((a, b)=> b.likes - a.likes)
    const popularReviews = sorted.slice(0,2)
    res.json(popularReviews)
})

//get single review
router.get("/:reviewId", async(req,res)=>{
    const review = await Review.findAll({
        where: {
            id: req.params.reviewId
        },
        include: Show
    });

    res.json(review)
})

//create a review for a show
router.post("/:reviewId", requireAuth, async(req, res)=>{
    const {body, rating , showLike} = req.body;

    const review = await Review.findByPk(req.params.reviewId);

    if(!review){
        res.status(404);
        res.json({message: "Review couldn't be found"})
    }

    



})

module.exports = router;
