// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, require: true },
    product_id: { type: mongoose.Types.ObjectId, require: true },
    des: { type: String, require: true },
    rating: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const ReviewModel = mongoose.model("reviews", DataSchema);

// === Export Model ===
export default ReviewModel;
