import express from 'express';
import dotenv from 'dotenv';
import  databaseConnection  from './utils/database.js';

import cookieParser from 'cookie-parser';
import Stripe from 'stripe';
import cors from 'cors'
import userRoute from './routes/userRoutes.js'

// internalBinding('errors').triggerUncaughtException() than add file extension eg. .js, .tsx
dotenv.config();


const app = express();

//cors configuration
const whiteList = ["http://localhost:3000", "https://pkplaynow.vercel.app"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())




//creating the api
app.use("/api/v1/user", userRoute);
// http://localhost:8000/api/v1/user/register

app.get('/', (req, res) => {
  res.send("Hii, how are you, i'm coming form backend, now live");
})

//payment integration
const stripe = new Stripe('sk_test_51NibPfSC7o701ELz7cw1bXdelbHUbLei9fBC6VA3MXmY66361wVNTbEV9oC85p9rROspsW2FGDG8rxWCIl6P6rd600cH6UBEqI');



app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 10,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/browse`,
    cancel_url: `http://localhost:3000/`,
  });

  res.redirect(303, session.url);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
  databaseConnection();
})
