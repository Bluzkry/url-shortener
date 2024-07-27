import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error("Error: ", err);
  res.status(500).send(`Something went wrong: ${err}`);
};
