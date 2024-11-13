import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Details from "../components/product/Details";
import ProductStore from "../store/ProductStore";
import Brands from "./../components/product/Brands";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const {
    ProductDetailsRequest,
    ReviewListRequest,
    BrandListRequest,
    BrandList,
  } = ProductStore();

  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(productId);
      await ReviewListRequest(productId);
      BrandList === null ? await BrandListRequest() : null;
    })();
  }, []);

  return (
    <Layout>
      <Details />
      <Brands />
    </Layout>
  );
};

export default ProductDetailsPage;
