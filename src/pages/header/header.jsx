import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../cartContext/CartContext';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  const { cartCount } = useCart();

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const CartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  return (
    <div className="w-full bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
              <MapPinIcon />
              <span className="font-medium">Toshkent</span>
              <ChevronDownIcon />
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-purple-600">Topshirish punktlari</a>
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Sotuvchi bo'lish</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Topshirish punktini ochish</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Savol-javob</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Buyurtmalarim</a>
              <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" alt="UZ" className="w-5 h-3" />
                <span>O'zbekcha</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <NavLink to="/">
              <img src={Logo} alt="Uzum Market" className="h-8" />
            </NavLink>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-600 rounded-xl hover:bg-purple-200 transition-colors">
            <MenuIcon />
            <span className="font-medium">Katalog</span>
          </button>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <UserIcon />
              <span className="font-medium hidden sm:inline">Kirish</span>
            </button>
            <button className="p-2 hover:bg-gray-100 flex gap-2 items-center rounded-lg transition-colors relative">
              <HeartIcon />
              <span className="font-medium hidden sm:inline">Saralangan</span>
            </button>
            <NavLink
              to="/cart"
              className="p-2 hover:bg-gray-100 flex gap-2 items-center rounded-lg transition-colors relative"
            >
              <CartIcon />
              <span className="font-medium hidden sm:inline">Savat</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 w-5 h-5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 overflow-x-auto">
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">🎉</span>
              <span>Hafta tovarlari</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">🍎</span>
              <span>Qishki to'plamli</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">🎨</span>
              <span>Hobbi va ijod</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">📱</span>
              <span>Smartfonlari</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">💻</span>
              <span>Elektronika</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">🏠</span>
              <span>Maishiy texnika</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap hover:text-purple-600">
              <span className="text-lg">💄</span>
              <span>Aksessuarlar</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm whitespace-nowrap text-gray-600 hover:text-purple-600">
              <span>Yana</span>
              <ChevronDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;