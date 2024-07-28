import express, { Request } from "express";

import { localCache } from "../db/localCache";

const router = express.Router({ mergeParams: true });

router.get("/", (req: Request, res) => {
  const redirectUrl = localCache.hashToUrl[req.params.hash];

  if (redirectUrl) {
    res.redirect(redirectUrl);
  } else {
    res.status(500).send("Sorry, that URL does not exist.");
  }
});

export default router;
