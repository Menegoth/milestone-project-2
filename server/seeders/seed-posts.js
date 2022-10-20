const db = require("../models");
const { default: mongoose } = require("mongoose");

const userId = "6350b4d3b63edb670262072a";

//seed posts
//run users first, replace userId with the id of a user
db.Post.create([{
    name: "Test Person",
    user: userId,
    sport: "soccer",
    post: "Test Content"    
},
{
    user: userId,
    sport: "baseball",
    post: "Test Content 2" 
},
{
    name: "Test Person 2",
    user: userId,
    sport: "baseball",
    post: "Test Content 3" 
}])
.then (() => {
    console.log("Successfuly seeded posts");
    mongoose.connection.close(); 
});