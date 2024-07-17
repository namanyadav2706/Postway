import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

class UserController{
    async login(req,res){
        const {email,password} = req.body;

        const user = await UserModel.findOne({email,password});
        if(user){
            const token = jwt.sign({"id":user._id,"email":user.email},"my-secret-key",{expiresIn:60*60*24})
            res.cookie('auth-token',token)
            return res.status(200).send("Logged in successfully!!!")
        }

        return res.status(404).send("User not found!")
    }

    async signup(req,res){
        const user = UserModel.create(req.body);
        return res.status(201).send(user)
    }
}

export default UserController;