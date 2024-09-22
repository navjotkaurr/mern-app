import express from "express";
import users from "./data/users.js";
import userRoutes from './routes/userRoute.js'
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`server is running on port ${port}`))