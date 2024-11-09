import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";
import FeaturesSkeleton from "../skeleton/FeaturesSkeleton";
import SliderSkeleton from "../skeleton/SliderSkeleton";
import Layout from "./../components/layout/Layout";
import BrandSkeleton from "./../skeleton/BrandSkeleton";
import ProductSkeleton from "./../skeleton/ProductSkeleton";


const HomePage = () => {
  return (
    <Layout>
      <SliderSkeleton />
      <FeaturesSkeleton />
      <CategoriesSkeleton />
      <ProductSkeleton />
      <BrandSkeleton />
    </Layout>
  );
};

export default HomePage;
