// === Internal Imports ===
import mongoose from "mongoose";
import CartModel from "../model/cartsModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const createCartService = async (req) => {
  try {
    const user_id = new ObjectId(req.headers.user_id);
    const { color, size, qty, productID } = req.body;
    const postJson = {
      color: color,
      size: size,
      qty: qty,
      user_id: user_id,
      product_id: productID,
    };

    await CartModel.create(postJson);
    return { status: "Successful", message: "Cart created successfully" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

export const readCartService = async (req) => {
  try {
    const user_id = new ObjectId(req.headers.user_id);
    const MatchStage = { $match: { user_id: user_id } };
    const JoinWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };

    const UnwindProductStage = { $unwind: "$product" };
    const data = await CartModel.aggregate([
      MatchStage,
      JoinWithProduct,
      UnwindProductStage,
    ]);
    return {
      status: "Successful",
      message: "Cart fetched successfully",
      data: data,
    };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

export const updateCartService = async (req) => {
  try {
    const user_id = new ObjectId(req.headers.user_id);
    const { color, size, qty, id } = req.body;
    const MatchStage = { _id: id };
    const postJson = {
      color: color,
      size: size,
      qty: qty,
      user_id: user_id,
    };

    await CartModel.updateOne(MatchStage, { $set: postJson });
    return { status: "Successful", message: "Cart update successfully" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

export const deleteCartService = async (req) => {
  try {
    const { cartID } = req.body;
    await CartModel.deleteOne({ _id: cartID });
    return { status: "Successful", message: "Product delete to wishlist" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};
