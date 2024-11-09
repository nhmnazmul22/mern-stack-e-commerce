import axios from "axios";
import { create } from "zustand";

const ProductStore = create((set) => ({
  //==> Storing BrandList Data
  BrandList: null,
  BrandListRequest: async () => {
    const res = await axios.get(`/api/brandList`);
    if (res.status === 200) {
      set({ BrandList: res.data["data"] });
    }
  },

  //==> Storing CategoriesList Data
  CategoriesList: null,
  CategoriesListRequest: async () => {
    const res = await axios.get(`/api/categoryList`);
    if (res.status === 200) {
      set({ CategoriesList: res.data["data"] });
    }
  },

  //==> Storing SliderList Data
  SliderList: null,
  SliderListRequest: async () => {
    const res = await axios.get(`/api/productListBySlide`);
    if (res.status === 200) {
      set({ SliderList: res.data["data"] });
    }
  },

  //==> Storing ProductList by Remark
  ProductListByRemark: null,
  ProductListByRemarkRequest: async (remark) => {
    const res = await axios.get(`/api/productListByRemark/${remark}`);
    if (res.status === 200) {
      set({ ProductListByRemark: res.data["data"] });
    }
  },
}));

export default ProductStore;
