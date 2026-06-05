import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { menuItems, offers, categories } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';

const orderModes = [
  { id: 'dine-in', label: 'Dine-In', emoji: '🏪', desc: 'Eat here' },
  { id: 'takeaway', label: 'Takeaway', emoji: '🛍️', desc: 'Pack & go' },
  { id: 'delivery', label: 'Delivery', emoji: '🛵', desc: 'To your door' },
];

export default function HomeScreen() {
  const { user, orderMode, setOrderMode, loyaltyPoints, setScreen, setSelectedItem, addToCart } = useApp();
  const [offerIndex, setOfferIndex] = useState(0);

  const popularItems = menuItems.filter(i => ['Bestseller', 'Popular'].some(t => i.tags.includes(t)));
  const currentOffer = offers[offerIndex % offers.length];

  return (
    <div className="min-h-screen bg-bs-gray-50 pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-bs-orange-500 via-red-500 to-bs-red-500 pt-12 pb-20 px-5 relative overflow-hidden shadow-md">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute top-16 -right-2 w-16 h-16 bg-white/10 rounded-full" />

        {/* Top row */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1 font-inter">Welcome back</p>
            <h1 className="font-poppins font-black text-white text-2xl">
              {user?.isGuest ? 'Singh Sahab! 👋' : `${user?.name?.split(' ')[0]} Ji! 👋`}
            </h1>
            <button
              onClick={() => setScreen('loyalty')}
              className="mt-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 font-inter hover:bg-white/30 transition-colors"
            >
              <span>👑</span>
              <span>{loyaltyPoints} Singh Coins</span>
              <span className="text-white/60">•</span>
              <span className="text-bs-gold-200">View Rewards</span>
            </button>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center text-white text-lg hover:bg-white/30 transition-colors">
              🔔
            </button>
          </div>
        </div>

        {/* Location */}
        <button className="relative z-10 bg-white/15 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 flex items-center gap-2 text-white w-full hover:bg-white/25 transition-colors font-inter">
          <span>📍</span>
          <div className="flex-1 text-left">
            <p className="text-xs text-white/60">Nearest outlet</p>
            <p className="text-sm font-semibold">Burger Singh, Connaught Place</p>
          </div>
          <span className="text-white/60 text-xs">Change ›</span>
        </button>
      </div>

      {/* Order Mode Selector */}
      <div className="mx-5 -mt-10 relative z-10">
        <div className="bg-white rounded-lg shadow-md shadow-black/10 p-2 flex gap-1 border border-bs-gray-200">
          {orderModes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setOrderMode(mode.id)}
              className={`flex-1 flex flex-col items-center py-3 rounded-md transition-all font-inter ${
                orderMode === mode.id
                  ? 'bg-gradient-to-br from-bs-orange-500 via-red-500 to-bs-red-500 text-white shadow-md shadow-bs-red-500/30'
                  : 'text-bs-gray-500 hover:bg-bs-gray-50'
              }`}
            >
              <span className="text-xl mb-1">{mode.emoji}</span>
              <span className="text-xs font-semibold font-poppins">{mode.label}</span>
              <span className={`text-xs mt-0.5 ${orderMode === mode.id ? 'text-white/70' : 'text-bs-gray-500'}`}>
                {mode.desc}
              </span>
            </button>
          ))}
        </div>
        {orderMode === 'dine-in' && (
          <div className="mt-2 bg-bs-success/10 border border-bs-success rounded-md px-4 py-2 flex items-center gap-2">
            <span>🎁</span>
            <p className="text-bs-success font-semibold text-xs font-inter">Dine-in exclusive: Extra 10% OFF + 2X Singh Coins today!</p>
          </div>
        )}
      </div>

      {/* Offers Carousel */}
      <div className="mt-6 px-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-poppins font-bold text-bs-gray-900 text-lg">Today's Deals 🔥</h2>
          <button onClick={() => setScreen('offers')} className="text-bs-orange-500 hover:text-bs-orange-700 text-sm font-semibold font-inter transition-colors">See all</button>
        </div>

        <div className="overflow-x-auto scroll-hide flex gap-3 pb-2">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`flex-shrink-0 w-72 bg-gradient-to-br ${offer.bgClass} rounded-lg p-5 text-white relative overflow-hidden cursor-pointer active:scale-95 hover:shadow-lg transition-all shadow-md`}
              onClick={() => setScreen('offers')}
            >
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-30">{offer.emoji}</div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">{offer.emoji}</span>
                  {offer.code && (
                    <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded-sm font-inter">{offer.code}</span>
                  )}
                </div>
                <p className="text-white/80 text-xs font-semibold mb-0.5 font-inter">{offer.title}</p>
                <p className="font-poppins font-black text-2xl mb-1">{offer.subtitle}</p>
                <p className="text-white/70 text-xs font-inter">{offer.validTill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="mt-6 px-5">
        <h2 className="font-poppins font-bold text-bs-gray-900 text-lg mb-3">Browse Menu</h2>
        <div className="overflow-x-auto scroll-hide flex gap-2 pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setScreen('menu'); }}
              className="flex-shrink-0 flex items-center gap-2 bg-white border border-bs-gray-200 shadow-xs rounded-md px-4 py-2.5 hover:border-bs-orange-400 hover:bg-bs-orange-50 active:scale-95 transition-all font-inter text-bs-gray-700 text-sm font-medium"
            >
              <span>{cat.emoji}</span>
              <span className="whitespace-nowrap">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Items */}
      <div className="mt-6 px-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-poppins font-bold text-bs-gray-900 text-lg">Most Loved 💛</h2>
          <button onClick={() => setScreen('menu')} className="text-bs-orange-500 hover:text-bs-orange-700 text-sm font-semibold font-inter transition-colors">View all</button>
        </div>
        <div className="space-y-3">
          {popularItems.slice(0, 4).map(item => (
            <MenuItemCard
              key={item.id}
              item={item}
              onTap={() => { setSelectedItem(item); setScreen('item'); }}
              onAdd={() => addToCart(item)}
            />
          ))}
        </div>
      </div>

      {/* Dine-in CTA Banner */}
      <div className="mx-5 mt-6">
        <div className="bg-gradient-to-br from-bs-gray-900 to-bs-gray-800 rounded-lg p-5 text-white relative overflow-hidden shadow-lg">
          <div className="absolute -top-4 -right-4 text-7xl opacity-20">🏪</div>
          <div className="relative z-10">
            <p className="text-bs-orange-400 text-xs font-bold uppercase tracking-wider mb-1 font-inter">Order at outlet</p>
            <h3 className="font-poppins font-bold text-xl mb-2">Skip the queue,<br />Order on app</h3>
            <p className="text-bs-gray-400 text-sm mb-4 font-inter">Place order via app → show QR at counter → food ready when you arrive!</p>
            <button
              onClick={() => setScreen('menu')}
              className="bg-gradient-to-r from-bs-orange-500 via-red-500 to-bs-red-500 text-white font-semibold px-6 py-3 rounded-md text-sm active:scale-95 hover:shadow-lg transition-all shadow-md shadow-bs-red-500/30 font-inter"
            >
              Order Now & Save 30% 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
