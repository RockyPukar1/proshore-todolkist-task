import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database running successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
};
