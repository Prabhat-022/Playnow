import express from "express";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.listen(3000, () => {
    console.log('app is runing ')
}) 