import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true
    }

},{timestamps:true});

// If you set timestamps: true, Mongoose will add two properties of type Date to your schema: createdAt, updatedAt

export const User = mongoose.model("User", userSchema)