import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { menuItems, categories } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';

export default function MenuScreen() {
  const { setScreen, setSelectedItem, addToCart } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = menuItems.filter(item => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory;
    const searchMatch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    const vegMatch = !vegOnly || item.isVeg;
    return catMatch && searchMatch && vegMatch;
  });

  return (
    <div className="min-h-screen bg-cream pb-36">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 pt-12 pb-6 px-5">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setScreen('home')} className="text-white/80 text-2xl">‹</button>
          <h1 className="font-poppins font-black text-white text-2xl flex-1">Our Menu</h1>
          <span className="text-white text-2xl">🍔</span>
        </div>

        {/* Search */}
        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center gap-3 px-4 py-3">
          <span className="text-white/60">🔍</span>
          <input
            type="text"
            placeholder="Search burgers, wraps, sides..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-white/50 text-sm focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-white/60">✕</button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 bg-white shadow-sm z-20 px-5 py-3">
        <div className="overflow-x-auto scroll-hide flex gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-5 py-3 flex items-center gap-3">
        <button
          onClick={() => setVegOnly(v => !v)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
            vegOnly ? 'bg-green-50 border-green-400 text-green-700' : 'bg-white border-gray-200 text-gray-600'
          }`}
        >
          <span>🟢</span> Veg Only
        </button>
        <span className="text-gray-400 text-sm">{filtered.length} items</span>
      </div>

      {/* Items */}
      <div className="px-5 space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-5xl mb-3">😕</div>
            <p className="font-medium">No items found</p>
            <p className="text-sm">Try a different search or filter</p>
          </div>
        ) : (
          filtered.map(item => (
            <MenuItemCard
              key={item.id}
              item={item}
              onTap={() => { setSelectedItem(item); setScreen('item'); }}
              onAdd={() => addToCart(item)}
            />
          ))
        )}
      </div>
    </div>
  );
}
