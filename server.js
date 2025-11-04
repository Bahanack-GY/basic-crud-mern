import express from 'express';
import dotenv from 'dotenv';
import {ConnectDB}  from './config/db.js';
import Product from './models/product.model.js';


dotenv.config();

const app = express();
app.use(express.json());


app.get('/', (req,res) =>{
    res.send("Hello world")
})

app.post('/product', async (req, res) =>{
    const product = req.body;
    if(!product.name || !product.price){
        return  res.status(400).send({message: "Name and Price are required"});
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({message: "Product created successfully", product: newProduct});
        console.log('New product created:', newProduct);
    }
    catch(error){
        console.error('Error saving product:', error);
        res.status(500).send({message: "Error saving product"});
    }
});

app.listen(3000, ()=>{
    ConnectDB();
    console.log('Server is running on port 3000');
})