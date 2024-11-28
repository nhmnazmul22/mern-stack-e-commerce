import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";
const HowToBye = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("howtobuy");
    })();
  }, []);
  return (
    <Layout>
      <LegalContent title="How To Buy" />
    </Layout>
  );
};

export default HowToBye;
