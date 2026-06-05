import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { offers } from '../data/menuData';

export default function OffersScreen() {
  const { setScreen, orderMode, showNotification } = useApp();
  const [copiedCode, setCopiedCode] = useState(null);

  const copyCode = (code) => {
    setCopiedCode(code);
    showNotification(`Code ${code} copied!`, 'success');
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-cream pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 pt-12 pb-8 px-5 relative overflow-hidden">
        <div className="absolute -bottom-6 -right-6 text-8xl opacity-20">🎁</div>
        <div className="relative z-10">
          <h1 className="font-poppins font-black text-white text-2xl mb-1">Deals & Offers</h1>
          <p className="text-white/70 text-sm">Exclusive offers sirf app users ke liye! 🤫</p>
        </div>
      </div>

      <div className="px-5 py-5 space-y-4">
        {/* App Exclusive Banner */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-5 text-white relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-7xl opacity-20">📱</div>
          <div className="relative z-10">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">APP EXCLUSIVE</span>
            <h2 className="font-poppins font-black text-2xl mt-2 mb-1">Order on App,<br />Save Every Time</h2>
            <p className="text-white/80 text-sm">These offers are only available when you order directly through our app. Aggregators pe nahi milega!</p>
          </div>
        </div>

        {/* Offers List */}
        {offers.map(offer => (
          <div key={offer.id} className={`bg-gradient-to-br ${offer.bgClass} rounded-3xl p-5 text-white relative overflow-hidden`}>
            <div className="absolute -bottom-6 -right-6 text-8xl opacity-20">{offer.emoji}</div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{offer.emoji}</span>
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{offer.title}</p>
                    <h3 className="font-poppins font-black text-2xl">{offer.subtitle}</h3>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-4">{offer.description}</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-white/60 text-xs">⏱ {offer.validTill}</span>
                {offer.code && (
                  <button
                    onClick={() => copyCode(offer.code)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${copiedCode === offer.code ? 'bg-green-500 text-white' : 'bg-white/20 text-white border border-white/30'}`}
                  >
                    {copiedCode === offer.code ? '✓ Copied!' : `📋 ${offer.code}`}
                  </button>
                )}
                <button
                  onClick={() => setScreen('menu')}
                  className="bg-white text-gray-800 font-bold px-4 py-2 rounded-xl text-sm active:scale-95 transition-all"
                >
                  Order Now →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dine-in exclusive section */}
        <div className="bg-white rounded-3xl shadow-sm p-5">
          <h3 className="font-poppins font-bold text-gray-800 mb-1">Why Dine-In via App? 🤔</h3>
          <p className="text-gray-400 text-sm mb-4">Skip the queue + save more = more happy eating!</p>
          <div className="space-y-3">
            {[
              { emoji: '⚡', title: 'Order ahead, skip wait', desc: 'Place order before arriving. Food ready when you sit.' },
              { emoji: '💰', title: 'Exclusive discounts', desc: 'Up to 30% OFF only on app orders at outlet.' },
              { emoji: '👑', title: '2X Singh Coins', desc: 'Double loyalty points on all dine-in orders.' },
              { emoji: '📊', title: 'Your order history', desc: 'Reorder favourites in one tap. No need to repeat.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setScreen('menu')}
            className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-bold py-3.5 rounded-2xl active:scale-95 transition-all shadow-md shadow-orange-200"
          >
            Order for Dine-In 🏪
          </button>
        </div>

        {/* Referral */}
        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🤝</span>
            <div>
              <h3 className="font-poppins font-black text-xl">Refer & Earn</h3>
              <p className="text-white/80 text-sm">Get ₹100 for every friend you bring to Singh!</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-3 flex items-center justify-between">
            <span className="font-bold text-white">SINGH-REF-A9K2</span>
            <button onClick={() => copyCode('SINGH-REF-A9K2')} className="bg-white text-green-700 font-bold text-xs px-3 py-1.5 rounded-lg">
              {copiedCode === 'SINGH-REF-A9K2' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
