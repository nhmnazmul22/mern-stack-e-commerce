import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductList from "../components/product/ProductList";
import ProductStore from "../store/ProductStore";

const ListByCategory = () => {
  const { ListByCategoryRequest } = ProductStore();
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      await ListByCategoryRequest(categoryId);
    })();
  }, []);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ListByCategory;
