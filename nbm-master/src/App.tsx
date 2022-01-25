import React from "react";
// import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  NbmHomePage,
  NbmSearch,
  NbmGoodsDetail,
  NbmPage,
  Campaign,
} from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NbmHomePage />} />
          <Route path="/nbmSearch" element={<NbmSearch />} />
          <Route path="/goods/detail/:goodsId" element={<NbmGoodsDetail />} />
          <Route path="/shop/cart" element={<NbmPage />} />
          <Route path="/campaign" element={<Campaign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
