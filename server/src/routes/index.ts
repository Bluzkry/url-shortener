import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

export default router;
