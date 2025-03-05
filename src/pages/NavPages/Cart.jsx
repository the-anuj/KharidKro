// src/components/Cart.js
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import cartEmpty from '../../assets/cartEmpty.avif'
import { removeFromCart, increaseItemQuantity,decreaseItemQuantity} from '../../Store/Slices/cartSlice'

const Cart = () => {
  const { cartItems,quantity,totalPrice} = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const cartItem = cartItems.map(item => (
    // console.log(item)

    <div className="flex flex-row justify-between border rounded-md bg-gray-200 px-5 py-3">
      <span className="flex flex-row gap-5">
        <img className="size-20" src={item.images} alt="" />
        <h4 className="my-auto mr-10">{item.title.slice(0, 30)}</h4>
      </span>
      <div className=" flex flex-row gap-11">
        <label className="my-auto text-2xl " >
          <button className="mr-3" type="button" onClick={()=> dispatch(decreaseItemQuantity(item))} >-</button>
          <input className="text-sm h-8 px-4 w-12 appearance-none  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-number-spin-box]:hidden" type="number" value={item.quantity}/> 
          <button className="ml-3" type="button" onClick={()=>dispatch(increaseItemQuantity(item))}>+</button>
        </label>
        <h6 className="my-auto ">{item.price}</h6>
        <button className="text-2xl text-red-500 cursor-pointer" onClick={() => dispatch(removeFromCart(item))}><RiDeleteBin5Line /></button>
      </div>
    </div>
  ))

  return (
    <div className="flex flex-col justify-start items-center">
      {cartItem.length === 0 ? (
          <img className="size-96 " src={cartEmpty} alt="" />
        ):<div className="flex  flex-col mt-10 border border-black p-10 rounded-md -ml-96">
        <ul className="flex flex-row justify-between w-full ">
          <li className="ml-5 mb-3">Product</li>
          <span className="flex flex-row gap-8 mr-3 mb-3">
            <li>Quantity</li>
            <li>Price</li>
            <li>Remove</li>
          </span>
        </ul>
          <div className="flex flex-col gap-5">
          {cartItem}
        </div>
        <div>
          
        </div>
      </div>}
    </div>

  );
};

export default Cart;
