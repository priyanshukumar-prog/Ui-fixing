import React from 'react';
import { useApp } from '../context/AppContext';
import { loyaltyTiers } from '../data/menuData';

export default function ProfileScreen() {
  const { user, loyaltyPoints, setScreen, setScreen: navigate } = useApp();

  const currentTier = loyaltyTiers.find(
    t => loyaltyPoints >= t.minPoints && loyaltyPoints <= t.maxPoints
  ) || loyaltyTiers[0];

  const menuItems = [
    { emoji: '📦', label: 'My Orders', action: () => setScreen('orders') },
    { emoji: '👑', label: 'Singh Rewards', action: () => setScreen('loyalty') },
    { emoji: '🎁', label: 'Offers & Deals', action: () => setScreen('offers') },
    { emoji: '📍', label: 'Saved Addresses', action: () => {} },
    { emoji: '💳', label: 'Payment Methods', action: () => {} },
    { emoji: '🔔', label: 'Notifications', action: () => {} },
    { emoji: '🤝', label: 'Refer & Earn', action: () => setScreen('offers') },
    { emoji: '❓', label: 'Help & Support', action: () => {} },
    { emoji: '⚙️', label: 'Settings', action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-cream pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-charcoal-800 to-gray-900 pt-12 pb-20 px-5 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white">
            {user?.name?.[0] || 'S'}
          </div>
          <div>
            <h1 className="font-poppins font-black text-white text-xl">{user?.name || 'Singh Sahab'}</h1>
            <p className="text-gray-400 text-sm">{user?.phone ? `+91 ${user.phone}` : 'Guest User'}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span>{currentTier.emoji}</span>
              <span className="text-xs font-semibold" style={{ color: currentTier.color }}>{currentTier.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mx-5 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Singh Coins', value: loyaltyPoints, emoji: '👑' },
            { label: 'Orders', value: '12', emoji: '📦' },
            { label: 'Saved', value: '₹486', emoji: '💰' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <p className="font-poppins font-black text-charcoal-800 text-xl">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 px-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '🔄', label: 'Reorder', action: () => setScreen('menu') },
            { emoji: '🎁', label: 'Refer Friend', action: () => setScreen('offers') },
            { emoji: '⭐', label: 'Rate Us', action: () => {} },
          ].map(action => (
            <button
              key={action.label}
              onClick={action.action}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all"
            >
              <span className="text-2xl">{action.emoji}</span>
              <span className="text-xs font-semibold text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="mt-4 mx-5 bg-white rounded-3xl shadow-sm overflow-hidden">
        {menuItems.map((item, idx) => (
          <div key={item.label}>
            {idx > 0 && <div className="h-px bg-gray-100 mx-4" />}
            <button
              onClick={item.action}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 active:bg-gray-100 transition-all"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="flex-1 font-medium text-gray-700 text-sm">{item.label}</span>
              <span className="text-gray-300 text-lg">›</span>
            </button>
          </div>
        ))}
      </div>

      {/* App Info */}
      <div className="mt-4 mx-5 text-center text-gray-400 text-xs pb-4">
        <p className="font-poppins font-semibold text-gray-300 text-base mb-1">🍔 Burger Singh</p>
        <p>India ka sabse mast burger app</p>
        <p className="mt-1">v2.1.0 • Made with ❤️ in India</p>
      </div>
    </div>
  );
}
