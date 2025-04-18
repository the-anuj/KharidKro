import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/Thunk/UserThunk/cartThunk'
import { getProducts } from '../../Store/Thunk/UserThunk/productThunk';
import {getCurrentUser} from '../../utils/auth'
import './Product.css'

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const { loading, error } = useSelector(state => state.products)

  const currentUser = getCurrentUser();
  const userId = currentUser?.id;
 

  useEffect(() => {
    dispatch(getProducts())
  }, []);


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
  
  const card = products.map(product => (
      <div className='bg-white mb-30 w-60 h-70 rounded-2xl card_item' key={product._id}>
        <div className='p-6 border-white aspect-square card_img_div'>
          <img className="max-h-60 px-10 card_img" src={product.image} alt="" />
        </div>

        <h5 className="text-sm -mt-10 ml-5 card_title">{(product.name.slice(0, 20))}{product.name.length >= 20 && "..."}</h5>
        <h3 className="text-sm -mt-10 ml-5 card_price">${product.price}</h3>

        <button className=' w-full bg-slate-900 h-10 rounded-b-2xl cursor-pointer text-white mt-10 addtocartButton' onClick={()=>handleAddToCart(product)} >Add to Cart</button>

      </div>
  ));
  return (
    <div className='bg-slate-300 flex flex-col justify-center items-center p-5 product_loading_card_div mt-10'>
      {loading && <p className="text-blue-500">
        <div className="flex justify-center items-center loading_div">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      </p>}
      <div className='my-10 text-3xl font-bold underline product_heading'>Products</div>
      
      <div className="flex flex-row flex-wrap justify-between items-center card_div">{card}</div>
    </div>
  )
}


export default Product