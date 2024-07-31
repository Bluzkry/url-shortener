import { Request } from "express";

import { createShortenedUrl } from "./createShortenedUrl";

describe("Create shortened URL", () => {
  it("creates a shortened URL", () => {
    const mockPartialRequest = {
      protocol: "https",
      get: () => "url-shortener-nh88.onrender.com",
    } as unknown as Request;
    const hash = "z9y8x7w6";
    const expectedResult = "https://url-shortener-nh88.onrender.com/z9y8x7w6";

    expect(createShortenedUrl({ req: mockPartialRequest, hash })).toBe(
      expectedResult,
    );
  });
});
