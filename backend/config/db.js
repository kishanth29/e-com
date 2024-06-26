import mongoose from "mongoose";

const connectDB = async() => {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017');
        console.log('Successfully connected to mongoDB ');
    } catch (error) {
        console.log("ERROR: ${error.messeage}");
        process.exit(1);
    }
};

export default connectDB;