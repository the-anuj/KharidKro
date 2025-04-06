// src/components/Cart.js
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cartEmpty from '../../assets/cartEmpty.avif'
import { getCart } from '../../Store/Thunk/UserThunk/cartThunk';
import { getCurrentUser } from '../../utils/auth';
import './Cart.css';
// import { removeFromCart, increaseItemQuantity,decreaseItemQuantity} from '../../Store/Slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, error} = useSelector((state) => state.cart);
  const {cart} = useSelector((state)=>state.cart.cart);
  const total = useSelector((state)=>state.cart.cart);

 

  const currentUser = getCurrentUser();
  const userId = currentUser?.id;
  // Initialize cart when component mounts
  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch, userId]);
  

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center mt-10">
      Error: {error}
    </div>
  );

  if (!userId) return (
    <div className="text-center mt-10">
      Please login to view your cart
    </div>
  );

 
  const cartItem = cart?.map(item => (
    <div className="flex flex-row justify-between border rounded-md bg-gray-200 px-5 py-3" key={item.id}>
      <span className="flex flex-row gap-5">
        <img className="size-20" src={item?.productId?.image} alt="" />
        <h4 className="my-auto mr-10">{item?.productId?.name?.slice(0, 30)}</h4>
      </span>
      <div className=" flex flex-row gap-11">
        <label className="my-auto text-2xl " >
          <button className="mr-3" type="button" onClick={()=> dispatch(decreaseItemQuantity(item))} >-</button>
          <input className="text-sm h-8 px-4 w-12 appearance-none  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-number-spin-box]:hidden" type="number" value={item?.quantity}/> 
          <button className="ml-3" type="button" onClick={()=>dispatch(increaseItemQuantity(item))}>+</button>
        </label>
        <h6 className="my-auto ">{item?.productId?.price * item?.quantity}</h6>
        <button className="text-2xl text-red-500 cursor-pointer" onClick={() => dispatch(removeFromCart(item))}><RiDeleteBin5Line /></button>
      </div>
    </div>
  ))

  return (
    <div className="flex flex-row justify-between mx-20 mt-20 items-center">
      {cartItem?.length === 0 ? (
          <img className="size-96 " src={cartEmpty} alt="" />
        ):<div className="flex flex-col mt-10 border border-black p-10 rounded-md ">
        <ul className="flex flex-row justify-between w-full ">
          <li className="ml-5 mb-3">Product</li>
          <span className="flex flex-row gap-8 mr-3 mb-3">
            <li>Quantity</li>
            <li>Price</li>
            <li>Remove</li>
          </span>
        </ul>
          <div className="flex flex-col gap-5 h-80 overflow-y-auto no-scrollbar">
          {cartItem}
        </div>
        
      </div>}
      
      <div className=" border rounded-md p-20 flex flex-col gap-10 h-90">
          <h2 className="-ml-11">Summary</h2>
          <div>
            <div className="w-40">Total Price: <span>{total.totalPrice}</span></div>
            <div className="w-40">Total items: <span>{total.totalQuantity}</span></div>
          </div>
      </div>
      
    </div>

  );
};

export default Cart;
