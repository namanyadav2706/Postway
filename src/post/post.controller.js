import PostModel from "./post.model.js";

class PostController{
    async getAllPosts(req, res){
        const posts = await PostModel.find({});

        return res.status(200).send(posts)
    }

    async getOnePost(req, res){
        const id = req.params.id;
        const post = await PostModel.findOne({_id:id});

        if(!post){
            return res.status(404).send("No Post Found!")
        }
        return res.status(200).send(post)
    }

    async getPostByLoggedUser(req, res){
        const user_id = req.userid;

        const posts = await PostModel.find({user_id:user_id});
        return res.status(200).send(posts)
    }

    async createPost(req, res){
        let photos = req.files
        let urls = []
        photos.forEach((photo) =>{
            urls.push("images/" + photo.filename); 
        })
        req.body.imageURLs = urls;
        req.body.user_id = req.userid;
        const newPost = await PostModel.create(req.body);
        return res.status(201).send(newPost);
        
    }

    async updatePost(req, res){
        const id = req.params.id;

        const updatedPost = await PostModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedPost){
            return res.status(404).send("No Post Found!")
        }
        return res.status(200).send(updatedPost);
    }

    async deletePost(req, res){
        const id = req.params.id
        const deletedPost = await PostModel.findByIdAndDelete(id,{new:true})

        if(!deletedPost){
            return res.status(404).send("No Post Found!")
        }
        return res.status(200).send(deletedPost);
    }
}

export default PostController;