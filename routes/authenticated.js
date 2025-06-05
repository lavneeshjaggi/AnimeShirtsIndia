import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  if (req.user) {
    return res.json({ user: req.user });
  }

  return res.json({ user: null });
});

export default router;
