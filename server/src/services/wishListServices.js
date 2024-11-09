import mongoose from "mongoose";

// === Internal Imports ===
import WishModel from "../model/wishesModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const createWishService = async (req) => {
  try {
    const { productID } = req.body;
    const user_id = req.headers.user_id;

    const postJson = {
      user_id: user_id,
      product_id: productID,
    };
    await WishModel.updateOne(postJson, { $set: postJson }, { upsert: true });
    return { status: "Successful", message: "Product added to wishlist" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

export const readWishListService = async (req) => {
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

    const UnwindProduct = { $unwind: "$product" };
    const data = await WishModel.aggregate([
      MatchStage,
      JoinWithProduct,
      UnwindProduct,
    ]);
    return { status: "Successful", message: "Wishlist fetched", data: data };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

export const removeWishListService = async (req) => {
  try {
    const { productID } = req.body;
    const user_id = req.headers.user_id;

    const postJson = {
      user_id: user_id,
      product_id: productID,
    };
    await WishModel.deleteOne(postJson);
    return { status: "Successful", message: "Product delete to wishlist" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};
