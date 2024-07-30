import express, { Request } from "express";

import { findHash } from "../db/repositories/hashUrl.repository";

const router = express.Router({ mergeParams: true });

router.get("/", async (req: Request, res) => {
  try {
    const redirectUrl = (await findHash(req.params.hash))?.url;

    redirectUrl
      ? res.redirect(redirectUrl)
      : res.status(500).send("Sorry, that URL does not exist.");
  } catch (e) {
    console.error(e);
    res.status(500).send(`Server error: ${e}`);
  }
});

export default router;
