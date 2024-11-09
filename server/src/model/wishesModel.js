// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, require: true },
    product_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const WishModel = mongoose.model("wishes", DataSchema);

// === Export Model ===
export default WishModel;
