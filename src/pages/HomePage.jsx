import React, { useState, useEffect } from 'react';
import { useCart } from '../cartContext/CartContext';
import { useTranslation } from 'react-i18next'; 

const BannerSlider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    'https://images.uzum.uz/d42cinej76okhkd9cokg/main_page_banner.jpg',
    'https://images.uzum.uz/d39pbpt2lln52upu6ln0/main_page_banner.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <img
              src={banners[currentSlide]}
              alt={`Banner ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full z-10 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ChevronLeftIcon />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full z-10 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ChevronRightIcon />
            </button>

            <div className="absolute inset-0 bg-gradient-to-right from-black/10 to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-600 w-8'
                    : 'bg-white/60 hover:bg-white/80 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentSlide + 1} / {banners.length}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const{ t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productQuantities, setProductQuantities] = useState({});
  const { addToCart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const HeartIcon = ({ filled }) => (
    <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductQuantities(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const handleIncrease = (productId) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
    updateQuantity(productId, (productQuantities[productId] || 0) + 1);
  };

  const handleDecrease = (productId) => {
    if ((productQuantities[productId] || 0) > 1) {
      setProductQuantities(prev => ({
        ...prev,
        [productId]: prev[productId] - 1
      }));
      updateQuantity(productId, (productQuantities[productId] || 0) - 1);
    } else {
      removeFromCart(productId);
      setProductQuantities(prev => ({
        ...prev,
        [productId]: 0
      }));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-purple-600">Yuklanmoqda...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <BannerSlider2 />

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">{t('home.products')}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => {
              const discount = Math.round(product.discountPercentage);
              const originalPrice = Math.round(product.price / (1 - discount / 100));
              const monthlyPayment = Math.round(product.price / 12);
              const quantity = productQuantities[product.id] || 0;

              return (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="relative aspect-square p-4 bg-gray-50">
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 z-10">
                      <HeartIcon filled={false} />
                    </button>
                    
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      {discount > 0 && (
                        <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-md font-bold">
                          -{discount}%
                        </span>
                      )}
                    </div>

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-3 flex-1 flex flex-col">
                    <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1 mb-3">
                      <StarIcon />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.stock} {t('home.baholash')})</span>
                    </div>

                    <div className="flex-1"></div>

                    <div className="mb-2">
                      <div className="inline-block bg-yellow-50 px-2 py-1 rounded-md">
                        <span className="text-xs font-semibold text-gray-900">
                          {monthlyPayment.toLocaleString()} so'm/{t('home.moth')}
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      {discount > 0 && (
                        <div className="text-xs text-gray-400 line-through mb-1">
                          {originalPrice.toLocaleString()} so'm
                        </div>
                      )}
                      <div className="text-lg font-bold text-gray-900">
                        {Math.round(product.price).toLocaleString()} so'm
                      </div>
                    </div>

                    {quantity === 0 ? (
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                      >
                        <CartIcon />
                        <span>{t('home.toCart')}</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 border border-purple-600 rounded-xl bg-purple-50">
                        <button
                          onClick={() => handleDecrease(product.id)}
                          className="flex-1 py-3 px-2 hover:bg-purple-100 font-bold text-purple-600 transition-colors"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center font-bold text-purple-600">{quantity}</span>
                        <button
                          onClick={() => handleIncrease(product.id)}
                          className="flex-1 py-3 px-2 hover:bg-purple-100 font-bold text-purple-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;