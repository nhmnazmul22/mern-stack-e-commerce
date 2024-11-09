// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    color: { type: String, require: true },
    size: { type: String, require: true },
    qty: { type: String, require: true },
    user_id: { type: mongoose.Types.ObjectId, require: true },
    product_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const CartModel = mongoose.model("carts", DataSchema);

// === Export Model ===
export default CartModel;
