//dependencies and router setup
const router = require("express").Router();
const db = require("../models");
const { Post, Comment } = db;


//GET all posts
router.get("/", async (req, res) => {
    try {
        const foundPosts = await Post.find();
        res.status(200).json(foundPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a post by id and all related comments
router.get("/:id", async (req, res) => {
    try{
        const foundPost = await Post.findById(req.params.id);
        await foundPost.populate("comments");
        res.status(200).json(foundPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST a new post
router.post("/", async (req, res) => {
    try {
        const createdPost = await Post.create(req.body);
        console.log("Created Post:", createdPost);
        res.status(200).json(createdPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//PUT a post

//DELETE a post

//export
module.exports = router;