import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ComplainPage from "./pages/ComplainPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import HowToBye from "./pages/HowToBye";
import ListByBrand from "./pages/ListByBrand";
import ListByCategory from "./pages/ListByCategory";
import ListByKeyword from "./pages/ListByKeyword";
import LoginPage from "./pages/LoginPage";
import PrivacyPage from "./pages/PrivacyPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RefundPage from "./pages/RefundPage";
import TermsPage from "./pages/TermsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/by-brand/:brandId" element={<ListByBrand />} />
      <Route path="/by-category/:categoryId" element={<ListByCategory />} />
      <Route path="/by-keyword/:keyword" element={<ListByKeyword />} />
      <Route
        path="/product-details/:productId"
        element={<ProductDetailsPage />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/refund-policy" element={<RefundPage />} />
      <Route path="/how-to-bye" element={<HowToBye />} />
      <Route path="/complain" element={<ComplainPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp-verify" element={<ComplainPage />} />
    </Routes>
  );
};

export default App;
