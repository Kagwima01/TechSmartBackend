//Connection to database
import mongoose from "mongoose";

const connectToDatabase = async () => {
  mongoose.set("strictQuery", false);
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongo db connected: ${connect.connection.host}`);
};
export default connectToDatabase;
