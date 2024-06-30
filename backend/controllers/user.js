import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid data",
                success: false
            })
        };

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            })
        }
        //match hashpassword or local password
        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            })
        }
        //even match the password than generate the token
        const tokenData = {
            id: user._id
        }
        const token = await jwt.sign(tokenData, "sdjfleojfslwoeidjfjsl", { expiresIn: "1h" })

        // store the data in browser cookies
        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome back ${user.fullName}`,
            success: true
        });

    } catch (error) {

        console.log(`Invalid Login: ${error}`)

    }
}
//logout authentication
export const Logout = async (req, res) => {

    return res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: "User Logged out successfully",
        success: true
    });
}


export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        //validation for fullName, email, password
        if (!fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid data",
                success: false
            })
        }

        // check email present or not in out database
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "This email is already used",
                success: false
            })
        }

        // creating hash password 
        const hashPassword = await bcryptjs.hash(password, 16)
        
        // creating user in database
        await User.create({
            fullName,
            email,
            password: hashPassword
        });

        //after create the user show message
        return res.status(201).json({
            message: "Account created successfully",
            success:true

        })


    } catch (error) {
        console.log(`Account not created: ${error}`)
    }
}