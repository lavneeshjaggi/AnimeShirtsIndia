import mongoose from "mongoose";

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(db);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
