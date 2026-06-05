import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const spiceLevels = ['Mild 😊', 'Medium 🌶️', 'Hot 🔥', 'Extra Hot 🌋'];
const addOns = [
  { id: 1, name: 'Extra Cheese', price: 30, emoji: '🧀' },
  { id: 2, name: 'Masala Fries', price: 79, emoji: '🍟' },
  { id: 3, name: 'Signature Sauce', price: 20, emoji: '🫙' },
  { id: 4, name: 'Mango Lassi', price: 79, emoji: '🥭' },
];

export default function ItemScreen() {
  const { selectedItem: item, setScreen, addToCart } = useApp();
  const [qty, setQty] = useState(1);
  const [spice, setSpice] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  if (!item) { setScreen('menu'); return null; }

  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const addOnsTotal = addOns.filter(a => selectedAddOns.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const total = (item.price + addOnsTotal) * qty;
  const pointsToEarn = Math.floor(total / 10);

  const handleAdd = () => {
    addToCart({ ...item, customSpice: spiceLevels[spice], addOns: selectedAddOns, price: item.price + addOnsTotal }, qty);
    setScreen('menu');
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${item.bgColor} pt-12 pb-8 relative overflow-hidden`}>
        <button
          onClick={() => setScreen('menu')}
          className="absolute top-12 left-5 bg-white/20 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl backdrop-blur-sm z-10"
        >
          ‹
        </button>
        <div className="absolute -bottom-6 -right-6 text-[120px] opacity-30">{item.image}</div>
        <div className="text-center pt-6 relative z-10">
          <span className="text-8xl">{item.image}</span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 bg-cream -mt-6 rounded-t-3xl px-5 pt-6 pb-32 overflow-y-auto">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-3">
          {item.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-lg">{tag}</span>
          ))}
          <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${item.isVeg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
          </span>
        </div>

        <h1 className="font-poppins font-black text-charcoal-800 text-2xl mb-1">{item.name}</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Rating + Calories */}
        <div className="flex gap-4 mb-5">
          <div className="flex items-center gap-1 bg-white rounded-xl px-3 py-2 shadow-sm">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-sm text-gray-800">{item.rating}</span>
            <span className="text-gray-400 text-xs">({item.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl px-3 py-2 shadow-sm">
            <span className="text-sm">🔥</span>
            <span className="font-semibold text-sm text-gray-800">{item.calories}</span>
            <span className="text-gray-400 text-xs">kcal</span>
          </div>
        </div>

        {/* Spice Level */}
        {item.customizable && (
          <div className="mb-5">
            <h3 className="font-poppins font-semibold text-gray-800 mb-3">Spice Level</h3>
            <div className="flex gap-2">
              {spiceLevels.map((level, i) => (
                <button
                  key={i}
                  onClick={() => setSpice(i)}
                  className={`flex-1 text-center py-2 rounded-xl text-xs font-medium transition-all ${
                    spice === i
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add-ons */}
        <div className="mb-5">
          <h3 className="font-poppins font-semibold text-gray-800 mb-3">Make it a meal 🍟</h3>
          <div className="space-y-2">
            {addOns.map(addOn => (
              <div
                key={addOn.id}
                onClick={() => toggleAddOn(addOn.id)}
                className={`flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border-2 cursor-pointer transition-all ${
                  selectedAddOns.includes(addOn.id) ? 'border-orange-400 bg-orange-50' : 'border-transparent'
                }`}
              >
                <span className="text-2xl">{addOn.emoji}</span>
                <span className="flex-1 font-medium text-gray-800 text-sm">{addOn.name}</span>
                <span className="text-orange-600 font-bold text-sm">+₹{addOn.price}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedAddOns.includes(addOn.id) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
                }`}>
                  {selectedAddOns.includes(addOn.id) && <span className="text-white text-xs">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Points preview */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-2xl">👑</span>
          <div>
            <p className="text-yellow-800 font-semibold text-sm">Earn {pointsToEarn} Singh Coins on this order</p>
            <p className="text-yellow-600 text-xs">Redeemable on next visit</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-5 py-4">
        <div className="flex gap-3 items-center">
          {/* Qty */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-3 py-2">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="text-orange-500 font-bold text-xl w-7 h-7 flex items-center justify-center"
            >
              −
            </button>
            <span className="font-poppins font-bold text-gray-800 w-6 text-center">{qty}</span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="text-orange-500 font-bold text-xl w-7 h-7 flex items-center justify-center"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-bold py-4 rounded-2xl flex items-center justify-between px-5 shadow-lg shadow-orange-200 active:scale-95 transition-all"
          >
            <span>Add to Cart</span>
            <span>₹{total}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
