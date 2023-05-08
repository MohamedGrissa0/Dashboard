
import { configureStore } from "@reduxjs/toolkit";
import cartSystem from './CartSystem';

const store = configureStore({
reducer:{
     favorite:cartSystem,
  
}

})

export default store;
