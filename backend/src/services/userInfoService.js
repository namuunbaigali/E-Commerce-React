import { userSchema } from "../models/userModel";
import mongoose from "mongoose";

const userInfoModel = mongoose.model("UserInfo", userSchema);

export const getUsersInfo = async () => {
  const users = await userModel.find({});
  return users;
};

export const getUserInfoById = async (id) => {
  return await userInfoModel.findById(id);
};

export const createUserInfo = async (user) => {
  return await userInfoModel.create(user);
};

export const updateUserInfo = async (id, user) => {
  return await userInfoModel.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUserInfo = async (id) => {
  return await userInfoModel.findByIdAndDelete(id);
};