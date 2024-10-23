import mongoose, { Schema, model, Model } from "mongoose";
import { UserDocument } from "@/types/auth";

const userSchema = new Schema<UserDocument>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User: Model<UserDocument> = mongoose.models.User || model("User", userSchema);