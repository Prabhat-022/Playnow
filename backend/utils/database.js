import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = () =>{

    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("mongodb connected successfully")

    }).catch((error)=>{

        console.log(`mongodb not connected ${error}`)
    })
}

export default databaseConnection;