import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from "./routes/auth.js";

dotenv.config();
const DB_URL = "mongodb+srv://fullstackodc:odcfullstack@crud.rtbpbko.mongodb.net/projet_odc?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors())

app.use("/auth",authRoutes);
app.use("/posts", postRoutes);

app.get("/",(req, res)=>{
    res.send("Bonjour")
})

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("Conneted to MongoDB");
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on http://localhost:${PORT}`)
    });
})
.catch((err)=>{
    console.log(err)
})

