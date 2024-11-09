// === External Imports ===
import mongoose from "mongoose";

// === Define DataSchema ===
const DataSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, require: true },
    product_id: { type: mongoose.Types.ObjectId, require: true },
    invoice_id: { type: mongoose.Types.ObjectId, require: true },
    qty: { type: String, require: true },
    price: { type: String, require: true },
    color: { type: String, require: true },
    size: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const InvoiceProductModel = mongoose.model("invoiceproducts", DataSchema);

// === Export Model ===
export default InvoiceProductModel;
