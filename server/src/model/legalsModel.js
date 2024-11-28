// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    description: { type: String, require: true },
    type: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const LegalModel = mongoose.model("legals", DataSchema);

// === Export Model ===
export default LegalModel;
