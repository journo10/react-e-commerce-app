import { useState } from "react";
import Product from "../Product";
import Search from "../Search";

const Products = ({ products, getProductsData }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      <div className="row">
        {products
          .filter((p) =>
            p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((product) => (
            <div key={product.id} className="col-md-4 mt-3">
              <Product product={product} getProductsData={getProductsData} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
