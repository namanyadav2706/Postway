import express from 'express';
import userRouter from './src/user/user.route.js';
import postRouter from './src/post/post.route.js';
import likeRouter from './src/like/lile.route.js';
import commentRouter from './src/comment/comment.route.js';

import db from './src/config/mongoose.js';
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.get('/',(req, res)=>{
    res.status(200).send("Express app")
})

app.use('/api/user',userRouter);
app.use('/api/post',postRouter);
app.use('/api/like',likeRouter);
app.use('/api/comment',commentRouter);

app.listen(3000, ()=>{
    console.log("App is listening to port:3000")
})