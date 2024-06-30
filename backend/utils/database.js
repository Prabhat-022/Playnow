import mongoose from "mongoose";

const databaseConnection = () =>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("mongodb connected successfully")
    }).catch((error)=>{
        // console.log(`mongodb not connected ${error}`)
        console.log(error)
    })
}

export default databaseConnection;