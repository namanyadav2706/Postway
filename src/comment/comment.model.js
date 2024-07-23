import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.ObjectId, ref:'UsereModel'},
    post_id:{type:mongoose.Schema.ObjectId, ref:'PostModel'},
    content:String
},
    {timestamps:true}
)

const CommentModel = mongoose.model('CommentModel',commentSchema);
export default CommentModel;