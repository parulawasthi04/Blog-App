import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    }
},{timestamps: true});
  
// Create a model from the schema
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;