import express from 'express';
import CommentController from './comment.controller.js';
import authMiddleware from '../auth/auth.middleware.js';

const commentRouter = express.Router();
const commenetController = new CommentController();

commentRouter.get('/:id', authMiddleware, (req,res) => commenetController.getAllComments(req,res))
commentRouter.post('/:id', authMiddleware, (req,res) => commenetController.addComment(req,res))
commentRouter.put('/:id', authMiddleware, (req,res) => commenetController.updateComment(req,res))
commentRouter.delete('/:id', authMiddleware, (req,res) => commenetController.deleteComment(req,res))

export default commentRouter;