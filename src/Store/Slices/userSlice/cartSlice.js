// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cartItems : [],
//     cartQuantity:0,
//     cartLoading:false,
//     totalPrice:0,
//     error:null
// }

//  const cartSlice = createSlice({
//     name:'cart',
//     initialState,
//     reducers:{
//         addCart:(state,action)=>{
//             const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
//             if (itemIndex >= 0) {
//                 state.cartItems[itemIndex].quantity += 1;
//                 state.totalPrice += (action.payload.price);
//                 return
//             }else{
//                 state.cartItems.push({...action.payload,quantity:1})
//             }
            
//             state.cartQuantity += 1;
//             state.totalPrice += (action.payload.price);
            
//         },
//         removeFromCart: (state, action) => {
//             const filteredCart = state.cartItems.filter(
//               (item) => item.id !== action.payload.id
//             );
//             const itemToRemove = state.cartItems.find(
//               (item) => item.id === action.payload.id
//             );
      
//             state.cartItems = filteredCart;
//             state.cartQuantity -= itemToRemove.quantity;
//             state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
//           },
//           increaseItemQuantity: (state, action) => {
//             const itemIndex = state.cartItems.findIndex(
//               (item) => item.id === action.payload.id
//             );
            
//             if(itemIndex >= 0) {
//               state.cartItems[itemIndex].quantity += 1;
//               state.totalPrice += state.cartItems[itemIndex].price;
//             }
//           },
//           decreaseItemQuantity: (state, action) => {
//             const itemIndex = state.cartItems.findIndex(
//               (item) => item.id === action.payload.id
//             );
      
//             if (state.cartItems[itemIndex].quantity > 1) {
//               state.cartItems[itemIndex].quantity -= 1;
//               state.totalPrice -= state.cartItems[itemIndex].price;
//             } else {
//               cartSlice.caseReducers.removeFromCart(state, action);
//             }
//           }

//     }
// })

// export const {addCart,removeFromCart,increaseItemQuantity,decreaseItemQuantity} = cartSlice.actions;
// export default cartSlice.reducer