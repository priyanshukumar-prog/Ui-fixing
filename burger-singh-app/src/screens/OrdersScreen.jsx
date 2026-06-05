import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const statusSteps = {
  'dine-in': ['Order Placed', 'Confirmed', 'Preparing', 'Ready at Counter'],
  takeaway: ['Order Placed', 'Confirmed', 'Preparing', 'Ready for Pickup'],
  delivery: ['Order Placed', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'],
};

export default function OrdersScreen() {
  const { orderPlaced, setScreen } = useApp();
  const [currentStep, setCurrentStep] = useState(2);

  if (!orderPlaced) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-8 text-center">
        <div className="text-7xl mb-6">📦</div>
        <h2 className="font-poppins font-bold text-charcoal-800 text-2xl mb-2">No orders yet</h2>
        <p className="text-gray-400 mb-8">Your order history will appear here once you place an order.</p>
        <button
          onClick={() => setScreen('menu')}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-200"
        >
          Order Now 🍔
        </button>
      </div>
    );
  }

  const steps = statusSteps[orderPlaced.mode] || statusSteps['dine-in'];
  const modeEmoji = { 'dine-in': '🏪', takeaway: '🛍️', delivery: '🛵' };

  return (
    <div className="min-h-screen bg-cream pb-24">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-green-500 to-teal-600 pt-12 pb-16 px-5 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[200px]">✓</div>
        <div className="relative z-10">
          <div className="text-6xl mb-3 animate-bounce-in">🎉</div>
          <h1 className="font-poppins font-black text-2xl mb-1">Order Placed!</h1>
          <p className="text-white/80 text-sm">Order #{orderPlaced.id}</p>
          <div className="mt-3 bg-white/20 rounded-2xl px-4 py-2 inline-flex items-center gap-2">
            <span className="text-yellow-300">👑</span>
            <span className="text-sm font-semibold">+{orderPlaced.pointsEarned} Singh Coins earned!</span>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-6 space-y-4">
        {/* Order Status Card */}
        <div className="bg-white rounded-3xl shadow-xl p-5">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-2xl">{modeEmoji[orderPlaced.mode]}</span>
            <div>
              <h2 className="font-poppins font-bold text-gray-800 capitalize">{orderPlaced.mode} Order</h2>
              <p className="text-gray-400 text-xs">Burger Singh, Connaught Place</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="space-y-0">
            {steps.map((step, idx) => {
              const isCompleted = idx < currentStep;
              const isCurrent = idx === currentStep;
              const isPending = idx > currentStep;
              return (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isCompleted ? 'bg-green-500 text-white' :
                      isCurrent ? 'bg-orange-500 text-white animate-pulse' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? '✓' : idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`w-0.5 h-8 transition-all ${isCompleted ? 'bg-green-400' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className={`font-semibold text-sm ${isCurrent ? 'text-orange-500' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                      {step}
                    </p>
                    {isCurrent && (
                      <p className="text-gray-400 text-xs mt-0.5">
                        {orderPlaced.mode === 'dine-in' ? 'Est. 8-12 mins' : orderPlaced.mode === 'delivery' ? 'Est. 25-35 mins' : 'Est. 10-15 mins'}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simulate progress button (demo only) */}
          {currentStep < steps.length - 1 && (
            <button
              onClick={() => setCurrentStep(s => s + 1)}
              className="w-full bg-gray-100 text-gray-500 text-xs py-2 rounded-xl"
            >
              [Demo: Advance to next step →]
            </button>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-sm p-5">
          <h3 className="font-poppins font-bold text-gray-800 mb-3">Order Summary</h3>
          <div className="space-y-2 mb-3">
            {orderPlaced.items.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <span className="text-lg">{item.image}</span>
                <span className="flex-1 text-sm text-gray-700">{item.name}</span>
                <span className="text-xs text-gray-400">×{item.qty}</span>
                <span className="font-semibold text-sm text-gray-800">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gray-100 mb-3" />
          <div className="flex justify-between font-poppins font-bold text-charcoal-800">
            <span>Total Paid</span>
            <span>₹{orderPlaced.total}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => setScreen('home')}
            className="flex-1 bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-2xl text-sm shadow-sm"
          >
            Back to Home
          </button>
          <button
            onClick={() => setScreen('menu')}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-semibold py-3.5 rounded-2xl text-sm shadow-md shadow-orange-200"
          >
            Order Again 🍔
          </button>
        </div>
      </div>
    </div>
  );
}
