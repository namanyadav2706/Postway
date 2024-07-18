import express from 'express';
import PostController from './post.controller.js';

const postRouter = express.Router()
const postController = new PostController();

postRouter.get('/all', (req,res) => postController.getAllPosts(req,res));
postRouter.get('/:id', (req,res) => postController.getOnePost(req,res));
postRouter.get('/', (req,res) => postController.getPostByLoggedUser(req,res));
postRouter.post('/', (req,res) => postController.createPost(req,res));
postRouter.delete('/:id', (req,res) => postController.deletePost(req,res));
postRouter.put('/:id', (req,res) => postController.updatePost(req,res));
