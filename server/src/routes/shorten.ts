import express from "express";

import { createShortenedUrl } from "../utils/createShortenedUrl";
import { createShortHash } from "../utils/createShortHash";
import { localCache } from "../db/localCache";

const router = express.Router();

router.post("/", (req, res) => {
  const url = "https://www.google.com/?client=safari";
  let hash;

  if (localCache.urlToHash[url]) {
    hash = localCache.urlToHash[url];
  } else {
    hash = createShortHash(url);
  }

  res.status(200).send({
    shortenedUrl: createShortenedUrl({ req, hash }),
  });
});

export default router;
