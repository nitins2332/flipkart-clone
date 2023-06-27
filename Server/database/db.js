import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Database_URL = process.env.DATABASE_URL;

const Connection = async () => {
  const URL = Database_URL;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established Successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
