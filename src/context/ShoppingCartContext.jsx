import { createContext, useState, useContext } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, amount: item.amount + 1, totalPrice: item.totalPrice + item.price }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, amount: 1, totalPrice: newItem.price }];
      }
    });
  };

  const removeItem = (itemToRemove) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToRemove.id);
      if (existingItem) {
        if (existingItem.amount > 1) {
          return prevItems.map(item =>
            item.id === itemToRemove.id
              ? { ...item, amount: item.amount - 1, totalPrice: item.totalPrice - item.price }
              : item
          );
        } else {
          return prevItems.filter(item => item.id !== itemToRemove.id);
        }
      }
      return prevItems;
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
