// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    total: { type: String, require: true },
    vat: { type: String, require: true },
    payable: { type: String, require: true },
    cus_details: { type: String, require: true },
    ship_details: { type: mongoose.Types.ObjectId, require: true },
    tran_id: { type: mongoose.Types.ObjectId, require: true },
    val_id: { type: mongoose.Types.ObjectId, require: true },
    payment_status: { type: String, require: true },
    order_status: { type: String, require: true },
    user_id: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const InvoiceModel = mongoose.model("invoices", DataSchema);

// === Export Model ===
export default InvoiceModel;
