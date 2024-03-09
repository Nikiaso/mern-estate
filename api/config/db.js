import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
export async function connectDB() {
  try {
    const Conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection: ${Conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit();
  }
}
