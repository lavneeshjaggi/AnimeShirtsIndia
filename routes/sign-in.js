import express from "express";
import passport from "passport";

const router = express.Router();

router.post("/", passport.authenticate("local"), function (req, res) {
  return res.status(200).json({ msg: "Login Complete" });
});

export default router;
