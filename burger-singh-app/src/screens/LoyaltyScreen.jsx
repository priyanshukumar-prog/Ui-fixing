import React from 'react';
import { useApp } from '../context/AppContext';
import { loyaltyTiers } from '../data/menuData';

const rewardsCatalog = [
  { id: 1, name: 'Free Masala Fries', points: 100, emoji: '🍟', category: 'Food' },
  { id: 2, name: '₹50 Off on Order', points: 50, emoji: '💰', category: 'Discount' },
  { id: 3, name: 'Free Mango Lassi', points: 150, emoji: '🥭', category: 'Beverage' },
  { id: 4, name: 'Free Burger', points: 300, emoji: '🍔', category: 'Food' },
  { id: 5, name: '20% Off Combo', points: 200, emoji: '🎁', category: 'Discount' },
  { id: 6, name: 'Birthday Treat', points: 0, emoji: '🎂', category: 'Special' },
];

export default function LoyaltyScreen() {
  const { loyaltyPoints, user, setScreen } = useApp();

  const currentTierIdx = loyaltyTiers.findIndex(
    t => loyaltyPoints >= t.minPoints && loyaltyPoints <= t.maxPoints
  );
  const currentTier = loyaltyTiers[currentTierIdx] || loyaltyTiers[0];
  const nextTier = loyaltyTiers[currentTierIdx + 1];
  const progressPct = nextTier
    ? ((loyaltyPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    : 100;

  return (
    <div className="min-h-screen bg-cream pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 pt-12 pb-24 px-5 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <h1 className="font-poppins font-black text-white text-2xl mb-1">Singh Rewards 👑</h1>
          <p className="text-white/70 text-sm">Khao. Kamao. Enjoy karo.</p>
        </div>
      </div>

      {/* Tier Card */}
      <div className="mx-5 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Current Tier</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl">{currentTier.emoji}</span>
                <h2 className="font-poppins font-black text-xl" style={{ color: currentTier.color }}>
                  {currentTier.name}
                </h2>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Your Coins</p>
              <p className="font-poppins font-black text-3xl text-charcoal-800">{loyaltyPoints}</p>
            </div>
          </div>

          {/* Progress Bar */}
          {nextTier && (
            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                <span>{loyaltyPoints} coins</span>
                <span>{nextTier.minPoints} coins for {nextTier.name}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, progressPct)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">
                {nextTier.minPoints - loyaltyPoints} more coins to {nextTier.name} {nextTier.emoji}
              </p>
            </div>
          )}

          {/* Current Perks */}
          <div className="mt-4 bg-orange-50 rounded-2xl p-3">
            <p className="text-orange-700 font-semibold text-xs mb-2">Your {currentTier.name} perks:</p>
            <div className="flex flex-wrap gap-2">
              {currentTier.perks.map(perk => (
                <span key={perk} className="text-xs bg-white text-orange-600 border border-orange-200 px-2.5 py-1 rounded-lg">
                  ✓ {perk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tiers Overview */}
      <div className="mt-5 px-5">
        <h2 className="font-poppins font-bold text-charcoal-800 text-lg mb-3">Tier Journey 🏆</h2>
        <div className="overflow-x-auto scroll-hide flex gap-3 pb-2">
          {loyaltyTiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`flex-shrink-0 w-36 rounded-2xl p-4 border-2 ${idx === currentTierIdx ? 'border-orange-400 bg-orange-50' : 'border-gray-100 bg-white'}`}
            >
              <div className="text-3xl mb-2">{tier.emoji}</div>
              <p className="font-poppins font-bold text-sm mb-1" style={{ color: tier.color }}>{tier.name}</p>
              <p className="text-gray-400 text-xs">{tier.minPoints}+ coins</p>
              <div className="mt-2 space-y-1">
                {tier.perks.slice(0, 2).map(p => (
                  <p key={p} className="text-xs text-gray-600">• {p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="mt-5 px-5">
        <h2 className="font-poppins font-bold text-charcoal-800 text-lg mb-3">Redeem Rewards</h2>
        <div className="grid grid-cols-2 gap-3">
          {rewardsCatalog.map(reward => {
            const canRedeem = loyaltyPoints >= reward.points;
            return (
              <div key={reward.id} className={`bg-white rounded-2xl p-4 shadow-sm border ${canRedeem ? 'border-green-200' : 'border-gray-100'} relative overflow-hidden`}>
                {!canRedeem && <div className="absolute inset-0 bg-white/60 z-10 rounded-2xl" />}
                <div className="text-3xl mb-2">{reward.emoji}</div>
                <p className="font-poppins font-semibold text-gray-800 text-sm leading-snug mb-2">{reward.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">
                    {reward.points === 0 ? 'FREE' : `${reward.points} coins`}
                  </span>
                  <button
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl ${canRedeem ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {canRedeem ? 'Redeem' : 'Locked 🔒'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Earn More CTA */}
      <div className="mx-5 mt-5">
        <button
          onClick={() => setScreen('menu')}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-poppins font-bold py-4 rounded-2xl shadow-lg shadow-yellow-200 active:scale-95 transition-all"
        >
          Order Now & Earn Coins 🍔
        </button>
      </div>

      {/* How it works */}
      <div className="mx-5 mt-4 bg-white rounded-3xl p-5 shadow-sm">
        <h3 className="font-poppins font-bold text-gray-800 mb-3">How Singh Coins Work</h3>
        <div className="space-y-3">
          {[
            { emoji: '🍔', title: 'Order via App', desc: 'Earn 1 coin per ₹10 spent' },
            { emoji: '🏪', title: 'Dine-In Bonus', desc: '2X coins on all dine-in orders' },
            { emoji: '👑', title: 'Redeem', desc: 'Use coins to unlock free food & discounts' },
            { emoji: '🎂', title: 'Birthday Bonus', desc: 'Free meal on your birthday!' },
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
      </div>
    </div>
  );
}
