import express from "express";
import createError from "http-errors";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { connectDB } from "./db/db";
import indexRouter from "./routes/index";
import redirectRouter from "./routes/redirect";
import shortenRouter from "./routes/shorten";
import { errorHandler } from "./middleware/errors";

connectDB();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../../client/build")));
app.use(cors());

app.use("/", indexRouter);
app.use("/shorten", shortenRouter);
app.use("/:hash", redirectRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
