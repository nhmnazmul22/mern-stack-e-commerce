import React, { useEffect } from "react";
import LegalContent from "../components/features/LegalContent";
import Layout from "../components/layout/Layout";
import FeatureStore from "../store/FeaturesStore";
const ContactPage = () => {
  const { LegalDataRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDataRequest("contact");
    })();
  }, []);

  return (
    <Layout>
      <LegalContent title="Contact Us" />
    </Layout>
  );
};

export default ContactPage;
