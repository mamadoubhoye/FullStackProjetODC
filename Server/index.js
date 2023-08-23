import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from "./routes/auth.js";

dotenv.config();
const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: `https://fullstackodc.onrender.com:${PORT}`, // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

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

