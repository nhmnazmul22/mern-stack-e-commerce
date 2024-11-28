import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";
const ComplainPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("complain");
    })();
  }, []);

  return (
    <Layout>
      <LegalContent title="Complain" />
    </Layout>
  );
};

export default ComplainPage;
