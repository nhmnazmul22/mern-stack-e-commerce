import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";

const PrivacyPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("privacy");
    })();
  }, []);

  return (
    <Layout>
      <LegalContent title="Privacy Policy" />
    </Layout>
  );
};

export default PrivacyPage;
