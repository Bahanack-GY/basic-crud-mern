import Product from '../models/product.model.js';

export const getProducts = async (req, res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({"products": products});
        console.log('Served products successfully');
    }
    catch(error){
        console.error('Error fetching products:', error);
        res.status(500).send({message: "Error fetching products"});
    }
}

export const createProduct = async (req, res) => {
    try{
        const newProduct = req.body;
        const product = new Product(newProduct);
        await product.save();
        res.status(201).json({"product": product});
    }
    catch(error){
        console.error('Error creating product:', error);
        res.status(500).send({message: "Error creating product"});
    }
}