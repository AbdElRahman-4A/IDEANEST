import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Make sure to call this to load the variables from .env

const connectDB = async (): Promise<void> => {
  try {
    console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
