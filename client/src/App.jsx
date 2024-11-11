import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListByBrand from "./pages/ListByBrand";
import ListByCategory from "./pages/ListByCategory";
import ListByKeyword from "./pages/ListByKeyword";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/by-brand/:brandId" element={<ListByBrand />} />
      <Route path="/by-category/:categoryId" element={<ListByCategory />} />
      <Route path="/by-keyword/:keyword" element={<ListByKeyword />} />
    </Routes>
  );
};

export default App;
