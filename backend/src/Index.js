
import express from "express";
import cors from 'cors'
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'../env'
})

connectDB()

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.listen(3000, () => {
    console.log('app is runing ')
}) 