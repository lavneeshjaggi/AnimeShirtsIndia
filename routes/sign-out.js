import { Router } from "express";

const router = Router();

router.post("/", function (req, res) {
  if (!req.user) {
    res.send({ msg: "no user to logout" });
    return;
  }
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.send({ msg: "logging out" });
  });
});

export default router;
