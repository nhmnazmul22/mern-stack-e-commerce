// === External Imports ===
import mongoose from "mongoose";

// === Internal Imports ===
import BrandModel from "../model/brandsModel.js";
import CategoryModel from "../model/categoriesModel.js";
import ProductModel from "../model/productsModel.js";
import ReviewModel from "../model/reviewsModel.js";
import SliderModel from "../model/sliderModel.js";

// Mongoose ObjectId define
const ObjectId = mongoose.Types.ObjectId;

// Function to get all brands
export const BrandListService = async () => {
  try {
    const data = await BrandModel.find({});
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get all Category
export const CategoryListService = async () => {
  try {
    const data = await CategoryModel.find({});
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by Slider
export const ListBySliderService = async () => {
  try {
    const data = await SliderModel.find({});
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by Brand
export const ListByBrandServices = async (req) => {
  try {
    const brandID = new ObjectId(req.params.brandID);
    const MatchStage = { $match: { brandID: brandID } };
    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };

    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by Category
export const ListByCategoryServices = async (req) => {
  try {
    const categoryID = new ObjectId(req.params.categoryID);
    const MatchStage = { $match: { categoryID: categoryID } };
    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };

    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by Remark
export const ListByRemarkServices = async (req) => {
  try {
    const remark = req.params.remark;
    const MatchStage = { $match: { remark: remark } };

    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };

    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product details by Product Id
export const DetailService = async (req) => {
  try {
    const productID = new ObjectId(req.params.productID);
    const MatchStage = { $match: { _id: productID } };

    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };
    const UnwindDetailsStage = { $unwind: "$details" };

    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "details._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by keywords
export const ListByKeywordService = async (req) => {
  try {
    const keyword = req.params.keyword;
    const regex = { $regex: keyword, $options: "i" };
    const SearchParam = [{ title: regex }, { shortDes: regex }];
    const SearchQuery = { $or: SearchParam };
    const MatchStage = { $match: SearchQuery };

    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };

    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "details._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    if (data.length > 0) {
      return { status: "Successful", data: data };
    } else {
      return { status: "Successful", data: [] };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get product by Filter
export const ListByFilterService = async (req) => {
  try {
    const matchConditions = {};
    if (req.body["brandID"]) {
      matchConditions.brandID = new ObjectId(req.body["brandID"]);
    }
    if (req.body["categoryID"]) {
      matchConditions.categoryID = new ObjectId(req.body["categoryID"]);
    }
    const MatchStage = { $match: matchConditions };

    const AddFieldStage = {
      $addFields: { numericPrice: { $toInt: "$price" } },
    };

    const maxPrice = parseInt(req.body["maxPrice"]);
    const minPrice = parseInt(req.body["minPrice"]);
    const priceMatchConditions = {};
    if (!isNaN(minPrice)) {
      priceMatchConditions["numericPrice"] = { $gte: minPrice };
    }
    if (!isNaN(maxPrice)) {
      priceMatchConditions["numericPrice"] = {
        ...(priceMatchConditions["numericPrice"] || {}),
        $lte: maxPrice,
      };
    }
    const PriceMatchStage = { $match: priceMatchConditions };

    const JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const UnwindBrandStage = { $unwind: "$brand" };
    const UnwindCategoryStage = { $unwind: "$category" };
    const ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "details._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    const data = await ProductModel.aggregate([
      MatchStage,
      AddFieldStage,
      PriceMatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function to get Review by product id
export const ReviewListService = async (req) => {
  try {
    const productID = new ObjectId(req.params.productID);
    const MatchStage = { $match: { productID: productID } };
    const JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "user_id",
        as: "profile",
      },
    };
    const UnwindProfileStage = { $unwind: "$profile" };

    const ProjectionStage = {
      $project: { des: 1, rating: 1, "profile.cus_name": 1 },
    };

    const data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfileStage,
      UnwindProfileStage,
      ProjectionStage,
    ]);
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
