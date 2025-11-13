import React from 'react';
import { useCart } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { t } = useTranslation();

  const TrashIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('cart.svat')}</h1>
          {cartItems.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Savat tozalashni xohlaysizmi?')) {
                  clearCart();
                }
              }}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              {t('cart.clearCart')}
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-xl text-gray-500">{t('cart.cartFree')}</p>
            <p className="text-gray-400 mt-2">{t('cart.addProduct')}</p>
            <Link
              to="/"
              className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              {t('cart.backToMain')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 line-clamp-2">{item.title}</h3>
                      <p className="text-purple-600 font-bold mt-1">
                        {Math.round(item.price).toLocaleString()} so'm
                      </p>
                    </div>

                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg bg-gray-50">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-3 py-1 hover:bg-gray-200 font-bold text-gray-600"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-3 py-1 hover:bg-gray-200 font-bold text-gray-600"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold text-gray-900 w-28 text-right">
                      {Math.round(item.price * item.quantity).toLocaleString()} so'm
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4 h-fit">
                <h2 className="text-lg font-bold mb-4">{t('cart.total')}</h2>

                <div className="space-y-3 mb-6 border-b pb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('home.products')}</span>
                    <span className="font-medium">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)} ta
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.price')}</span>
                    <span className="font-medium">
                      {Math.round(totalPrice).toLocaleString()} so'm
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.delivery')}</span>
                    <span className="text-green-600 font-medium">{t('cart.free')}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 text-lg font-bold border-b pb-4">
                  <span>{t('cart.total')} :</span>
                  <span className="text-purple-600 text-xl">
                    {Math.round(totalPrice).toLocaleString()} so'm
                  </span>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-3">
                  {t('cart.order')}
                </button>

                <Link
                  to="/"
                  className="w-full block text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  {t('cart.continueBuy')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;