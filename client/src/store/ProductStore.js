import axios from "axios";
import { create } from "zustand";

const ProductStore = create((set) => ({
  //==> Storing BrandList Data
  BrandList: null,
  BrandListRequest: async () => {
    const res = await axios.get(`/api/brandList`);
    if (res.data.status === "Successful") {
      set({ BrandList: res.data["data"] });
    }
  },

  //==> Storing CategoriesList Data
  CategoriesList: null,
  CategoriesListRequest: async () => {
    const res = await axios.get(`/api/categoryList`);
    if (res.data.status === "Successful") {
      set({ CategoriesList: res.data["data"] });
    }
  },

  //==> Storing SliderList Data
  SliderList: null,
  SliderListRequest: async () => {
    const res = await axios.get(`/api/productListBySlide`);
    if (res.data.status === "Successful") {
      set({ SliderList: res.data["data"] });
    }
  },

  //==> Storing ProductList by Remark
  ProductListByRemark: null,
  ProductListByRemarkRequest: async (remark) => {
    const res = await axios.get(`/api/productListByRemark/${remark}`);
    if (res.data.status === "Successful") {
      set({ ProductListByRemark: res.data["data"] });
    }
  },

  //==> Storing ProductList by Brand
  ProductList: null,
  ListByBrandRequest: async (brandId) => {
    set({ ProductList: null });
    const res = await axios.get(`/api/productListByBrand/${brandId}`);
    if (res.data.status === "Successful") {
      set({ ProductList: res.data["data"] });
    }
  },

  //==> Storing ProductList by Category
  ListByCategoryRequest: async (categoryId) => {
    set({ ProductList: null });
    const res = await axios.get(`/api/productListByCategory/${categoryId}`);
    if (res.data.status === "Successful") {
      set({ ProductList: res.data["data"] });
    }
  },

  //==> Storing ProductList by Keyword
  ListByKeywordRequest: async (keyword) => {
    set({ ProductList: null });
    const res = await axios.get(`/api/productListByKeyword/${keyword}`);
    if (res.data.status === "Successful") {
      set({ ProductList: res.data["data"] });
    }
  },

  //==> Storing ProductList by Filter
  ListByKeywordRequest: async (filterObj) => {
    set({ ProductList: null });
    const res = await axios.post(`/api/productListByFilter`, filterObj);
    if (res.data.status === "Successful") {
      set({ ProductList: res.data["data"] });
    }
  },

  //==> Storing Product Details
  ProductDetails: null,
  ProductDetailsRequest: async (id) => {
    const res = await axios.get(`/api/productDetailsById/${id}`);
    if (res.data.status === "Successful") {
      set({ ProductDetails: res.data["data"] });
    }
  },

  //==> Storing Product Review List
  ReviewList: null,
  ReviewListRequest: async (id) => {
    const res = await axios.get(`/api/productReviewListById/${id}`);
    if (res.data.status === "Successful") {
      set({ ReviewList: res.data["data"] });
    }
  },
}));

export default ProductStore;
