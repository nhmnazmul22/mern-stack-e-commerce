import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductList from "../components/product/ProductList";
import ProductStore from "../store/ProductStore";

const ListByKeyword = () => {
  const { ListByKeywordRequest } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ListByKeyword;
