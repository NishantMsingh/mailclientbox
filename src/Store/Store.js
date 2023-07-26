import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mail-slice";

const store = configureStore({
  reducer: {
    mail: mailSlice.reducer,
  },
});

export default store;


