import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useBook } from "../../contexts/BookContext";
const Cart = () => {
  const { products, inc, dec, removeCart, totalCart, totalCartCount } = useBook();

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link>
        <span>Sepetim ({totalCartCount})</span>
      </h2>
      {totalCart > 0 && (
        <h3>Toplam Sepet Tutarı: &#8378; {totalCart}</h3>
      )}

      {products.cart.map((c) => {
        const { id, name, author, price, image, count } = c;
        return (
          <div className="book" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Yazar: {author}</p>
              <p>Fiyat: &#8378;{price}</p>
              <p>Toplam: &#8378;{(price * count).toFixed(2)}</p>
              <p>Sepetinizde bu kitaptan toplam {count} adet var.</p>
              <button onClick={() => inc(id)} className="btn">
                +
              </button>
              <button onClick={() => dec(id)} className="btn">
                -
              </button>
              <button onClick={() => removeCart(id)} className="btn">
                Sepetten Çıkar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
