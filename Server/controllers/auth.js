import User from "../models/users.js"
import { redirect } from 'react-router-dom'


import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async(req, res)=>{
    const {lastName, firstName, email, password} = req.body;
    const user_exists = await User.findOne({email});
    if(user_exists){
        return res.status(400).json({message: "User already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({lastName, firstName, email, password: hashedPassword});
    try{
        await user.save();
        res.status(201).json({user:user.email});
    }catch(error){
        res.status(400).json({error: error.message});
    }

}

export const login = async (req, res) =>{

    const {email, password} = req.body;
    const passwordHash = await bcrypt.hash(password,10);
    const user = await User.findOne({email});
    if(!user){
        res.status(400).json({ message: "Invalid Credentials"});
    }else{
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Credentials"});
        }else{
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
            // user.token = token;
            res.status(200).json({message:"Logged Successfull !", user , token});
        }
    }
}