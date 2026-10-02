import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const STORAGE_KEY = 'brightworld-cart';

export const useCart = () => useContext(CartContext);

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

// The cart is saved to localStorage, so it survives page refreshes and return visits.
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Storage can be unavailable (private mode, quota); the in-memory cart still works.
    }
  }, [cart]);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
