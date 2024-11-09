// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    img: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const FeaturesModel = mongoose.model("features", DataSchema);

// === Export Model ===
export default FeaturesModel;
