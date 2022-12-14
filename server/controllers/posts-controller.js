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
    try {
        const foundPost = await Post.findById(req.params.id);
        await foundPost.populate("comments");
        res.status(200).json(foundPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a post by sports type
router.get("/sports/:sport", async (req, res) => {
    try {
        const foundPosts = await Post.find({sport: req.params.sport});
        res.status(200).json(foundPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST a new post
router.post("/", async (req, res) => {
    try {
        const createdPost = await Post.create(req.body);
        console.log("Created Post:", createdPost);
        res.status(200).end();
    } catch (err) {
        if (err.name === "ValidationError") {
            let errorMessage = "Validation Error(s): "
            for (let field in err.errors) {
                errorMessage += `${field} was ${err.errors[field].value}. `
                errorMessage += `${err.errors[field].message} `
            }
            console.log(errorMessage);
            res.status(500).json(errorMessage)
        }
    }
});

//PUT a post
router.put("/:id", async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body,
            {runValidators: true}    
        );
        console.log("Updated post at ID", req.params.id);
        res.status(200).end();
    } catch (err) {
        if (err.name === "ValidationError") {
            let errorMessage = "Validation Error(s): "
            for (let field in err.errors) {
                errorMessage += `${field} was ${err.errors[field].value}. `
                errorMessage += `${err.errors[field].message} `
            }
            console.log(errorMessage);
            res.status(500).json(errorMessage)
        }
    }
})

//DELETE a post and all related comments
router.delete("/:id", async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        await Comment.deleteMany({post: req.params.id});
        console.log(`Deleted post and all related comments`);
        res.status(200).end();
    } catch (err) {
        console.log(err);
        res.status(500)
    }
})


//export
module.exports = router;