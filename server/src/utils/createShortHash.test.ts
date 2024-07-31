import { createShortHash } from "./createShortHash";
import { findHash, saveHash } from "../db/repositories/hashUrl.repository";

jest.mock("../db/repositories/hashUrl.repository");

describe("createShortHash", () => {
  const url = "https://www.google.com/";
  const expectedHash = "d0e196a0";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("without collision, creates and saves a hash", async () => {
    (findHash as jest.Mock).mockResolvedValue(null);

    const hash = await createShortHash(url);

    expect(hash).toHaveLength(8);
    expect(hash).toBe(expectedHash);
    expect(saveHash).toHaveBeenCalledWith(
      expect.objectContaining({ url, hash }),
    );
  });

  it("with collision, creates and saves a different hash", async () => {
    (findHash as jest.Mock).mockResolvedValueOnce({ url, hash: expectedHash });
    (findHash as jest.Mock).mockResolvedValueOnce(null);

    const hash = await createShortHash(url);

    expect(hash).toHaveLength(8);
    expect(hash).not.toBe(expectedHash);
    expect(saveHash).toHaveBeenCalledWith(
      expect.objectContaining({ url, hash }),
    );
  });
});
