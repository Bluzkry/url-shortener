import { createHash, randomBytes } from "crypto";

import { localCache } from "../db/localCache";

const updateHashIfCollision = ({
  url,
  hash,
}: {
  url: string;
  hash: string;
}): string => {
  if (!localCache.hashToUrl[hash]) {
    localCache.hashToUrl[hash] = url;
    localCache.urlToHash[url] = hash;
    return hash;
  }

  const newHash = randomBytes(4).toString("hex");
  return updateHashIfCollision({ url, hash: newHash });
};

export const createShortHash = (url: string) => {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 8);
  return updateHashIfCollision({ url, hash });
};
