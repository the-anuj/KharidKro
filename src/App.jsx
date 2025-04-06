import './App.css'
import Navbar from './componets/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/NavPages/Home'
import About from './pages/NavPages/About'
import Product from './pages/NavPages/Product'
import Categories from './pages/NavPages/Categories'
import Signup from './pages/NavPages/Signup/Signup'
import Signin from './pages/NavPages/SignIn/Signin'
import Cart from './pages/NavPages/Cart'
import Dashboard from './Admin/Dashboard.jsx'

import AllProduct from './Admin/AllProducts'
import AddProduct from './Admin/AddProduct'
import UpdateAdminProduct from './Admin/EditProduct'
import Profile from './componets/Profile/Profile.jsx'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home /></>
    },
    {
      path: '/About',
      element: <><Navbar/><About /></>
    },
    {
      path: '/Product',
      element: <><Navbar/><Product /></>
    },
    {
      path: '/categories',
      element: <><Navbar/><Categories /></>
    },
    {
      path: '/signup',
      element: <><Navbar /><Signup /></>
    },
    {
      path: '/signin',
      element:<><Navbar/><Signin/></>
    },
    {
      path: '/profile',
      element:<><Navbar/><Profile/></>
    },
    {
      path: '/cart',
      element:<><Navbar/><Cart/></>
    },

    {
      path: '/admin/dashboard',
      element:<><Dashboard/></> 
    },
    {
      path: '/admin/addproduct',
      element:<><AddProduct/></> 
    },
    {
      path: '/admin/getproduct',
      element:<><AllProduct/></> 
    },
    {
      path:'/admin/updatedadminproduct/:productId',
      element:<><UpdateAdminProduct/></>
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
