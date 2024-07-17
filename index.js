import express from 'express';
import userRouter from './src/user/user.route.js';
import db from './src/config/mongoose.js';
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.get('/',(req, res)=>{
    res.status(200).send("Express app")
})

app.use('/api/user',userRouter)

app.listen(3000, ()=>{
    console.log("App is listening to port:3000")
})