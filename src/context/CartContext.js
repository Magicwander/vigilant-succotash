import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (flower) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === flower.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === flower.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...flower, quantity: 1 }];
    });
  };

  const removeFromCart = (flowerId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== flowerId));
  };

  const updateQuantity = (flowerId, quantity) => {
    if (quantity < 1) {
      removeFromCart(flowerId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === flowerId ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace('LKR', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
