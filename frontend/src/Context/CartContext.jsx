import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [itemId, setItemId] = useState([])
  console.log(products);

  const addToCart = (item) => {
    setProducts([...products, item]);
    setItemId(item._id)
  };

  const subTotal = useMemo(() => {
    return products.reduce(
      (total, item) => total + (item.product?.productPrice || item.productPrice || 0),
      0
    );
  }, [products]);

  return (
    <CartContext.Provider
      value={{ products, setProducts, subTotal, addToCart, itemId }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
