import CommentModel from "./comment.model.js";

class CommentController{
    async getAllComments(req, res){
        const id = req.params.id;
        const comments = await CommentModel.find({post_id:id});
        return res.status(200).send({comments})
    }
    
    async addComment(req, res){
        const postid = req.params.id;
        req.body.user_id = req.userid;
        req.body.post_id = postid;
        const comment = await CommentModel.create(req.body);
        return res.status(201).send(comment)
    }

    async updateComment(req, res){
        const id = req.params.id;

        const updatedComment = await CommentModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedComment){
            return res.status(404).send("No comment found")
        }
        return res.status(200).send(updatedComment);
    }

    async deleteComment(req,res){
        const id = req.params.id;

        const deletedComment = await CommentModel.findByIdAndDelete(id,{new:true});
        if(!deletedComment){
            return res.status(404).send("No comment found");
        }
        return res.status(200).send(deletedComment);
    }
}

export default CommentController;