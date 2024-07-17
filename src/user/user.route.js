import express from 'express'
import UserController from './user.controller.js'

const userController = new UserController();

const userRouter = express.Router()

userRouter.post('/login', (req, res) => userController.login(req, res))
userRouter.post('/signup', (req,res) => userController.signup(req,res))

export default userRouter;