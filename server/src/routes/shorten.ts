import express from "express";

import { createShortenedUrl } from "../utils/createShortenedUrl";
import { createShortHash } from "../utils/createShortHash";
import { findUrl } from "../db/repositories/hashUrl.repository";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;
    let hash;

    const hashUrlInDB = await findUrl(url);
    hashUrlInDB
      ? (hash = hashUrlInDB.hash)
      : (hash = await createShortHash(url));

    res.status(200).send({
      shortenedUrl: createShortenedUrl({ req, hash }),
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(`Server error: ${e}`);
  }
});

export default router;
