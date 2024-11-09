// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    brandName: { type: String, require: true, unique: true },
    brandImg: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const BrandModel = mongoose.model("brands", DataSchema);

// === Export Model ===
export default BrandModel;
