import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const { loggedIn } = useAuth();
  const { items } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 sticky-top">
        <Link to="/" className="navbar-brand">
          ReactShopApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products-add" className="nav-link" href="#">
                Products Add
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {items.length > 0 && (
              <li className="nav-item">
                <Link
                  to="/cart"
                  style={{ color: "yellow" }}
                  className="nav-link"
                >
                  <i className="fa-solid fa-cart-plus"></i>
                  <strong className="text-warning p-1">{items.length}</strong>
                </Link>
              </li>
            )}
            {!loggedIn && (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
            {loggedIn && (
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profil
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
