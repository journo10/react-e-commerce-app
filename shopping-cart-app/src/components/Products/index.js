import { Link } from "react-router-dom";
import "../../App.css";
import { useBook } from "../../contexts/BookContext";
const Products = () => {
  const { products, addToCart, totalCartCount } = useBook();

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim ({totalCartCount})</Link>
      </h2>
      {products.bookList.map((product) => {
        const { id, name, author, price, image } = product;

        return (
          <div key={id} className="book">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Yazar: {author}</p>
              <p>Fiyat: &#8378; {price}</p>
              <button onClick={() => addToCart(product)}>Sepete Ekle</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
