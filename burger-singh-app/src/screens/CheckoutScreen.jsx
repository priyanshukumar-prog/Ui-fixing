import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const paymentMethods = [
  { id: 'upi', label: 'UPI', emoji: '📱', desc: 'GPay, PhonePe, Paytm' },
  { id: 'card', label: 'Card', emoji: '💳', desc: 'Credit / Debit card' },
  { id: 'cash', label: 'Cash', emoji: '💵', desc: orderMode => orderMode === 'dine-in' ? 'Pay at counter' : 'Pay on delivery' },
];

// Sample coupon database
const VALID_COUPONS = {
  'WELCOME10': { discount: 10, type: 'percentage', maxDiscount: 100, minOrder: 0 },
  'DESI20': { discount: 20, type: 'percentage', maxDiscount: 150, minOrder: 200 },
  'SAVE50': { discount: 50, type: 'flat', maxDiscount: 50, minOrder: 150 },
  'SINGH15': { discount: 15, type: 'percentage', maxDiscount: 120, minOrder: 300 },
  'FRIEND100': { discount: 100, type: 'flat', maxDiscount: 100, minOrder: 500 },
};

export default function CheckoutScreen() {
  const { cart, cartTotal, setScreen, orderMode, loyaltyPoints, placeOrder } = useApp();
  const [payMethod, setPayMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [address, setAddress] = useState('');
  const [usePoints, setUsePoints] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const subtotal = cartTotal;
  const gst = Math.round(subtotal * 0.05);
  const appDiscount = orderMode === 'dine-in' ? Math.round(subtotal * 0.1) : 0;
  const deliveryFee = orderMode === 'delivery' ? 49 : 0;
  const pointsDiscount = usePoints ? Math.min(loyaltyPoints, Math.floor(subtotal * 0.2)) : 0;

  // Calculate coupon discount
  const calculateCouponDiscount = () => {
    if (!appliedCoupon) return 0;
    const coupon = VALID_COUPONS[appliedCoupon];
    if (!coupon) return 0;

    const discountBase = coupon.type === 'percentage'
      ? Math.floor(subtotal * (coupon.discount / 100))
      : coupon.discount;

    return Math.min(discountBase, coupon.maxDiscount);
  };

  const couponDiscount = calculateCouponDiscount();
  const total = subtotal + gst + deliveryFee - appDiscount - pointsDiscount - couponDiscount;

  // Handle coupon application
  const applyCoupon = () => {
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (!VALID_COUPONS[code]) {
      setCouponError('Invalid coupon code');
      return;
    }

    const coupon = VALID_COUPONS[code];
    if (subtotal < coupon.minOrder) {
      setCouponError(`Minimum order of ₹${coupon.minOrder} required`);
      return;
    }

    setAppliedCoupon(code);
    const discount = calculateCouponDiscount();
    setCouponSuccess(`✓ Coupon applied! You save ₹${discount}`);
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
    setCouponSuccess('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-bs-orange-500 via-red-500 to-bs-red-500 pt-12 pb-6 px-5 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => setScreen('cart')} className="text-white/80 text-2xl hover:text-white transition-colors">‹</button>
          <h1 className="font-poppins font-black text-white text-2xl">Checkout</h1>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* Order Mode Indicator */}
        <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-xs border border-gray-100">
          <span className="text-2xl">{orderMode === 'dine-in' ? '🏪' : orderMode === 'takeaway' ? '🛍️' : '🛵'}</span>
          <div>
            <p className="font-inter font-semibold text-bs-gray-900 capitalize text-sm">{orderMode} Order</p>
            <p className="text-bs-gray-600 text-xs">Burger Singh, Connaught Place</p>
          </div>
          <button onClick={() => setScreen('home')} className="ml-auto text-bs-orange-500 text-xs font-semibold hover:text-bs-orange-700 transition-colors">Change</button>
        </div>

        {/* Dine-in: Table Number */}
        {orderMode === 'dine-in' && (
          <div className="bg-white rounded-lg px-4 py-4 shadow-xs border border-gray-100">
            <h3 className="font-inter font-semibold text-bs-gray-900 mb-3 text-md">Table Details</h3>
            <input
              type="number"
              value={tableNo}
              onChange={e => setTableNo(e.target.value)}
              placeholder="Enter table number"
              className="w-full border border-bs-gray-300 rounded-md px-4 py-3 text-bs-gray-900 focus:outline-none focus:border-bs-orange-500 focus:ring-2 focus:ring-bs-orange-100 text-sm font-inter"
            />
            <p className="text-bs-gray-600 text-xs mt-2">Show QR at counter if table number is unknown</p>
          </div>
        )}

        {/* Delivery: Address */}
        {orderMode === 'delivery' && (
          <div className="bg-white rounded-lg px-4 py-4 shadow-xs border border-gray-100">
            <h3 className="font-inter font-semibold text-bs-gray-900 mb-3 text-md">Delivery Address</h3>
            <div className="space-y-2">
              {['Home - 42 Lajpat Nagar, New Delhi', 'Work - Connaught Place, Block A'].map(addr => (
                <div
                  key={addr}
                  onClick={() => setAddress(addr)}
                  className={`flex items-center gap-3 p-3 rounded-md border-2 cursor-pointer transition-all ${address === addr ? 'border-bs-orange-400 bg-bs-orange-50' : 'border-bs-gray-200'}`}
                >
                  <span className="text-lg">{addr.startsWith('Home') ? '🏠' : '💼'}</span>
                  <span className="text-sm text-bs-gray-800">{addr}</span>
                  {address === addr && <span className="ml-auto text-bs-orange-500 font-bold">✓</span>}
                </div>
              ))}
              <button className="flex items-center gap-2 text-bs-orange-500 text-sm font-semibold p-2 hover:text-bs-orange-700 transition-colors">
                <span>+</span> Add new address
              </button>
            </div>
          </div>
        )}

        {/* Singh Coins */}
        {loyaltyPoints > 0 && (
          <div
            onClick={() => setUsePoints(v => !v)}
            className={`bg-white rounded-lg px-4 py-4 shadow-xs border-2 cursor-pointer transition-all ${usePoints ? 'border-bs-gold-500' : 'border-bs-gray-200'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">👑</span>
              <div className="flex-1">
                <p className="font-inter font-semibold text-bs-gray-900 text-sm">Use Singh Coins</p>
                <p className="text-bs-gray-600 text-xs">You have {loyaltyPoints} coins = ₹{loyaltyPoints} discount</p>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${usePoints ? 'bg-bs-gold-500' : 'bg-bs-gray-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full m-0.5 shadow transition-all ${usePoints ? 'ml-6' : ''}`} />
              </div>
            </div>
            {usePoints && (
              <p className="text-bs-gold-700 text-xs font-semibold mt-2 bg-bs-gold-50 rounded-md px-3 py-2">
                ✓ Saving ₹{pointsDiscount} with Singh Coins!
              </p>
            )}
          </div>
        )}

        {/* Payment Method */}
        <div className="bg-white rounded-lg px-4 py-4 shadow-xs border border-gray-100">
          <h3 className="font-inter font-semibold text-bs-gray-900 mb-3 text-md">Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map(method => (
              <div
                key={method.id}
                onClick={() => setPayMethod(method.id)}
                className={`flex items-center gap-3 p-3.5 rounded-md border-2 cursor-pointer transition-all ${payMethod === method.id ? 'border-bs-orange-400 bg-bs-orange-50' : 'border-bs-gray-200'}`}
              >
                <span className="text-2xl">{method.emoji}</span>
                <div className="flex-1">
                  <p className="font-inter font-semibold text-bs-gray-900 text-sm">{method.label}</p>
                  <p className="text-bs-gray-600 text-xs">{typeof method.desc === 'function' ? method.desc(orderMode) : method.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all ${payMethod === method.id ? 'bg-bs-orange-500 border-bs-orange-500' : 'border-bs-gray-400'}`}>
                  {payMethod === method.id && <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>}
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
              className="w-full mt-3 border border-bs-gray-300 rounded-md px-4 py-3 text-bs-gray-900 text-sm focus:outline-none focus:border-bs-orange-500 focus:ring-2 focus:ring-bs-orange-100 font-inter"
            />
          )}
        </div>

        {/* Coupon Code Section */}
        <div className="bg-white rounded-lg px-4 py-4 shadow-xs border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-inter font-semibold text-bs-gray-900 text-md">Promo Code</h3>
            {appliedCoupon && <span className="text-xs font-semibold text-bs-success bg-green-50 px-2.5 py-1 rounded-full">Applied</span>}
          </div>

          {!appliedCoupon ? (
            <div>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={e => {
                    setCouponCode(e.target.value.toUpperCase());
                    setCouponError('');
                  }}
                  placeholder="Enter coupon code"
                  className="flex-1 border border-bs-gray-300 rounded-md px-4 py-3 text-bs-gray-900 focus:outline-none focus:border-bs-orange-500 focus:ring-2 focus:ring-bs-orange-100 text-sm font-semibold tracking-wider font-inter"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-bs-orange-500 hover:bg-bs-orange-600 text-white font-semibold px-4 py-3 rounded-md transition-colors font-inter"
                >
                  Apply
                </button>
              </div>
              {couponError && <p className="text-xs text-bs-error mt-1 font-inter">❌ {couponError}</p>}
              <p className="text-xs text-bs-gray-600 mt-2 font-inter">Try: WELCOME10, DESI20, SAVE50</p>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-green-50 px-3 py-3 rounded-md border border-green-200">
              <div className="flex items-center gap-2">
                <span className="text-bs-success font-bold text-lg">✓</span>
                <div>
                  <p className="text-sm font-semibold text-green-700 font-inter">{appliedCoupon}</p>
                  <p className="text-xs text-green-600 font-inter">Save ₹{couponDiscount}</p>
                </div>
              </div>
              <button
                onClick={removeCoupon}
                className="text-green-600 hover:text-green-700 text-lg font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-lg px-5 py-4 shadow-xs border border-gray-100">
          <h3 className="font-inter font-bold text-bs-gray-900 mb-3 text-lg">Bill Summary</h3>
          <div className="space-y-2 text-sm font-inter">
            <div className="flex justify-between text-bs-gray-600"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between text-bs-gray-600"><span>GST (5%)</span><span>₹{gst}</span></div>
            {deliveryFee > 0 && <div className="flex justify-between text-bs-gray-600"><span>Delivery fee</span><span>₹{deliveryFee}</span></div>}
            {appDiscount > 0 && <div className="flex justify-between text-bs-success font-semibold"><span>🎁 App Discount</span><span>-₹{appDiscount}</span></div>}
            {couponDiscount > 0 && <div className="flex justify-between text-bs-orange-600 font-semibold"><span>🎟️ Promo Code ({appliedCoupon})</span><span>-₹{couponDiscount}</span></div>}
            {pointsDiscount > 0 && <div className="flex justify-between text-bs-gold-700 font-semibold"><span>👑 Singh Coins</span><span>-₹{pointsDiscount}</span></div>}
            <div className="h-px bg-bs-gray-300 my-2" />
            <div className="flex justify-between font-inter font-bold text-bs-gray-900 text-lg"><span>Total</span><span className="text-bs-red-500">₹{Math.max(0, total)}</span></div>
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-bs-gray-200 px-5 py-4 shadow-lg shadow-black/5">
        <button
          onClick={placeOrder}
          className="w-full bg-gradient-to-r from-bs-orange-500 via-red-500 to-bs-red-500 text-white font-inter font-bold py-3.5 rounded-md shadow-md shadow-bs-red-500/30 active:scale-95 transition-all text-lg hover:shadow-lg hover:shadow-bs-red-500/40"
        >
          Place Order · ₹{Math.max(0, total)} 🎉
        </button>
        <p className="text-center text-bs-gray-600 text-xs mt-2 font-inter">By ordering you agree to our terms. All prices incl. taxes.</p>
      </div>
    </div>
  );
}
