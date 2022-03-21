import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

//pages
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductsAdd from "./pages/ProductsAdd";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

const apiUrl = "http://localhost:5000/products";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products products={products} getProductsData={getProductsData} />} />
          <Route path="/products-add" element={<ProductsAdd getProductsData={getProductsData} />} />
          <Route path="/products/:p_id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
