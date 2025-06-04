import config from "config";
import mongoose from "mongoose";

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
