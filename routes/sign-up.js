import express from "express";
import passport from "passport";

import User from "../models/user.js";

const router = express.Router();

router.post("/", function (req, res) {
  const { name, email, username, password } = req.body;

  User.register(
    new User({
      name: name,
      email: email,
      username: username,
    }),
    password,
    function (error, user) {
      if (error) {
        return res.status(500).send(error.message);
      }

      passport.authenticate("local")(req, res, function () {
        return res.status(200).json({ msg: "Registeration Complete" });
      });
    }
  );
});

export default router;
