import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const paymentMethods = [
  { id: 'upi', label: 'UPI', emoji: '📱', desc: 'GPay, PhonePe, Paytm' },
  { id: 'card', label: 'Card', emoji: '💳', desc: 'Credit / Debit card' },
  { id: 'cash', label: 'Cash', emoji: '💵', desc: orderMode => orderMode === 'dine-in' ? 'Pay at counter' : 'Pay on delivery' },
];

export default function CheckoutScreen() {
  const { cart, cartTotal, setScreen, orderMode, loyaltyPoints, placeOrder } = useApp();
  const [payMethod, setPayMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [address, setAddress] = useState('');
  const [usePoints, setUsePoints] = useState(false);

  const subtotal = cartTotal;
  const gst = Math.round(subtotal * 0.05);
  const appDiscount = orderMode === 'dine-in' ? Math.round(subtotal * 0.1) : 0;
  const deliveryFee = orderMode === 'delivery' ? 49 : 0;
  const pointsDiscount = usePoints ? Math.min(loyaltyPoints, Math.floor(subtotal * 0.2)) : 0;
  const total = subtotal + gst + deliveryFee - appDiscount - pointsDiscount;

  return (
    <div className="min-h-screen bg-cream pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 pt-12 pb-6 px-5">
        <div className="flex items-center gap-3">
          <button onClick={() => setScreen('cart')} className="text-white/80 text-2xl">‹</button>
          <h1 className="font-poppins font-black text-white text-2xl">Checkout</h1>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* Order Mode Indicator */}
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
          <span className="text-2xl">{orderMode === 'dine-in' ? '🏪' : orderMode === 'takeaway' ? '🛍️' : '🛵'}</span>
          <div>
            <p className="font-semibold text-gray-800 capitalize text-sm">{orderMode} Order</p>
            <p className="text-gray-400 text-xs">Burger Singh, Connaught Place</p>
          </div>
          <button onClick={() => setScreen('home')} className="ml-auto text-orange-500 text-xs font-medium">Change</button>
        </div>

        {/* Dine-in: Table Number */}
        {orderMode === 'dine-in' && (
          <div className="bg-white rounded-2xl px-4 py-4 shadow-sm">
            <h3 className="font-poppins font-semibold text-gray-800 mb-3">Table Details</h3>
            <input
              type="number"
              value={tableNo}
              onChange={e => setTableNo(e.target.value)}
              placeholder="Enter table number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-sm"
            />
            <p className="text-gray-400 text-xs mt-2">Show QR at counter if table number is unknown</p>
          </div>
        )}

        {/* Delivery: Address */}
        {orderMode === 'delivery' && (
          <div className="bg-white rounded-2xl px-4 py-4 shadow-sm">
            <h3 className="font-poppins font-semibold text-gray-800 mb-3">Delivery Address</h3>
            <div className="space-y-2">
              {['Home - 42 Lajpat Nagar, New Delhi', 'Work - Connaught Place, Block A'].map(addr => (
                <div
                  key={addr}
                  onClick={() => setAddress(addr)}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${address === addr ? 'border-orange-400 bg-orange-50' : 'border-gray-100'}`}
                >
                  <span className="text-lg">{addr.startsWith('Home') ? '🏠' : '💼'}</span>
                  <span className="text-sm text-gray-700">{addr}</span>
                  {address === addr && <span className="ml-auto text-orange-500">✓</span>}
                </div>
              ))}
              <button className="flex items-center gap-2 text-orange-500 text-sm font-medium p-2">
                <span>+</span> Add new address
              </button>
            </div>
          </div>
        )}

        {/* Singh Coins */}
        {loyaltyPoints > 0 && (
          <div
            onClick={() => setUsePoints(v => !v)}
            className={`bg-white rounded-2xl px-4 py-4 shadow-sm border-2 cursor-pointer transition-all ${usePoints ? 'border-yellow-400' : 'border-transparent'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">👑</span>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-sm">Use Singh Coins</p>
                <p className="text-gray-400 text-xs">You have {loyaltyPoints} coins = ₹{loyaltyPoints} discount</p>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${usePoints ? 'bg-yellow-400' : 'bg-gray-200'}`}>
                <div className={`w-5 h-5 bg-white rounded-full m-0.5 shadow transition-all ${usePoints ? 'ml-6' : ''}`} />
              </div>
            </div>
            {usePoints && (
              <p className="text-yellow-700 text-xs font-medium mt-2 bg-yellow-50 rounded-xl px-3 py-2">
                ✓ Saving ₹{pointsDiscount} with Singh Coins!
              </p>
            )}
          </div>
        )}

        {/* Payment Method */}
        <div className="bg-white rounded-2xl px-4 py-4 shadow-sm">
          <h3 className="font-poppins font-semibold text-gray-800 mb-3">Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map(method => (
              <div
                key={method.id}
                onClick={() => setPayMethod(method.id)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${payMethod === method.id ? 'border-orange-400 bg-orange-50' : 'border-gray-100'}`}
              >
                <span className="text-2xl">{method.emoji}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">{method.label}</p>
                  <p className="text-gray-400 text-xs">{typeof method.desc === 'function' ? method.desc(orderMode) : method.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all ${payMethod === method.id ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
                  {payMethod === method.id && <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs">✓</div>}
                </div>
              </div>
            ))}
          </div>

          {payMethod === 'upi' && (
            <input
              type="text"
              value={upiId}
              onChange={e => setUpiId(e.target.value)}
              placeholder="Enter UPI ID (e.g. name@upi)"
              className="w-full mt-3 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-orange-400"
            />
          )}
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
          <h3 className="font-poppins font-bold text-gray-800 mb-3">Bill Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between text-gray-600"><span>GST (5%)</span><span>₹{gst}</span></div>
            {deliveryFee > 0 && <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>₹{deliveryFee}</span></div>}
            {appDiscount > 0 && <div className="flex justify-between text-green-600 font-medium"><span>🎁 App Discount</span><span>-₹{appDiscount}</span></div>}
            {pointsDiscount > 0 && <div className="flex justify-between text-yellow-600 font-medium"><span>👑 Singh Coins</span><span>-₹{pointsDiscount}</span></div>}
            <div className="h-px bg-gray-100 my-1" />
            <div className="flex justify-between font-poppins font-bold text-charcoal-800 text-base"><span>Total</span><span>₹{total}</span></div>
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-5 py-4">
        <button
          onClick={placeOrder}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 active:scale-95 transition-all text-lg"
        >
          Place Order · ₹{total} 🎉
        </button>
        <p className="text-center text-gray-400 text-xs mt-2">By ordering you agree to our terms. All prices incl. taxes.</p>
      </div>
    </div>
  );
}
