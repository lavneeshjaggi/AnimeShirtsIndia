const express = require("express"),
  path = require("path"),
  compression = require("compression"),
  cors = require("cors"),
  session = require("express-session"),
  config = require("config"),
  passport = require("passport"),
  localStrategy = require("passport-local");

const app = express();

const connectDB = require("./config/db"),
  User = require("./models/user");

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
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/authenticated", function (req, res) {
  if (req.user) res.json({ user: req.user });
  else res.json({ user: null });
});
app.post("/login", passport.authenticate("local"), function (req, res) {
  return res.status(200).json({ msg: "Login Complete" });
});
app.post("/register", function (req, res) {
  const { name, email, username, password } = req.body;

  User.register(
    new User({
      name: name,
      username: username,
      email: email,
    }),
    password,
    function (error, user) {
      if (error) return res.status(500).send(error.message);

      passport.authenticate("local")(req, res, function () {
        return res.status(200).json({ msg: "Registeration Complete" });
      });
    }
  );
});
app.post("/logout", function (req, res) {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else res.send({ msg: "no user to logout" });
});

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
});
