import { Router } from "express";

const router = Router();

router.post("/", function (req, res, next) {
  if (req.user) {
    req.logout((err) => {
      if (err) {
        return next(err);
      } else {
        return res.send({ msg: "logging out" });
      }
    });
  } else {
    return res.send({ msg: "no user to logout" });
  }
});

export default router;
