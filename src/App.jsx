import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
// import { AuthContext } from "./Context/AuthContext";
import Auth from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Cart from "./Pages/Cart";

export default function App() {
  // const { token } = useContext(AuthContext);
  const {token}=useSelector(store=>store.auth)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product-details/:id/:name" element={<ProductDetails/>} />
        <Route
          path="/auth"
          element={token ? <Navigate to={"/"} /> : <Auth />}/>
        <Route path="/cart" element={token?<Cart/>:<Auth/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  );
}
