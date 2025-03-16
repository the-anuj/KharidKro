import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import { Link } from 'react-router-dom'

const index = () => {
    const [product , setProducts]= useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
              const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
              setProducts(response.data); 
            } catch (error) {
              setError("Error fetching products"); 
            }
          };
          fetchProducts();
    },[]);
    console.log("productsss",product);
    const card = product.slice(0,4).map(item => (
          <div className='mt-7 mx-1' id='category-item' key={item.id}>
              <Link to='/Product'><img id='category-img' src={item.image} /></Link>
              <h5 className='text-center text-2xl'>{item.name}</h5>
          </div>  
    ));

  return (
    <div className=' flex flex-row justify-between gap-7' id='category'>
       {card}
    </div>
  )
}

export default index