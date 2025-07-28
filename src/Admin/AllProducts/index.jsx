import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner8 } from "react-icons/im";
import {Link} from 'react-router-dom'
import Admin_Navbar from '../AdminNav'
import { getAdminProducts, deleteAdminProduct } from '../../Store/Thunk/AdminThunk/productThunk';
import './style.css'
import emptyImage from '../../assets/empty.webp'

const ProductList = () => {
  const dispatch = useDispatch();
  const { adminProducts, loading, error } = useSelector((state) => state.adminProduct);

  useEffect(() => {
    dispatch(getAdminProducts(adminProducts));
  }, []);

  const handleOnDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteAdminProduct(productId));
    }
  };



  if (loading) return <p id='loader' className='m-auto'><ImSpinner8/></p>;
  if (error) return <p>Error: {error}</p>;
  if(adminProducts.length == 0 ) return <p className='flex flex-col items-center justify-center'><img src={emptyImage} alt=""  className='m-auto'/><Link to='/admin/addproduct' className='border-2 p-4 border-amber-300 rounded-md'>Please Add Some Product</Link></p>

  return (
    <div className='flex flex-row'>
      <Admin_Navbar/>
    <div className='admin_product flex flex-col items-center'>
      <h1 className='py-5 text-2xl'>Products</h1>
      <ul className='flex flex-col w-full gap-2'>
        {adminProducts.map((product) => (
          <li key={product._id} className='flex flex-row justify-between px-5 py-3 bg-slate-100 text-slate-800'>
            <img src={product.image} alt="" className='size-10'/>
            <h2 className='px-20 max-w-40 text-sm'>{(product.name.length > 10) ? product.name.slice(0, 10) + '...' : product.name}</h2>
            <p className='px-9 max-w-20'>Rs.{product.price}</p>
            <h2 className='px-5 w-5'>{product.category}</h2>
            {/* <h2 className='px-5 w-5'>{product.quantity}</h2> */}
            <Link className='bg-yellow-300 px-3 py-1  rounded-md' to={`/admin/updatedadminproduct/${product._id}`}>Edit</Link>
            <button className='bg-red-500 px-3 py-1 rounded-md' onClick={()=>handleOnDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ProductList;