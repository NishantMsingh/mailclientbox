import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",

  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    // ii represent diffrent casses and events
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message:action.payload.message
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
