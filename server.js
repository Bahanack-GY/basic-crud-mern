import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db';


dotenv.config();

const app = express();

console.log('MongoDB URI: ', process.env.MONGODB_URI);

app.get('/', (req,res) =>{
    res.send("Hello world")
})

app.listen(3000, ()=>{
    ConnectDB();
    console.log('Server is running on port 3000');
})