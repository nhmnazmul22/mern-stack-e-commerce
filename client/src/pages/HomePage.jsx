import { useEffect } from "react";
import Features from "../components/features/Features.jsx";
import Product from "../components/product/Products.jsx";
import FeatureStore from "../store/FeaturesStore.js";
import ProductStore from "../store/ProductStore.js";
import Layout from "./../components/layout/Layout";
import Brands from "./../components/product/Brands";
import Categories from "./../components/product/Categories";
import Slider from "./../components/product/Slider";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoriesListRequest,
    ProductListByRemarkRequest,
    SliderListRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await ProductListByRemarkRequest("new");
      await CategoriesListRequest();
      await BrandListRequest();
    })();
  }, []);

  return (
    <Layout>
      <Slider />
      <Features />
      <Product />
      <Categories />
      <Brands />
    </Layout>
  );
};

export default HomePage;
