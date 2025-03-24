import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='admin_nav flex flex-col justify-center'>
        <Link className='admin_nav_item' to='/admin/addproduct'>Add Product</Link>
        <Link className='admin_nav_item' to='/admin/getproduct'>All Products</Link>
        <Link className='admin_nav_item' to='/admin/orders'>Orders</Link>
    </div>
  )
}

export default index