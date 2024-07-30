import mongoose from "mongoose";

const HashUrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  hash: { type: String, required: true },
});

export const HashUrlModel = mongoose.model("HashUrl", HashUrlSchema);
