// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    otp: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const UserModel = mongoose.model("users", DataSchema);

// === Export Model ===
export default UserModel;
