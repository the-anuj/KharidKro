import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProductsCategory} from '../../Store/Thunk/UserThunk/productThunk'
import './index.css'
import { Link } from 'react-router-dom'

const index = () => {
  const dispatch = useDispatch();
  const { products, loading, error }= useSelector((state)=>state.products)

  useEffect(() => {
    dispatch(getProductsCategory())
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  

    const card = products.slice(0,4).map(item => (
          <div className='mt-7 mx-1' id='category-item' key={item.id}>
              <Link to='/Product'><img id='category-img' src={item.image} className='size-80' /></Link>
              <h5 className='text-center text-2xl'>{item.category}</h5>
          </div>  
    ));

  return (
    <div className=' flex flex-row justify-between gap-7' id='category'>
       {card}
    </div>
  )
}

export default index