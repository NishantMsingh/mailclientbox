import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
        const item = action.payload;
        const existingItem = state.items.find(itm => itm.id === item.id);
        if (!existingItem) {
            state.items.push({  //    do not do with redux   - we are using redux toolkit
                id: item.id,
                name: item.title,
                price: item.price,
                quantity: 1,
            });
            state.totalQuantity++;
            state.totalAmount += item.price;
        } else {
            existingItem.quantity++;
            state.totalQuantity++;
            state.totalAmount += item.price;
        }
    },

    removeItem(state, action) {
        const itemId=action.payload;
        const existingItem = state.items.find(itm => itm.id === itemId);
        if (existingItem.quantity===1) {
           state.items=state.items.filter((item)=>{
            return item.id!==itemId;
           })  
        } 
        else
        {
            existingItem.quantity--;
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;  
        }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const sentCartData=(cart)=>{
return async (dispatch)=>{

  dispatch(uiActions.showNotification({
    status:"pending",
    title:"Sending...",
    messege:"Sending Cart Data",

  }))
  const sendRequest=async()=>{
    const response= await fetch("https://redux-fe1aa-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart),
    });
    if(!response.ok){
    
    }
  }
  
   try{
    await sendRequest(); 
    dispatch(uiActions.showNotification({
      status:"Success",
      title:"Success",
      messege:"Sending Cart Data Successfully",
      
    }))
   }
   catch(e)
   {
    dispatch(uiActions.showNotification({
      status:"Error",
      title:"Sending Erorr",
      messege:"Sending Cart Data failed",
      
    }))
   }

}
}
// cart-slice.js
// ... (existing code)

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: "pending",
      title: "Fetching...",
      message: "Fetching Cart Data",
    }));

    const fetchData = async () => {
      const response = await fetch("https://redux-fe1aa-default-rtdb.firebaseio.com/cart.json");

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData)); // Assuming you have a 'replaceCart' action in your slice
      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success",
        message: "Fetching Cart Data Successfully",
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Fetching Error",
        message: "Fetching Cart Data failed",
      }));
    }
  };
};

// ... (existing code)

export const cartAction = cartSlice.actions;
export default cartSlice;
