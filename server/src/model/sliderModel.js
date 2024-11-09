// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    short_des: { type: String, require: true },
    price: { type: String, require: true },
    image: { type: String, require: true },
    product_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const ProductSliderModel = mongoose.model("productsliders", DataSchema);
// === Export Model ===
export default ProductSliderModel;
