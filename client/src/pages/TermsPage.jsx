import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";

const TermsPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("terms");
    })();
  }, []);
  
  return (
    <Layout>
      <LegalContent title="Terms" />
    </Layout>
  );
};

export default TermsPage;
