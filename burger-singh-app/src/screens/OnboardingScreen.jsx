import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const slides = [
  {
    emoji: '🍔',
    bg: 'from-orange-500 to-red-600',
    title: 'Desi Burgers,\nDesi Dil',
    subtitle: "India's boldest burgers, crafted with spices that tell a story. Order at the outlet, skip the line.",
    cta: null,
  },
  {
    emoji: '🎁',
    bg: 'from-purple-600 to-indigo-700',
    title: 'Exclusive Dine-In\nOffers, Sirf App Pe',
    subtitle: 'Unlock upto 30% OFF when you order via the app at our outlets. Plus earn Singh Coins on every bite.',
    cta: null,
  },
  {
    emoji: '👑',
    bg: 'from-yellow-500 to-orange-600',
    title: 'Earn. Redeem.\nBe a Raja Singh.',
    subtitle: 'Every rupee spent earns Singh Coins. Climb tiers from Chhota Singh to Raja Singh and unlock legendary perks.',
    cta: null,
  },
];

export default function OnboardingScreen() {
  const { login, setScreen } = useApp();
  const [slide, setSlide] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const [authStep, setAuthStep] = useState('phone'); // phone | otp | name
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [name, setName] = useState('');

  const handleOtpChange = (val, idx) => {
    const updated = [...otp];
    updated[idx] = val.slice(-1);
    setOtp(updated);
    if (val && idx < 3) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  const handleLogin = () => {
    login({ name: name || 'Singh Sahab', phone, points: 0, tier: 'Chhota Singh' });
  };

  const skipToHome = () => {
    login({ name: 'Guest', phone: '', points: 0, tier: 'Chhota Singh', isGuest: true });
  };

  if (showAuth) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 pt-12 pb-16 px-6 text-white">
          <button onClick={() => setShowAuth(false)} className="mb-6 text-white/80 text-sm flex items-center gap-1">
            ← Back
          </button>
          <div className="text-5xl mb-3">🍔</div>
          <h1 className="font-poppins font-bold text-3xl">Welcome to<br />Burger Singh</h1>
          <p className="text-white/80 text-sm mt-2">India ka sabse mast burger experience</p>
        </div>

        <div className="flex-1 -mt-8 bg-cream rounded-t-3xl px-6 pt-8 pb-6">
          {authStep === 'phone' && (
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-xl text-charcoal-800 mb-1">Enter your number</h2>
              <p className="text-gray-500 text-sm mb-6">We'll send a 4-digit OTP. No spam, promise!</p>
              <div className="flex gap-3 mb-4">
                <div className="bg-white border border-gray-200 rounded-xl px-3 flex items-center text-gray-600 font-medium text-sm shadow-sm">
                  🇮🇳 +91
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="10-digit mobile number"
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base shadow-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <button
                onClick={() => phone.length === 10 && setAuthStep('otp')}
                disabled={phone.length !== 10}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-semibold py-4 rounded-2xl disabled:opacity-40 transition-all active:scale-95 shadow-lg shadow-orange-200"
              >
                Get OTP
              </button>
              <div className="flex items-center my-5">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="px-3 text-gray-400 text-xs">or continue with</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <button
                onClick={() => login({ name: 'Google User', phone: '', points: 150, tier: 'Chhota Singh' })}
                className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-3.5 rounded-2xl flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
              >
                <span className="text-xl">G</span> Continue with Google
              </button>
              <button
                onClick={skipToHome}
                className="w-full mt-3 text-gray-400 text-sm py-3 text-center"
              >
                Continue as Guest →
              </button>
            </div>
          )}

          {authStep === 'otp' && (
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-xl text-charcoal-800 mb-1">Verify OTP</h2>
              <p className="text-gray-500 text-sm mb-6">Sent to +91 {phone}. <button onClick={() => setAuthStep('phone')} className="text-orange-500 font-medium">Change</button></p>
              <div className="flex gap-3 justify-center mb-6">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="tel"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleOtpChange(e.target.value, idx)}
                    className="w-16 h-16 text-center text-2xl font-bold bg-white border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 focus:outline-none text-charcoal-800 shadow-sm"
                  />
                ))}
              </div>
              <button
                onClick={() => setAuthStep('name')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-semibold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-200"
              >
                Verify & Continue
              </button>
              <p className="text-center text-gray-400 text-sm mt-4">Resend OTP in <span className="text-orange-500 font-medium">30s</span></p>
            </div>
          )}

          {authStep === 'name' && (
            <div className="animate-fade-in">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="font-poppins font-bold text-xl text-charcoal-800 mb-1">What should we call you?</h2>
              <p className="text-gray-500 text-sm mb-6">Your Singh name for the loyalty leaderboard!</p>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Bunty Singh, Pinky Singh..."
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-800 text-base shadow-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 mb-4"
              />
              <button
                onClick={handleLogin}
                disabled={!name.trim()}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-poppins font-semibold py-4 rounded-2xl disabled:opacity-40 transition-all active:scale-95 shadow-lg shadow-orange-200"
              >
                Start Eating! 🍔
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slides[slide].bg} flex flex-col`}>
      {/* Skip */}
      <div className="flex justify-end p-6 pt-12">
        <button onClick={skipToHome} className="text-white/70 text-sm font-medium bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
          Skip
        </button>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="text-[100px] mb-6 animate-bounce-in">{slides[slide].emoji}</div>
        <h1 className="font-poppins font-black text-white text-4xl leading-tight mb-4 whitespace-pre-line">
          {slides[slide].title}
        </h1>
        <p className="text-white/80 text-base leading-relaxed max-w-xs">
          {slides[slide].subtitle}
        </p>
      </div>

      {/* Bottom */}
      <div className="px-6 pb-12">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === slide ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>

        {slide < slides.length - 1 ? (
          <button
            onClick={() => setSlide(s => s + 1)}
            className="w-full bg-white text-orange-600 font-poppins font-bold py-4 rounded-2xl text-lg transition-all active:scale-95 shadow-xl"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setShowAuth(true)}
            className="w-full bg-white text-orange-600 font-poppins font-bold py-4 rounded-2xl text-lg transition-all active:scale-95 shadow-xl"
          >
            Get Started 🚀
          </button>
        )}

        <button onClick={skipToHome} className="w-full text-white/60 text-sm py-3 mt-2 text-center">
          Continue without account
        </button>
      </div>
    </div>
  );
}
