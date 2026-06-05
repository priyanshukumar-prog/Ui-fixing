import React from 'react';
import { useApp } from '../context/AppContext';

export default function Notification() {
  const { notification } = useApp();
  if (!notification) return null;

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-charcoal-800',
  };

  return (
    <div className={`fixed top-4 left-4 right-4 max-w-md mx-auto z-50 ${colors[notification.type] || colors.info} text-white px-4 py-3 rounded-2xl shadow-xl animate-slide-up flex items-center gap-3`}>
      <span className="text-xl">{notification.type === 'success' ? '✓' : 'ℹ'}</span>
      <span className="font-medium text-sm">{notification.message}</span>
    </div>
  );
}
