import mongoose from "mongoose";
import { MONGODB_URL } from ".";
const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL);
    if (connection) {
      console.log(`connected to DB:${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectToDB;
