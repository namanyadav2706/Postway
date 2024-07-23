import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.ObjectId,ref:'UserModel'},
    post_id:{type:mongoose.Schema.ObjectId, ref:'PostModel'},
},
    {timestamps:true}
);

const LikeModel = mongoose.model('LikeModel',likeSchema);
export default LikeModel;