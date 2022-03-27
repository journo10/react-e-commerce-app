import { useState, createContext, useContext } from "react";
import { data } from "../data/data";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [products, setProducts] = useState({
    bookList: data,
    cart: [],
  });

  //sepete ekle
  const addToCart = (book) => {
    setProducts({
      ...products,
      cart: products.cart.find((cartItem) => cartItem.id === book.id)
        ? products.cart.map((cItem) =>
            cItem.id === book.id ? { ...cItem, count: cItem.count + 1 } : cItem
          )
        : [...products.cart, { ...book, count: 1 }],
    });
  };

  //increase
  const inc = (id) => {
    setProducts({
      ...products,
      cart: products.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  //decrease
  const dec = (id) => {
    setProducts({
      ...products,
      cart: products.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  //sepetten çıkar
  const removeCart = (id) => {
    setProducts({
      ...products,
      cart: products.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  //Toplam Sepet Tutarı
  const totalCart = products.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  //Sepeteki ürün sayısı
  const totalCartCount = products.cart.reduce(
    (total, book) => (total = total + book.count), 0);

  const values = {
    products,
    addToCart,
    inc,
    dec,
    removeCart,
    totalCart,
    totalCartCount,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

const useBook = () => useContext(BookContext);

export { useBook, BookProvider };
