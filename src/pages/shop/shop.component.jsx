import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import CollectionOverviewComponent from "../../component/collection-overview/collection-overview.component";
import CatagoryPage from "../catagory/caytagory.component";

const ShopPage = () => {
  const match = useMatch("/shop/*"); // Use the base path for the shop page

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverviewComponent />} />
        <Route path=":categoryId" element={<CatagoryPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;