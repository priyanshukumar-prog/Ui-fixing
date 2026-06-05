import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState('onboarding'); // onboarding | home | menu | item | cart | checkout | loyalty | orders | profile | offers
  const [orderMode, setOrderMode] = useState('dine-in'); // dine-in | takeaway | delivery
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [user, setUser] = useState(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [notification, setNotification] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(null);

  const addToCart = (item, qty = 1) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...item, qty }];
    });
    showNotification(`${item.name} added to cart!`, 'success');
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const updateQty = (itemId, delta) => {
    setCart(prev => {
      const updated = prev.map(i => i.id === itemId ? { ...i, qty: i.qty + delta } : i);
      return updated.filter(i => i.qty > 0);
    });
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const login = (userData) => {
    setUser(userData);
    setLoyaltyPoints(userData.points || 320);
    setScreen('home');
  };

  const placeOrder = () => {
    const pointsEarned = Math.floor(cartTotal / 10);
    setLoyaltyPoints(prev => prev + pointsEarned);
    setOrderPlaced({ items: [...cart], total: cartTotal, pointsEarned, mode: orderMode, id: 'BS' + Date.now().toString().slice(-6) });
    setCart([]);
    setScreen('orders');
    showNotification(`Order placed! +${pointsEarned} Singh Coins earned!`, 'success');
  };

  return (
    <AppContext.Provider value={{
      screen, setScreen,
      orderMode, setOrderMode,
      cart, addToCart, removeFromCart, updateQty, cartTotal, cartCount,
      selectedItem, setSelectedItem,
      user, login,
      loyaltyPoints, setLoyaltyPoints,
      activeCategory, setActiveCategory,
      notification, showNotification,
      orderPlaced, placeOrder,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
