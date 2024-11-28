import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";

const RefundPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("refund");
    })();
  }, []);

  return (
    <Layout>
      <LegalContent title="Refund Policy" />
    </Layout>
  );
};

export default RefundPage;
