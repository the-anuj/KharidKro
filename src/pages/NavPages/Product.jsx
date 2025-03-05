import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Store/Slices/cartSlice'
import { getProducts } from '../../Store/Thunk/productThunk';

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const { loading, error } = useSelector(state => state.products)


  
  useEffect(() => {
    dispatch(getProducts())

  }, []);


  const handleAddToCart = (product) => {
    dispatch(addCart(product))
  }
  const card = products.map(product => (
    <>
      <div className='bg-white mb-30 w-60 h-70 rounded-2xl'>
        <div className='p-6 border-white aspect-square'>
          <img className="max-h-60 px-10" src={product.images} alt="" />
        </div>

        <h5 className="text-sm -mt-10 ml-5">{(product.title.slice(0, 20))}{product.title.length >= 20 && "..."}</h5>
        <h3 className="text-sm -mt-10 ml-5">${product.price}</h3>

        <button className=' w-full bg-slate-900 h-10 rounded-b-2xl cursor-pointer text-white mt-10' onClick={() => handleAddToCart(product)}>Add to Cart</button>

      </div>
    </>
  ));
  return (
    <div className='bg-slate-300 flex flex-col justify-center items-center p-5'>
      {loading && <p className="text-blue-500">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      </p>}
      <div className='my-10 text-3xl font-bold underline'>Products</div>
      
      <div className="flex flex-row flex-wrap justify-between items-center  ">{card}</div>
    </div>
  )
}


export default Product