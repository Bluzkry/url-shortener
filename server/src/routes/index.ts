import express from "express";
const router = express.Router();

router.get("/", (_, res) => res.send("Server successfully working."));

export default router;
