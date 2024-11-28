import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";
const AboutPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("about");
    })();
  }, []);

  return (
    <Layout>
      <LegalContent title="About Us" />
    </Layout>
  );
};

export default AboutPage;
