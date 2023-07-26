import { createSlice } from "@reduxjs/toolkit";
const mailSlice = createSlice({
  name: "mail",
  initialState: {
    allMails: [],
    sentMails:[],
    receivedMails:[],
    deletedMails:[],
    
  },
  reducers: {
    addMail(state, action) {
      console.log(action.payload);
    }
  }
});

// export const sentCartData=(cart)=>{
// return async (dispatch)=>{

//   dispatch(uiActions.showNotification({
//     status:"pending",
//     title:"Sending...",
//     messege:"Sending Cart Data",

//   }))
//   const sendRequest=async()=>{
//     const response= await fetch("https://redux-fe1aa-default-rtdb.firebaseio.com/cart.json",{
//       method:"PUT",
//       body:JSON.stringify(cart),
//     });
//     if(!response.ok){
    
//     }
//   }
  
//    try{
//     await sendRequest(); 
//     dispatch(uiActions.showNotification({
//       status:"Success",
//       title:"Success",
//       messege:"Sending Cart Data Successfully",
      
//     }))
//    }
//    catch(e)
//    {
//     dispatch(uiActions.showNotification({
//       status:"Error",
//       title:"Sending Erorr",
//       messege:"Sending Cart Data failed",
      
//     }))
//    }

// }
// }
// cart-slice.js
// ... (existing code)

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     dispatch(uiActions.showNotification({
//       status: "pending",
//       title: "Fetching...",
//       message: "Fetching Cart Data",
//     }));

//     const fetchData = async () => {
//       const response = await fetch("https://redux-fe1aa-default-rtdb.firebaseio.com/cart.json");

//       if (!response.ok) {
//         throw new Error("Fetching cart data failed.");
//       }

//       const data = await response.json();
//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(cartAction.replaceCart(cartData)); // Assuming you have a 'replaceCart' action in your slice
//       dispatch(uiActions.showNotification({
//         status: "success",
//         title: "Success",
//         message: "Fetching Cart Data Successfully",
//       }));
//     } catch (error) {
//       dispatch(uiActions.showNotification({
//         status: "error",
//         title: "Fetching Error",
//         message: "Fetching Cart Data failed",
//       }));
//     }
//   };
// };

// ... (existing code)

export const mailAction = mailSlice.actions;
export default mailSlice;
