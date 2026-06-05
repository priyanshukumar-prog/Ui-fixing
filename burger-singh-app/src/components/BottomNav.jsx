import React from 'react';
import { useApp } from '../context/AppContext';

const navItems = [
  { id: 'home', label: 'Home', emoji: '🏠' },
  { id: 'menu', label: 'Menu', emoji: '🍔' },
  { id: 'offers', label: 'Offers', emoji: '🎁' },
  { id: 'loyalty', label: 'Rewards', emoji: '👑' },
  { id: 'profile', label: 'Profile', emoji: '👤' },
];

export default function BottomNav() {
  const { screen, setScreen, cartCount } = useApp();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-40 max-w-md mx-auto">
      <div className="flex justify-around items-center py-2 px-2">
        {navItems.map(item => {
          const active = screen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl transition-all ${active ? 'bg-orange-50' : ''}`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className={`text-xs font-medium ${active ? 'text-orange-500' : 'text-gray-400'}`}>
                {item.label}
              </span>
              {active && <div className="w-1 h-1 rounded-full bg-orange-500 mt-0.5" />}
            </button>
          );
        })}
      </div>
      {/* iOS safe area */}
      <div className="h-safe-area-inset-bottom" />
    </div>
  );
}
