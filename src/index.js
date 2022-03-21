import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AutProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.render(
  <AutProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AutProvider>,
  document.getElementById("root")
);
