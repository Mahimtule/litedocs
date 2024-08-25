import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    if (isConnected) {
      console.log("MongoDB already Connected!");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "litedocs",
    });
    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error Connecting DataBase!", error);
  }
};
