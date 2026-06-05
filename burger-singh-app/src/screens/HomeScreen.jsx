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
    <div className="min-h-screen bg-cream pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-red-700 pt-12 pb-20 px-5 relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute top-16 -right-2 w-16 h-16 bg-white/10 rounded-full" />

        {/* Top row */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">Welcome back</p>
            <h1 className="font-poppins font-black text-white text-2xl">
              {user?.isGuest ? 'Singh Sahab! 👋' : `${user?.name?.split(' ')[0]} Ji! 👋`}
            </h1>
            <button
              onClick={() => setScreen('loyalty')}
              className="mt-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5"
            >
              <span>👑</span>
              <span>{loyaltyPoints} Singh Coins</span>
              <span className="text-white/60">•</span>
              <span className="text-yellow-200">View Rewards</span>
            </button>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg">
              🔔
            </button>
          </div>
        </div>

        {/* Location */}
        <button className="relative z-10 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-2 text-white w-full">
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
        <div className="bg-white rounded-3xl shadow-xl shadow-orange-100 p-2 flex gap-1">
          {orderModes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setOrderMode(mode.id)}
              className={`flex-1 flex flex-col items-center py-3 rounded-2xl transition-all ${
                orderMode === mode.id
                  ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-200'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl mb-1">{mode.emoji}</span>
              <span className="text-xs font-semibold font-poppins">{mode.label}</span>
              <span className={`text-xs mt-0.5 ${orderMode === mode.id ? 'text-white/70' : 'text-gray-400'}`}>
                {mode.desc}
              </span>
            </button>
          ))}
        </div>
        {orderMode === 'dine-in' && (
          <div className="mt-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-2 flex items-center gap-2">
            <span>🎁</span>
            <p className="text-green-700 text-xs font-medium">Dine-in exclusive: Extra 10% OFF + 2X Singh Coins today!</p>
          </div>
        )}
      </div>

      {/* Offers Carousel */}
      <div className="mt-6 px-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-poppins font-bold text-charcoal-800 text-lg">Today's Deals 🔥</h2>
          <button onClick={() => setScreen('offers')} className="text-orange-500 text-sm font-medium">See all</button>
        </div>

        <div className="overflow-x-auto scroll-hide flex gap-3 pb-2">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`flex-shrink-0 w-72 bg-gradient-to-br ${offer.bgClass} rounded-3xl p-5 text-white relative overflow-hidden cursor-pointer active:scale-95 transition-all`}
              onClick={() => setScreen('offers')}
            >
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-30">{offer.emoji}</div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">{offer.emoji}</span>
                  {offer.code && (
                    <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded-lg">{offer.code}</span>
                  )}
                </div>
                <p className="text-white/80 text-xs font-medium mb-0.5">{offer.title}</p>
                <p className="font-poppins font-black text-2xl mb-1">{offer.subtitle}</p>
                <p className="text-white/70 text-xs">{offer.validTill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="mt-6 px-5">
        <h2 className="font-poppins font-bold text-charcoal-800 text-lg mb-3">Browse Menu</h2>
        <div className="overflow-x-auto scroll-hide flex gap-2 pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setScreen('menu'); }}
              className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-2xl px-4 py-2.5 hover:border-orange-300 hover:bg-orange-50 active:scale-95 transition-all"
            >
              <span>{cat.emoji}</span>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Items */}
      <div className="mt-6 px-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-poppins font-bold text-charcoal-800 text-lg">Most Loved 💛</h2>
          <button onClick={() => setScreen('menu')} className="text-orange-500 text-sm font-medium">View all</button>
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
        <div className="bg-gradient-to-br from-charcoal-800 to-gray-900 rounded-3xl p-5 text-white relative overflow-hidden">
          <div className="absolute -top-4 -right-4 text-7xl opacity-20">🏪</div>
          <div className="relative z-10">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Order at outlet</p>
            <h3 className="font-poppins font-bold text-xl mb-2">Skip the queue,<br />Order on app</h3>
            <p className="text-gray-400 text-sm mb-4">Place order via app → show QR at counter → food ready when you arrive!</p>
            <button
              onClick={() => setScreen('menu')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-6 py-3 rounded-xl text-sm active:scale-95 transition-all shadow-lg shadow-orange-900/30"
            >
              Order Now & Save 30% 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
