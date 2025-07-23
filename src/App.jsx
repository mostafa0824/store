import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import { AuthContext } from "./Context/AuthContext";
import Auth from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={token?<Home />:<Auth/>} />
        <Route path="/product" element={token?<Product />:<Auth/>} />
        <Route path="/product-details/:id/:name" element={token?<ProductDetails />:<Auth/>} />
        <Route
          path="/auth"
          element={token ? <Navigate to={"/"} /> : <Auth />}
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  );
}
