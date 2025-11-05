import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        index : true
    },

    content : {
        type : String,
        required : true
    },

    author : {
        type : Schema.Types.ObjectId, ref : 'User',
        required : true
    },

    thumbnail : {
        type : String
    },

    tags : [String],

    likes : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
}, {timestamps : true});

postSchema.index({
    title : 'text',
    body : 'text',
    tags : 'text'
});

const Post = mongoose.model("Post", postSchema);

export default Post;
