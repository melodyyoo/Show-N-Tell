const express = require("express");
const router = express.Router();

const { Review, Show, ReviewLike, User, Comment } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

//create a comment for a review
router.post('/', requireAuth, async(req,res)=>{
    const {body, reviewId, userId} = req.body;
    const user = await User.findByPk(userId);

    const error = {message: "Bad Request", errors:{}};
    if(body.length > 200)error.errors.body = "Comment must be 200 characters or less"

    if(Object.keys(error.errors).length){
        res.status(400);
        res.json(error)
    }

    const newComment = await Comment.create({
        body,
        reviewId,
        userId
    });

    res.status(201).json({...newComment.toJSON(), User: {username: `${user.username}`}})
})


//edit a comment for a review
router.put('/:commentId', requireAuth, async(req,res)=>{
    const comment = await Comment.findByPk(req.params.commentId);

    if(!comment){
        return res.status(404).json({message:"Comment couldn't be found."})
    }
    if(comment.dataValues.userId !== req.user.id){
        return res.status(403).json({message:"Forbidden."})
    }

    const {body, userId, reviewId} = req.body;
    const user = await User.findByPk(userId)

    const error = {message: "Bad Request", errors:{}};
    if(body.length > 200)error.errors.body = "Comment must be 200 characters or less.";

    if(Object.keys(error.errors).length){
        res.status(400);
        res.json(error)
    };

    comment.set({
        body,
        reviewId,
        userId
    });
    await comment.save();
    res.json({...comment.toJSON(), User: {username: `${user.username}`}})
})

//delete a comment
router.delete('/:commentId', requireAuth, async(req, res)=>{
    const comment = await Comment.findByPk(req.params.commentId);

    if(!comment){
        return res.status(404).json({message: "Comment couldn't be found."})
    }

    if(comment.dataValues.userId !== req.user.id){
        return res.status(403).json({message: "Forbidden."})
    }

    comment.destroy();
    res.json({message: "Succesfully deleted"})
})


module.exports = router;
