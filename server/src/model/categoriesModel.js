// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    categoryName: { type: String, require: true, unique: true },
    categoryImg: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const CategoryModel = mongoose.model("categories", DataSchema);

// === Export Model ===
export default CategoryModel;