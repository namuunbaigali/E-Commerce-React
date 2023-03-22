import mongoose from "mongoose";
import {nanoid} from "nanoid"

export const UserRole = {
    _id:{
        type:String,
        default:nanoid()
    },
  name: {
    type: String,
    required: true,
  },
};

export const userSchema = new mongoose.Schema(UserRole, { timestamps: true });