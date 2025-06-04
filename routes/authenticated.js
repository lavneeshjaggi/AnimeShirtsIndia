import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

export default router;
