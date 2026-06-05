import React from 'react';

export default function MenuItemCard({ item, onTap, onAdd }) {
  const discount = item.originalPrice
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : null;

  return (
    <div
      className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex card-lift cursor-pointer"
      onClick={onTap}
    >
      {/* Image area */}
      <div className={`w-28 bg-gradient-to-br ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
        <span className="text-4xl">{item.image}</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-3.5">
        {/* Tags */}
        <div className="flex gap-1 flex-wrap mb-1.5">
          {item.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${
                tag === 'Bestseller' ? 'bg-orange-100 text-orange-700' :
                tag === 'New' ? 'bg-green-100 text-green-700' :
                tag === 'Veg' ? 'bg-green-100 text-green-600' :
                tag === 'Spicy' ? 'bg-red-100 text-red-600' :
                'bg-gray-100 text-gray-600'
              }`}
            >
              {tag}
            </span>
          ))}
          <span className={`text-xs px-1 ${item.isVeg ? 'text-green-600' : 'text-red-500'}`}>
            {item.isVeg ? '🟢' : '🔴'}
          </span>
        </div>

        <h3 className="font-poppins font-semibold text-charcoal-800 text-sm leading-snug mb-1">{item.name}</h3>
        <p className="text-gray-400 text-xs leading-snug line-clamp-2 mb-2">{item.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs font-semibold text-gray-700">{item.rating}</span>
          <span className="text-gray-400 text-xs">({item.reviews.toLocaleString()})</span>
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-poppins font-bold text-charcoal-800 text-base">₹{item.price}</span>
            {item.originalPrice && (
              <span className="text-gray-400 text-xs line-through ml-1.5">₹{item.originalPrice}</span>
            )}
            {discount && (
              <span className="text-green-600 text-xs font-bold ml-1">{discount}% off</span>
            )}
          </div>
          <button
            onClick={e => { e.stopPropagation(); onAdd(); }}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl active:scale-90 transition-all shadow-md shadow-orange-200"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
