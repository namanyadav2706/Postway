import express from 'express';
import PostController from './post.controller.js';
import uploadFile from './post.middleware.js';
import authMiddleware from '../auth/auth.middleware.js';

const postRouter = express.Router()
const postController = new PostController();

postRouter.get('/all', authMiddleware, (req,res) => postController.getAllPosts(req,res));
postRouter.get('/:id', authMiddleware, (req,res) => postController.getOnePost(req,res));
postRouter.get('/', authMiddleware, (req,res) => postController.getPostByLoggedUser(req,res));
postRouter.post('/', authMiddleware, uploadFile.array('imageURLs', 12), (req,res) => postController.createPost(req,res));
postRouter.delete('/:id', authMiddleware, (req,res) => postController.deletePost(req,res));
postRouter.put('/:id', authMiddleware, (req,res) => postController.updatePost(req,res));

export default postRouter;
