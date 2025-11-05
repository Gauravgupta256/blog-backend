import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    
    post : {
        type : Schema.Types.ObjectId,
        ref : 'Post',
        required : true
    },

    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

}, {timestamps : true});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;