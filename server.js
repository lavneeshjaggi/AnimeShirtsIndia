const path = require("path");
const config = require("config");
const express = require("express");
const passport = require("passport");
const compression = require("compression");
const session = require("express-session");
const localStrategy = require("passport-local");

const User = require("./models/user");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(compression());
app.use(
  session({
    secret: config.get("secret"),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/login", require("./routes/sign-in"));
app.use("/logout", require("./routes/sign-out"));
app.use("/register", require("./routes/sign-up"));
app.use("/authenticated", require("./routes/authenticated"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
});
