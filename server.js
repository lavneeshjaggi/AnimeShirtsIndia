import "dotenv/config";
import path from "path";
import express from "express";
import passport from "passport";
import { fileURLToPath } from "url";
import compression from "compression";
import session from "express-session";
import MongoStore from "connect-mongo";
import localStrategy from "passport-local";

import User from "./models/user.js";
import connectDB from "./config/db.js";
import signIn from "./routes/sign-in.js";
import signUp from "./routes/sign-up.js";
import signOut from "./routes/sign-out.js";
import authenticated from "./routes/authenticated.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

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

app.use("/api/login", signIn);
app.use("/api/logout", signOut);
app.use("/api/register", signUp);
app.use("/api/authenticated", authenticated);

if (process.env.NODE_ENV === "production") {
  const __clientPath = path.join(__dirname, "client", "dist");
  app.use(express.static(__clientPath));
  app.get("/", (req, res, next) => {
    if (req.accepts("html")) {
      res.sendFile(path.join(__clientPath, "index.html"));
    } else {
      next();
    }
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
