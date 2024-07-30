import { HashUrlModel } from "../models/hashUrl.model";

export const saveHash = async ({ url, hash }: { url: string; hash: string }) =>
  await HashUrlModel.create({ url, hash });

export const findHash = async (hash: string) =>
  await HashUrlModel.findOne({ hash }).exec();

export const findUrl = async (url: string) =>
  await HashUrlModel.findOne({ url }).exec();
