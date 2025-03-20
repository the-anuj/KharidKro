import './App.css'
import Navbar from './componets/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/NavPages/Home'
import About from './pages/NavPages/About'
import Product from './pages/NavPages/Product'
import Service from './pages/NavPages/Service'
import Signup from './pages/NavPages/Signup/Signup'
import Signin from './pages/NavPages/SignIn/Signin'
import Cart from './pages/NavPages/Cart'
import Dashboard from './pages/NavPages/Dashboard/Dashboard'

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
      path: '/Services',
      element: <><Navbar/><Service /></>
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
      path: '/cart',
      element:<><Navbar/><Cart/></>
    },
    {
      path: '/dashboard',
      element:<><Navbar/><Dashboard/></> 
       }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
