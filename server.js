import "dotenv/config";
import express from "express";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import localStrategy from "passport-local";

import User from "./models/user.js";
import connectDB from "./config/db.js";
import signIn from "./routes/sign-in.js";
import signUp from "./routes/sign-up.js";
import signOut from "./routes/sign-out.js";
import authenticated from "./routes/authenticated.js";

const app = express();

import compression from "compression";
connectDB();

app.use(compression());
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.MONGO_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
app.use(passport.session());
app.use(passport.initialize());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new localStrategy(User.authenticate()));

app.use("/login", signIn);
app.use("/logout", signOut);
app.use("/register", signUp);
app.use("/authenticated", authenticated);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(join(__dirname, "client/dist")));

//   app.get("*", function (req, res) {
//     res.sendFile(join(__dirname, "client/dist", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Server is listening on port ${port}`);
  });
}

export default app;
