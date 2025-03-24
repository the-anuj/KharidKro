import React, { useState, useEffect } from 'react';
import Admin_Navbar from '../AdminNav'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";

import { updateAdminProduct, getAdminProducts } from '../../Store/Thunk/AdminThunk/productThunk';

const Index = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminProducts, loading, error } = useSelector((state) => state.adminProduct);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  // Fetch product data when the component mounts
  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

  // Pre-fill the form with the product data
  useEffect(() => {
    if (productId && adminProducts.length > 0) {
      const product = adminProducts.find((p) => p._id === productId);
      if (product) {
        setFormData(product);
      }
    }
  }, [productId, adminProducts]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAdminProduct({ productId, updatedData: formData }))
      .then(() => {
        navigate('/admin/getproduct');
      });
  };

  return (
    <div className='flex flex-row'>
      <Admin_Navbar />
      <div className='flex flex-col'>

      <h1 className='ml-96 text-2xl'>Admin Update Management</h1>
    <form className='update_product_form flex flex-col gap-5' onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleOnChange}
        placeholder="Product Name"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleOnChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleOnChange}
        placeholder="Category"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleOnChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="image"
        placeholder="Product Image URL"
        required
        value={formData.image}
        onChange={handleOnChange}
        className=''
      />
      <button type="submit" disabled={loading} className='flex flex-row items-center justify-center cursor-pointer'> 
        {loading ? <TbLoader2 id='file-loader' /> : 'Update Product'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </div>
  </div>
  );
};

export default Index;