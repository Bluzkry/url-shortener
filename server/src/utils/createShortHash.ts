import { createHash, randomBytes } from "crypto";

import { findHash, saveHash } from "../db/repositories/hashUrl.repository";

const updateHashIfCollision = async ({
  url,
  hash,
}: {
  url: string;
  hash: string;
}): Promise<string> => {
  if (!(await findHash(hash))) {
    await saveHash({ url, hash });
    return hash;
  }

  const newHash = randomBytes(4).toString("hex");
  return updateHashIfCollision({ url, hash: newHash });
};

export const createShortHash = async (url: string) => {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 8);
  return await updateHashIfCollision({ url, hash });
};
