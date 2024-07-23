import express from 'express';
import LikeController from './like.controller.js';
import authMiddleware from '../auth/auth.middleware.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.get('/:id', authMiddleware, (req,res) => likeController.getAllLikes(req,res));
likeRouter.get('/toggle/:id', authMiddleware, (req,res) => likeController.toggleLike(req,res))

export default likeRouter;