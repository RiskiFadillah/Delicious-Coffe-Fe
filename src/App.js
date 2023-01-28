import { HomePage } from "./pages/home/index";
import { Productpage } from "./pages/product/index";
import { DetailProduct } from "./pages/Detailproduct";
import { ProductCart } from "./pages/cart";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { AdmFormProductPage } from "./pages/Admin/AdmFormProduct";
import { AdmEditProductPage } from "./pages/Admin/AdmEditProduct";
import { ProductAdminpage } from "./pages/Admin/AdmProduct";
import PrivateRoute from "./Router/privateroute";
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/product/:productId" element={<DetailProduct />} />
        <Route path="/chartproduct" element={<ProductCart />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route element={<PrivateRoute isAdmin={false} />} />
        <Route path="/AdmFormProduct" element={<AdmFormProductPage />} />
        <Route
          path="/AdmEditProduct/:productId"
          element={<AdmEditProductPage />}
        />
        <Route path="/ProductAdmin" element={<ProductAdminpage />} />
      </Routes>
    </>
  );
  //return <HomePage />;
  //return <Productpage />;
}

export default App;
