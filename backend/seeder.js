import mongoose from "mongoose";
import dotenv from "dotenv";
import color from "colors"
import users from "./data/users.js";
import connectDB from "./config/db.js";
import User from "./models/userModal.js";

dotenv.config();

connectDB();

const importUser = async () => {
    try {
        await User.deleteMany();

       await User.insertMany(users);
       console.log('User data inserted successfully'.green.inverse);
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
};

importUser();

