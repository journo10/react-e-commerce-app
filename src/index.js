import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AutProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <AutProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AutProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
