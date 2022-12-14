const db = require("../models");
const { default: mongoose } = require("mongoose");

const userId = "63574a21cf81520cb107b190";

//seed posts
//run users first, replace userId with the id of a user
db.Post.create([{
    name: "Test Person",
    title: "Test Title",
    user: userId,
    sport: "soccer",
    post: "Test Content"    
},
{
    user: userId,
    title: "Test Title",
    sport: "baseball",
    post: "Test Content 2" 
},
{
    name: "Test Person 2",
    title: "Test Title",
    user: userId,
    sport: "baseball",
    post: "Test Content 3" 
}])
.then (() => {
    console.log("Successfuly seeded posts");
    mongoose.connection.close(); 
});