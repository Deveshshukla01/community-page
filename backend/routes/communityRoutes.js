import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["spanish", "french", "english"]);
});

export default router;