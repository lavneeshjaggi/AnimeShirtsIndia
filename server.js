import "dotenv/config";
import { join } from "path";
import express from "express";
import passport from "passport";
import compression from "compression";
import session from "express-session";
import localStrategy from "passport-local";

import User from "./models/user.js";
import connectDB from "./config/db.js";
import signIn from "./routes/sign-in.js";
import signUp from "./routes/sign-up.js";
import signOut from "./routes/sign-out.js";
import authenticated from "./routes/authenticated.js";

const app = express();

connectDB();

app.use(compression());
app.use(passport.session());
app.use(passport.initialize());
app.use(express.json({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.MONGO_SECRET,
  })
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new localStrategy(User.authenticate()));

app.use("/login", signIn);
app.use("/logout", signOut);
app.use("/register", signUp);
app.use("/authenticated", authenticated);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "client/dist")));

  app.get("*", function (req, res) {
    res.sendFile(join(__dirname, "client/dist", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
