// === External Imports ===
import express from "express";

// === Internal Imports ===
import * as brandsController from "../src/controllers/brandsController.js";
import * as cartListController from "../src/controllers/cartListController.js";
import * as categoriesController from "../src/controllers/categoriesController.js";
import * as featuresController from "../src/controllers/featuresController.js";
import * as invoiceController from "../src/controllers/invoiceController.js";
import * as productController from "../src/controllers/productController.js";
import * as userController from "../src/controllers/usersController.js";
import * as wishListController from "../src/controllers/wishListController.js";
import { AuthMiddleware } from "../src/middlewares/authMiddleware.js";

// === Initial Express Router ===
const router = express.Router();

// === Brands Routes ===
router.get("/brandList", brandsController.brandList);

// === Category Routes ===
router.get("/categoryList", categoriesController.categoryList);

// === Feature Routes ===
router.get("/features", featuresController.featuresList);
router.get("/legals/:type", featuresController.legalDetails);


// === Product Routes ===
router.get(
  "/productListByCategory/:categoryID",
  productController.productListByCategory
);
router.get(
  "/productListByRemark/:remark",
  productController.productListByRemark
);
router.get(
  "/productListByBrand/:brandID",
  productController.productListByBrand
);
router.get(
  "/productDetailsById/:productID",
  productController.productDetailsById
);
router.get(
  "/productListByKeyword/:keyword",
  productController.productListByKeyword
);
router.get("/productListBySlide", productController.productListBySlide);
router.get(
  "/productReviewListById/:productID",
  productController.productReviewListById
);
router.post("/productListByFilter", productController.productListByFilter);

// === Review Routes ===
router.post("/createProductReview", productController.createProductReview);
router.post("/updateProductReview", productController.updateProductReview);

// === Users Routes ===
router.post("/login", userController.login);
router.post("/loginVerify", userController.loginVerify);
router.post(
  "/createUserProfile",
  AuthMiddleware,
  userController.createUserProfile
);
router.post(
  "/updateUserProfile",
  AuthMiddleware,
  userController.updateUserProfile
);
router.get("/readUserProfile", AuthMiddleware, userController.readUserProfile);

router.post("/userLogout", userController.userLogout);

// === Cart Route ===
router.post("/createCart", AuthMiddleware, cartListController.createCart);
router.get("/readCartList", AuthMiddleware, cartListController.readCartList);
router.post("/updateCart", AuthMiddleware, cartListController.updateCart);
router.post("/removeCart", AuthMiddleware, cartListController.removeCart);

// === Wishlist Routes ===
router.post("/createWish", AuthMiddleware, wishListController.createWish);
router.get("/readWishList", AuthMiddleware, wishListController.readWishList);
router.post("/removeWish", AuthMiddleware, wishListController.removeWish);

// === Invoice Routes ===
router.post("/createInvoice", invoiceController.createInvoice);
router.get("/readInvoiceList", invoiceController.readInvoiceList);
router.get("/readInvoiceDetails", invoiceController.readInvoiceDetails);

// === Exporting the router ===
export default router;
