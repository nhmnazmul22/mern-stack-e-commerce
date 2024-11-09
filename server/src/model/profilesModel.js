// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    cus_name: { type: String },
    cus_add: { type: String },
    cus_city: { type: String },
    cus_state: { type: String },
    cus_postcode: { type: String },
    cus_country: { type: String },
    cus_phone: { type: String },
    cus_fax: { type: String },
    ship_name: { type: String },
    ship_add: { type: String },
    ship_city: { type: String },
    ship_state: { type: String },
    ship_postcode: { type: String },
    ship_country: { type: String },
    ship_phone: { type: String },
    user_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const UserModel = mongoose.model("profiles", DataSchema);

// === Export Model ===
export default UserModel;
