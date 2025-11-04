import mongoose from 'mongoose';
export const ConnectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected: ', connect.connection.host);
    }
    catch(error){
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
}