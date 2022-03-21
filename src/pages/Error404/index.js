import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container text-center">
      <div className="alert alert-warning" role="alert">
        <h1> Böyle bir sayfa bulunamadı!!! Error404</h1>
        <Link to="/" className="btn btn-sm btn-outline-danger mt-3">
          anasyafa'ya git
        </Link>
      </div>
    </div>
  );
};

export default Error404;
