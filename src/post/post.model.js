import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.ObjectId,ref:'UserModel'},
    caption:{type:String,required:true},
    imageURL:{type:String}
})

const PostModel = mongoose.model('PostModel',postSchema);
export default PostModel