// src/components/Cart.js
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cartEmpty from '../../assets/cartEmpty.avif'
import { getCart, increaseQuantity, decreaseQuantity, removeFromCart } from '../../Store/Thunk/UserThunk/cartThunk';
import { getCurrentUser } from '../../utils/auth';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, error, cart } = useSelector((state) => state.cart);
  const currentUser = getCurrentUser();
  const userId = currentUser?.id;

  // Initialize cart when component mounts
  useEffect(() => {
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [dispatch, userId]);

  const handleIncreaseQuantity = (productId) => {
    if (userId) {
      dispatch(increaseQuantity({ userId, productId }));
    }
  };

  const handleDecreaseQuantity = (productId) => {
    if (userId) {
      dispatch(decreaseQuantity({ userId, productId }));
    }
  };

  const handleRemoveItem = (productId) => {
    if (userId) {
      dispatch(removeFromCart({ userId, productId }));
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <span className="ml-3">Loading cart...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>
          <div className="text-red-500 text-center py-16">
            <h2 className="text-xl font-semibold mb-2">Error Loading Cart</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-2">Please Login</h2>
            <p>You need to be logged in to view your cart.</p>
          </div>
        </div>
      </div>
    );
  }

  const cartItems = cart?.cart || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <img className="w-64 h-64 object-contain mb-6" src={cartEmpty} alt="Empty Cart" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={() => window.location.href = '/Product'} 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div className="flex flex-row justify-between border rounded-md bg-gray-50 px-5 py-4" key={item._id}>
                      <div className="flex flex-row gap-5 items-center">
                        <img className="w-20 h-20 object-cover rounded" src={item?.productId?.image} alt="" />
                        <div>
                          <h4 className="font-semibold text-gray-800">{item?.productId?.name?.slice(0, 30)}</h4>
                          <p className="text-gray-600">${item?.productId?.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-6">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleDecreaseQuantity(item.productId._id)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-semibold">{item?.quantity}</span>
                          <button 
                            onClick={() => handleIncreaseQuantity(item.productId._id)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Total Price for this item */}
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">${(item?.productId?.price * item?.quantity).toFixed(2)}</p>
                        </div>
                        
                        {/* Remove Button */}
                        <button 
                          onClick={() => handleRemoveItem(item.productId._id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="Remove item"
                        >
                          <RiDeleteBin5Line className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Items:</span>
                    <span className="font-semibold">{cart?.totalQuantity || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="font-semibold text-lg">${cart?.totalPrice || 0}</span>
                  </div>
                  <hr className="my-4" />
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
