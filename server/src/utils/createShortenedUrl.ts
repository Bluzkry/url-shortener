import { Request } from "express";

export const createShortenedUrl = ({
  req,
  hash,
}: {
  req: Request;
  hash: string;
}) => `${req.protocol}://${req.get("host")}/${hash}`;
