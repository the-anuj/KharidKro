import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/Thunk/UserThunk/cartThunk'
import { getProducts } from '../../Store/Thunk/UserThunk/productThunk';
import { getCurrentUser } from '../../utils/auth'
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const { loading, error } = useSelector(state => state.products)
  const { category } = useParams();

  const currentUser = getCurrentUser();
  const userId = currentUser?.id;

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  const handleAddToCart = (product) => {
    if (!userId) {
      alert('Please login to add items to cart');
      return;
    }
    dispatch(addToCart({
      userId,
      productId: product._id,
      quantity: 1
    }));
  };

  const card = filteredProducts.map(product => (
    <div
      className="bg-white shadow-lg rounded-2xl w-64 h-80 flex flex-col justify-between items-center mb-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
      key={product._id}
    >
      <div className="w-full h-44 flex items-center justify-center p-4">
        <img className="max-h-36 w-auto object-contain rounded-lg bg-gray-50" src={product.image} alt="" />
      </div>
      <h5 className="text-base font-semibold text-gray-800 mt-1 w-11/12 truncate">{product.name}</h5>
      <div className="flex flex-row items-center ml-3 mb-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm mr-0.5" />
        ))}
        <span className="text-xs text-gray-500 ml-1">(120)</span>
      </div>
      <h3 className="text-lg font-bold text-blue-400 mt-1 w-11/12">${product.price}</h3>
      <button
        className="w-full bg-blue-500 h-14 rounded-b-2xl cursor-pointer text-white font-semibold transition-colors duration-200 hover:bg-blue-700 text-lg mt-auto"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-blue-100 flex flex-col justify-center items-center py-8 min-h-screen">
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      )}
      <div className="my-10 text-3xl font-bold underline text-gray-800">{category} Products</div>
      {filteredProducts.length === 0 && !loading ? (
        <div className="text-xl text-red-500 font-semibold mt-10">No product found</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">{card}</div>
      )}
    </div>
  )
}

export default CategoryProducts; 