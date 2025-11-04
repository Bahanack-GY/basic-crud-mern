import express from 'express';
import dotenv from 'dotenv';
import {ConnectDB}  from './config/db.js';
import os from 'os';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json());


app.get('/health', (req,res) =>{
    res.status(200).send({status: 'UP', host: os.hostname(), time: new Date() , uptime: os.uptime(),   });
})

app.use('/api',  (req,res,next) =>{
    console.log(`Incoming request: ${req.method} ${req.url} at ${new Date().toISOString()} status: ${res.statusCode}`);
    next();
});
app.use('/api/products', productRoutes);  


app.listen(3000, ()=>{
    ConnectDB();
    console.log('Server is running on port 3000');
})