const mongoose = require("mongoose")


const commentsSchema = new mongoose.Schema({
    userName: {type: String},

    message: {
    type: String,
    required: true},

    commentedAt: {
    type:Date,
    default: Date.now()},
})

const blogPostSchema = new mongoose.Schema({
    title: {
    type: String,
    unique: true,
    min: 5},
    

    content: { 
    type: String,
    required: true,
    min: 50},

    author:{type: String},

    tags: [String],

    category: {
    type: String,
    default:"General"},

    likes:[String],

    createdAt: {
    type:Date,
    default: Date.now()},

    updatedAt: {type: Date},

    comments: commentsSchema,


})


module.exports = mongoose.model("blogPost", blogPostSchema)




