import express from 'express';
import dontenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import Stripe from 'stripe';
import cors from 'cors'
// internalBinding('errors').triggerUncaughtException() than add file extension eg. .js, .tsx

const app = express();

import userRoute from './routes/userRoutes.js'

dontenv.config({
  path: '.env'
})


databaseConnection();

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};
const whitelist = ['http://localhost:3000', 'https://pkplaynow.vercel.app'];
app.use(cors(corsOptions));


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
})
