import React from 'react';
import { useApp } from '../context/AppContext';
import { menuItems } from '../data/menuData';

export default function CartScreen() {
  const { cart, cartTotal, updateQty, removeFromCart, setScreen, orderMode, loyaltyPoints, placeOrder } = useApp();

  const subtotal = cartTotal;
  const gst = Math.round(subtotal * 0.05);
  const packagingFee = orderMode === 'delivery' ? 30 : 0;
  const deliveryFee = orderMode === 'delivery' ? 49 : 0;
  const appDiscount = orderMode === 'dine-in' ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + gst + packagingFee + deliveryFee - appDiscount;
  const pointsToEarn = Math.floor(total / 10);

  const upsells = menuItems.filter(i => !cart.find(c => c.id === i.id)).slice(0, 3);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-bs-gray-50 flex flex-col items-center justify-center px-8 text-center">
        <div className="text-7xl mb-6">🛒</div>
        <h2 className="font-poppins font-bold text-bs-gray-900 text-2xl mb-2">Your cart is empty</h2>
        <p className="text-bs-gray-600 mb-8">Looks like you haven't added anything yet. Let's fix that!</p>
        <button
          onClick={() => setScreen('menu')}
          className="bg-gradient-to-r from-bs-orange-500 via-red-500 to-bs-red-500 text-white font-poppins font-bold px-8 py-4 rounded-md shadow-md shadow-bs-red-500/30 hover:shadow-lg hover:shadow-bs-red-500/40 transition-all"
        >
          Browse Menu 🍔
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bs-gray-50 pb-36">
      {/* Header */}
      <div className="bg-gradient-to-br from-bs-orange-500 via-red-500 to-bs-red-500 pt-12 pb-6 px-5 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => setScreen('menu')} className="text-white/80 text-2xl hover:text-white transition-colors">‹</button>
          <h1 className="font-poppins font-black text-white text-2xl flex-1">Your Cart</h1>
          <span className="text-white text-2xl">🛒</span>
        </div>
        {orderMode === 'dine-in' && (
          <div className="mt-3 bg-white/20 rounded-md px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
            <span>🎁</span>
            <p className="text-white text-xs font-semibold font-inter">Dine-in discount applied: -₹{appDiscount}</p>
          </div>
        )}
      </div>

      <div className="px-5 py-4 space-y-3">
        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-xs overflow-hidden border border-bs-gray-200">
          {cart.map((item, idx) => (
            <div key={item.id}>
              {idx > 0 && <div className="h-px bg-bs-gray-200 mx-4" />}
              <div className="flex items-center gap-3 px-4 py-3.5">
                <div className={`w-14 h-14 rounded-md bg-gradient-to-br ${item.bgColor} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-bs-gray-900 text-sm truncate">{item.name}</h3>
                  {item.customSpice && (
                    <p className="text-bs-gray-600 text-xs">{item.customSpice}</p>
                  )}
                  <p className="font-bold text-bs-gray-900 text-sm mt-0.5">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="w-8 h-8 rounded-md bg-bs-gray-200 flex items-center justify-center text-bs-orange-500 font-bold hover:bg-bs-gray-300 transition-colors"
                  >
                    −
                  </button>
                  <span className="font-bold text-bs-gray-900 w-5 text-center text-sm">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="w-8 h-8 rounded-md bg-bs-orange-500 flex items-center justify-center text-white font-bold hover:bg-bs-orange-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upsells */}
        {upsells.length > 0 && (
          <div>
            <p className="font-inter font-semibold text-bs-gray-700 text-sm mb-2 px-1">You might also like 👀</p>
            <div className="overflow-x-auto scroll-hide flex gap-3 pb-1">
              {upsells.map(item => (
                <div key={item.id} className="flex-shrink-0 w-40 bg-white rounded-md shadow-xs p-3 border border-bs-gray-200">
                  <div className={`w-full h-20 bg-gradient-to-br ${item.bgColor} rounded-md flex items-center justify-center text-3xl mb-2`}>
                    {item.image}
                  </div>
                  <p className="text-xs font-semibold text-bs-gray-800 line-clamp-1 mb-1 font-inter">{item.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-bs-orange-600 font-bold text-xs">₹{item.price}</span>
                    <button
                      onClick={() => { /* addToCart */ }}
                      className="text-xs bg-bs-orange-500 hover:bg-bs-orange-600 text-white px-2 py-1 rounded-sm font-bold transition-colors font-inter"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loyalty Points */}
        <div className="bg-bs-gold-50 border border-bs-gold-200 rounded-lg px-4 py-3 flex items-center gap-3">
          <span className="text-2xl">👑</span>
          <div className="flex-1">
            <p className="text-bs-gold-700 font-semibold text-sm font-inter">Earn {pointsToEarn} Singh Coins</p>
            <p className="text-bs-gold-600 text-xs font-inter">You have {loyaltyPoints} coins • Redeem on next order</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-xs px-5 py-4 border border-bs-gray-200">
          <h3 className="font-inter font-bold text-bs-gray-900 mb-3 text-lg">Bill Summary</h3>
          <div className="space-y-2 text-sm font-inter">
            <div className="flex justify-between text-bs-gray-600">
              <span>Subtotal</span><span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-bs-gray-600">
              <span>GST (5%)</span><span>₹{gst}</span>
            </div>
            {packagingFee > 0 && (
              <div className="flex justify-between text-bs-gray-600">
                <span>Packaging fee</span><span>₹{packagingFee}</span>
              </div>
            )}
            {deliveryFee > 0 && (
              <div className="flex justify-between text-bs-gray-600">
                <span>Delivery fee</span><span>₹{deliveryFee}</span>
              </div>
            )}
            {appDiscount > 0 && (
              <div className="flex justify-between text-bs-success font-semibold">
                <span>🎁 App Dine-In Discount</span><span>-₹{appDiscount}</span>
              </div>
            )}
            <div className="h-px bg-bs-gray-300 my-2" />
            <div className="flex justify-between font-inter font-bold text-bs-gray-900 text-lg">
              <span>Total</span><span className="text-bs-red-500">₹{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-bs-gray-200 px-5 py-4 shadow-lg shadow-black/5">
        <button
          onClick={() => setScreen('checkout')}
          className="w-full bg-gradient-to-r from-bs-orange-500 via-red-500 to-bs-red-500 text-white font-inter font-bold py-3.5 rounded-md flex items-center justify-between px-6 shadow-md shadow-bs-red-500/30 active:scale-95 hover:shadow-lg hover:shadow-bs-red-500/40 transition-all"
        >
          <span>Proceed to Pay</span>
          <span>₹{total} →</span>
        </button>
      </div>
    </div>
  );
}
