import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const UserName = process.env.Db_username;
const PassWord = process.env.Db_password;

const Connection = async () => {
  const URL = `mongodb://${UserName}:${PassWord}@ac-9ifmkng-shard-00-00.sgelfb1.mongodb.net:27017,ac-9ifmkng-shard-00-01.sgelfb1.mongodb.net:27017,ac-9ifmkng-shard-00-02.sgelfb1.mongodb.net:27017/?ssl=true&replicaSet=atlas-u7g0ms-shard-0&authSource=admin&retryWrites=true&w=majority`;

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
