import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // holds items in cart

  // subtotal derived from products
  const subTotal = useMemo(() => {
    return products.reduce((total, item) => total + item.product.price, 0);
  }, [products]);

  const addToCart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <CartContext.Provider value={{ products, setProducts, subTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
