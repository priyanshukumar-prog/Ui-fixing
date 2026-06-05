import React from 'react';
import { useApp } from '../context/AppContext';

export default function CartButton() {
  const { cartCount, cartTotal, setScreen } = useApp();
  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-4 z-30">
      <button
        onClick={() => setScreen('cart')}
        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl shadow-xl shadow-orange-300 flex items-center justify-between px-5 py-4 transition-all active:scale-95"
      >
        <div className="bg-white/20 rounded-xl px-3 py-1 text-sm font-bold">
          {cartCount} item{cartCount > 1 ? 's' : ''}
        </div>
        <span className="font-poppins font-semibold text-base">View Cart</span>
        <span className="font-poppins font-bold text-base">₹{cartTotal}</span>
      </button>
    </div>
  );
}
