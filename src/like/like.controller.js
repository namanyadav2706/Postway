import LikeModel from "./like.model.js";

class LikeController{
    async getAllLikes(req,res){
        const id = req.params.id;
        const likes = await LikeModel.find({post_id:id});
        const count = likes.length;
        console.log(count)
        return res.status(200).send({count});
    }

    async toggleLike(req,res){
        req.body.user_id = req.userid;
        req.body.post_id = req.params.id;
        const like = await LikeModel.findOne({user_id:req.userid,post_id:req.params.id});
        if(like){
            await LikeModel.findByIdAndDelete(like._id)
            return res.status(200).send('Unliked')
        } 
        const newLike = await LikeModel.create(req.body);
        return res.status(201).send('Liked')

    }
}

export default LikeController;