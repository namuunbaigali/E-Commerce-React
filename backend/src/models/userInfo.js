import mongoose from "mongoose";
import {nanoid} from "nanoid"

export const Userinfo = {
    _id:{
        type:String,
    },
    
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
 password:{
     type:String,
     unique:true

 }
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });