// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    short_des: { type: String, require: true },
    price: { type: String, require: true },
    discount: { type: Boolean, require: true },
    discount_price: { type: String, require: true },
    image: { type: String, require: true },
    stock: { type: Boolean, require: true },
    star: { type: String, require: true },
    remark: { type: String, require: true },
    category_id: { type: mongoose.Types.ObjectId, require: true },
    brand_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const ProductModel = mongoose.model("products", DataSchema);

// === Export Model ===
export default ProductModel;
