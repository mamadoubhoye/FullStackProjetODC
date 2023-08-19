import { createPost, getPost, getPosts, updatePost, deletePost } from "../controllers/postController.js";

import express from "express";
import protect from "../middlewares/protect.js";
const router = express.Router();

router.get('/', protect, getPosts)
router.post('/', protect, createPost)
router.get('/:id', protect, getPost)
router.patch('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)

export default router;