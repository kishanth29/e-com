// packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoues from './routes/userRoues.js';



//utiles
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/movie';

connectDB();

const app = express(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/users', userRoues);


app.listen(port,() => console.log('Server running on port',port));
