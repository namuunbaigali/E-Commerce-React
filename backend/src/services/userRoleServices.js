
import { userRoleSchema } from "../models/userRoleModel";
import mongoose from "mongoose";

const userRoleModel = mongoose.model("UserRole", userRoleSchema);

export const getRoleUsers = async () => {
  const users = await userRoleModel.find({});
  return users;
};

export const getUserRoleById = async (id) => {
  return await userRoleModel.findById(id);
};

export const createUserRole = async (user) => {
  return await userRoleModel.create(user);
};

export const updateUserRole = async (id, userRole) => {
  return await userRoleModel.findByIdAndUpdate(id, userRole, { new: true });
};

export const deleteUserRole = async (id) => {
  return await userRleModel.findByIdAndDelete(id);
};