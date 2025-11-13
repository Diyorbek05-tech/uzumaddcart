import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../cartContext/CartContext';

const DetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.reviews) {
          setComments(data.reviews);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id]);

  const getProductQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleIncrease = (productId) => {
    const currentQuantity = getProductQuantity(productId);
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrease = (productId) => {
    const currentQuantity = getProductQuantity(productId);
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-purple-600">{t('home.loading')}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10 min-h-screen">
        <p className="text-gray-600 text-lg">Mahsulot topilmadi</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          {t('detail.back')}
        </button>
      </div>
    );
  }

  const quantity = getProductQuantity(product.id);
  const discount = Math.round(product.discountPercentage);
  const originalPrice = Math.round(product.price / (1 - discount / 100));
  const monthlyPayment = Math.round(product.price / 12);

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
        >
          ← {t('detail.back')}
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">
                  {product.title}
                </h1>
                <p className="text-gray-500 text-sm mb-4">{product.category}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {Array(Math.floor(product.rating))
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {product.rating} ({product.stock} {t('home.baholash')})
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-50 px-4 py-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">{t('detail.mothPaymet')}</p>
                  <p className="text-lg font-bold text-gray-900">
                    {monthlyPayment.toLocaleString()} so'm / {t('home.moth')}
                  </p>
                </div>

                {discount > 0 && (
                  <div>
                    <p className="text-sm text-gray-400 line-through mb-1">
                      {originalPrice.toLocaleString()} so'm
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-md font-bold">
                        -{discount}%
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-3xl font-bold text-gray-900">
                  {Math.round(product.price).toLocaleString()} so'm
                </div>

                {quantity === 0 ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <CartIcon />
                    {t('home.toCart')}
                  </button>
                ) : (
                  <div className="flex items-center gap-2 border-2 border-purple-600 rounded-xl bg-purple-50 p-2">
                    <button
                      onClick={() => handleDecrease(product.id)}
                      className="flex-1 py-3 px-2 hover:bg-purple-100 font-bold text-purple-600 transition-colors text-xl"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-bold text-purple-600 text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product.id)}
                      className="flex-1 py-3 px-2 hover:bg-purple-100 font-bold text-purple-600 transition-colors text-xl"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 md:p-10 grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('detail.stock')}</p>
              <p className="text-lg font-bold text-gray-900">{product.stock} {t('home.baholash')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('detail.sales')}</p>
              <p className="text-lg font-bold text-gray-900">
                {Math.floor(Math.random() * 1000) + 100}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('detail.discount')}</p>
              <p className="text-lg font-bold text-gray-900">{discount}%</p>
            </div>
          </div>
        </div>

        {comments && comments.length > 0 && (
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {t('detail.comments')} ({comments.length})
            </h2>

            <div className="space-y-6">
              {comments.map((comment, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      {comment.reviewerName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {comment.reviewerName || 'Nomalum'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {comment.reviewerEmail || 'email@example.com'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {Array(Math.floor(comment.rating))
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {comment.rating}/5
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-2">
                    {comment.comment}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date().toLocaleDateString('uz-UZ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;