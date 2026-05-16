import { mongoose } from "mongoose";
import "dotenv/config";
export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("Mongodb is not connected", error);
    process.exit(1);
  }
};
