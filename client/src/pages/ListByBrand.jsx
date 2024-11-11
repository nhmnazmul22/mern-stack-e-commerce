import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductList from "../components/product/ProductList";
import ProductStore from "../store/ProductStore";

const ListByBrand = () => {
  const { ListByBrandRequest } = ProductStore();
  const { brandId } = useParams();

  useEffect(() => {
    (async () => {
      await ListByBrandRequest(brandId);
    })();
  }, []);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ListByBrand;
