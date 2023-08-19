import mongoose from "mongoose";
import Post from "../models/posts.js";

export const createPost = async (req, res)=>{
    const post = req.body;

    const newPost = new Post({...post, userId: req?.user?.id});
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
};

export const getPosts = async (req, res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPost = async(req, res)=>{
    const {id} = req.params;
    try{
        const post = await Post.findById(id);
        res.status(200).json(post);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatePost = async (req, res)=>{
    const {id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).send("Post not found");
    }
    const oldPost = await Post.findById(id);
    if(!oldPost){
        return res.status(403).json({message :`Post not found with id: ${id}`});
    }
    const updatePost = await Post.findById(id, {...post, _id: id}, {new:true});
    res.json(updatePost);
}

export const deletePost = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).send(`Post not found with id: ${id}`);
    }
    const oldPost = await Post.findById(id);
    if(oldPost.userId !== req.user.id){
        return res.status(403).json({message :`Your not Authorized to delete this post.`});
    }
    await Post.findByIdAndRemove(id);
    res.json({message :`Post deleted successfully`});
}