import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProductsCategory} from '../../Store/Thunk/UserThunk/productThunk'
import '../../componets/category/index.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  const dispatch = useDispatch();
  const { products, loading, error }= useSelector((state)=>state.products)

  useEffect(() => {
    dispatch(getProductsCategory())
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  

    const card = products.map(item => (
          <div className='mt-7 mx-1' id='category-item' key={item.id}>
              <Link to='/Product'><img id='category-img' src={item.image} className='size-70' /></Link>
              <h5 className='text-center text-2xl'>{item.category}</h5>
          </div>  
    ));

  return (
    <div className=' flex flex-row justify-start gap-7 flex-wrap mt-25 ml-8' id='category'>
       {card}
    </div>
  )
}

export default Categories