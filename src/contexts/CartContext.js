import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

//sayfa yenilendiğinde sepetin boşalmaması için localStorage yazdırdım.
const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, findCartItems) => {
    if (!findCartItems) {
      //sepete ilk defa ekleniyorsa burası çalışacak
      return setItems((i) => [...i, product]);
    }
    //daha önce eklenmişse ve kaldırmak için ise burası
    const filtred = items.filter((item) => item.id !== findCartItems.id);
    setItems(filtred);
  };

  //sil
  const clearCart = (cartId) => {
    const filtredCart = items.filter((i) => i.id !== cartId);
    setItems(filtredCart);
  };

  //tümünü sil
  const clearAllCart = () => {
    //tam emin değilim,kod çalışıyor ama yanlış olabilir.
    setItems([]);
  };

  const values = {
    items,
    setItems,
    addToCart,
    clearCart,
    clearAllCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
