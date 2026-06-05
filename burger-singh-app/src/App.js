import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import LoyaltyScreen from './screens/LoyaltyScreen';
import OffersScreen from './screens/OffersScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import CartButton from './components/CartButton';
import Notification from './components/Notification';

const screenMap = {
  onboarding: OnboardingScreen,
  home: HomeScreen,
  menu: MenuScreen,
  item: ItemScreen,
  cart: CartScreen,
  checkout: CheckoutScreen,
  loyalty: LoyaltyScreen,
  offers: OffersScreen,
  orders: OrdersScreen,
  profile: ProfileScreen,
};

const noNavScreens = ['onboarding', 'item', 'cart', 'checkout'];

function AppInner() {
  const { screen } = useApp();
  const Screen = screenMap[screen] || HomeScreen;
  const showNav = !noNavScreens.includes(screen);

  return (
    <div className="min-h-screen bg-cream max-w-md mx-auto relative shadow-2xl">
      <Notification />
      <Screen />
      {showNav && <BottomNav />}
      {showNav && <CartButton />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
