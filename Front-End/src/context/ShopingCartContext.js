import { createContext, useContext, useEffect, useState } from "react";

const ShopingCartContext = createContext({});

const initialCartItems = localStorage.getItem("cartShoping")
  ? JSON.parse(localStorage.getItem("cartShoping"))
  : [];
const ShopingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cartShoping", JSON.stringify(cartItems));
  }, [cartItems]);

  const getNumberOfAllItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0) || 0;
  };
  
  const getConfirm = () => {
    setCartItems([]);
   
  };

  const getNumberOfItems = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const addToCart = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const deleteFromCart = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        getNumberOfItems,
        addToCart,
        deleteFromCart,
        removeItem,
        getNumberOfAllItems,
        getConfirm,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
};

export default ShopingCartProvider;

export const useShopingCart = () => {
  return useContext(ShopingCartContext);
};
